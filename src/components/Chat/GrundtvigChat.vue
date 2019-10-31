<template>
  <div
    class="chat"
    v-hotkey.prevent="keymap"
  >
    <log
      listName="chatLog"
      :discriminator="isBotPost"
    ></log>
    <br>
    <reversible-text-field
      label="Snak med N. F. S. Grundtvig"
      value="Hej Grundtvig!"
      :rules="rules"
      :action="commitToChat"/>
  </div>
</template>

<script>
  import ReversibleTextField from '../ReversibleTextField'
  import Log from '../Log/Log'
  import { COMMIT_TO_CHAT_LOG } from '../../modules/types'
  import generateText from '../../modules/model_GRU/controller'

  export default {
    name: "GrundtvigChat",
    components: {
      ReversibleTextField,
      Log,
    },
    data () {
      return {
        talk: false,
        rules: [v => !!v || 'Skriv en meddelelse til Grundtvig, han har meget at sige...']
      }
    },
    computed: {
      keymap () {
        return {
          'ctrl+enter': this.toggleSpeak
        }
      }
    },
    methods: {
      isBotPost (item) {
        return !item.author
      },
      toggleSpeak () {
        this.talk = !this.talk
      },
      async commitToChat (text) {
        this.$store.dispatch(COMMIT_TO_CHAT_LOG, {author: '', text })
        const grundtvigsReply = await generateText(text)
        this.$store.dispatch(COMMIT_TO_CHAT_LOG, {author: 'N. F. S. Grundtvig', text: grundtvigsReply })

        if (this.talk) {
          const voices = window.speechSynthesis.getVoices()
          const selectedVoice = 33//
          const msg = new SpeechSynthesisUtterance()
          msg.voice = voices[selectedVoice]
          msg.rate = 0.7
          msg.pitch = -0.4
          msg.text = grundtvigsReply
          speechSynthesis.speak(msg)
        }
      }
    }
  }
</script>

<style scoped>
</style>
