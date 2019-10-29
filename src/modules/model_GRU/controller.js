import * as tf from '@tensorflow/tfjs'
import charToIndex from './char2idx'
import indexToChar from './idx2char'

const debug = {
  ids: true
}

let model
async function init() {
  model = await tf.loadLayersModel('grundtvig-chatbot-app/model/model.json')
}

async function generateText(start_string) {
  // Evaluation step (generating text using the learned model)

  // Number of characters to generate
  const num_generate = 75

  // Converting our start string to numbers (vectorizing)
  let input_eval = await start_string.toLowerCase().split('').map(c => charToIndex[c])
  input_eval = tf.expandDims(input_eval, 0)

  // Empty string to store our results
  let text_generated = []

  // Low temperatures results in more predictable text.
  // Higher temperatures results in more surprising text.
  // Experiment to find the best setting.
  //const temperature = 1.0

  // Here batch size == 1
  model.resetStates()
  for (let i = 0; i < num_generate; i++) {
    let predictions = model.predict(input_eval)

    // remove the batch dimension
    predictions = await tf.squeeze(predictions).array()

    // using a multinomial distribution to predict the word returned by the model
    //predictions = predictions.map(p => p / temperature)

    let predicted_id = await tf.multinomial(predictions, 1).array()
    predicted_id = predicted_id[0]

    // We pass the predicted word as the next input to the model
    // along with the previous hidden state
    input_eval = await tf.expandDims(predicted_id, 0)

    if ( predicted_id <= 17 || 28 <= predicted_id) {
      text_generated.push(indexToChar[predicted_id])
    }
  }

  return text_generated.join('')
}

init()
  .catch(e => {
    console.error('error initializing chatbot', e)
  })

export default generateText
