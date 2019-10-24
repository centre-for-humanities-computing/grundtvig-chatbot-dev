<template>
  <div
    class="log"
    pa2
  >
    <item
      v-for="(item, index) in log"
      :key="index"
      :item="item"
      :side="side(item)"
    />
  </div>
</template>

<script>
  import Item from './LogItem'
  export default {
    name: "Log",
    components: {
      Item
    },
    props: {
      listName: {
        type: String,
        required: true
      },
      discriminator: {
        type: Function,
        default: () => false
      }
    },
    computed: {
      log: {
        get() {
          return this.$store.state.chatLog
        }
      },
    },
    methods: {
      side (item) {
        return this.discriminator(item) ? 'right' : 'left'
      }
    }
  }
</script>

<style scoped>
  .log {
    display: flex;
    flex-direction: column;
    align-items: start;
  }

</style>
