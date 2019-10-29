import {COMMIT_TO_CHAT_LOG} from "./types"
import moment from 'moment'

moment.locale('da')

function getPostTime(inGrundtvigsLifetime) {

  let date = moment()

  if (inGrundtvigsLifetime) date = date.subtract(160, 'years')

  return date.format('LLLL')
}
const actions = {
  [COMMIT_TO_CHAT_LOG] ({commit}, {author, text}) {
    const postingAsGrundtvig = !!author
    author = author || ''

    let post = {
      time: getPostTime(postingAsGrundtvig),
      author: author || '',
      text
    }

    commit(COMMIT_TO_CHAT_LOG, post)
  }
}

export default actions
