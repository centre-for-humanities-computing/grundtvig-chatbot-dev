<template>
  <v-card
    class="item"
    :class="side"
    outlined
  >
    <v-card-subtitle
      v-if="item.author"
    >
      <span class="author small">{{item.author}}</span>
      -
      <span class="timestamp">{{item.time}}</span>
    </v-card-subtitle>
    <v-card-text
      class="font-weight-black"
    >
      {{item.text}}
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    name: "LogItem",
    props: {
      item: {
        type: Object,
        required: true
      },
      side: {
        type: String,
        default: 'left'
      }
    }
  }
</script>

<style scoped>
  .small {
    font-size: 80%;
  }
  .item.left {
    background-color: #FFF8E1;
    border-top-left-radius: 0px;
    align-self: flex-start;
  }
  .item.right {
    background-color: #ECEFF1;
    border-top-right-radius: 0px;
    align-self: flex-end;
  }
</style>
