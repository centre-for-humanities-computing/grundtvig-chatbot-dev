<template>
  <span>
    <v-form
      :model="validValue"
      @submit.prevent=""
    >
      <v-text-field
        :value="value && value.length ? value : defaultValue"
        :label="label"
        :rules="rules"
        :color="color"
        @keyup.enter.self.prevent="checkValue"
        @keyup.tab.self.prevent="checkValue"
        @keyup.esc.self.prevent="restoreValue"
      />
    </v-form>
  </span>
</template>

<script>

  export default {
    name: "ReversibleTextField",
    props: {
      label: {
        type: String,
        required: true
      },
      value: {
        type: String,
        default: ''
      },
      rules: {
        type: Array,
        default: function () {
          return [v => !!v || 'Describe this application to your users and your future self']
        }
      },
      action: {
        type: Function,
        required: true
      },
      color: {
        type: String,
        default: 'grey'
      },
      indexOfEditedField: {
        type: Boolean,
        default: false
      },
      defaultValue: {
        type: String,
        default: 'Write something'
      }
    },
    data () {
      return {
        previousValue: '',
        validValue: true
      }
    },
    methods: {
      checkValue(e) {
        if (this.validValue) {
          this.previousValue = this.value
          this.value = e.target.value
          this.action(this.value)
        }
      },
      restoreValue(e) {
        this.value = this.previousValue
        this.action(this.previousValue)
        // compensate for broken watcher (force input update)
        e.target.value = this.value
      }
    }
  }
</script>

<style scoped>
  .displayValue {
    padding: 0;
    margin: 0;
  }
</style>
