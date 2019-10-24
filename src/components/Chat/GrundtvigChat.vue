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
  export default {
    name: "GrundtvigChat",
    components: {
      ReversibleTextField,
      Log
    },
    data () {
      return {
        rules: [v => !!v || 'Hvis du ikke har noget at sige til Grundtvig, så har han ikke noget at sige til dig...']
      }
    },
    computed: {
      chatLog: {
        get() {
          return this.$store.state.chatLog
        }
      }
    },
    methods: {
      isBotPost (item) {
        return !item.author
      },
      commitToChat (text) {
        this.$store.commit(COMMIT_TO_CHAT_LOG, {author: '', text })
      }
    }
  }
</script>

<style scoped>

</style>
