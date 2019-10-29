<template>
  <div class="chat">
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
      Log
    },
    data () {
      return {
        rules: [v => !!v || 'Skriv en meddelelse til Grundtvig, han har meget at sige...']
      }
    },
    methods: {
      isBotPost (item) {
        return !item.author
      },
      async commitToChat (text) {
        this.$store.dispatch(COMMIT_TO_CHAT_LOG, {author: '', text })
        this.$store.dispatch(COMMIT_TO_CHAT_LOG, {author: 'N. F. S. Grundtvig', text: await generateText(text) })
      }
    }
  }
</script>

<style scoped>
</style>
