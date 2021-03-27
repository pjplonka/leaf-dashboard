<template>
  <b-form-group :label="label">
    <b-form-input
        @input="$emit('input', id, value)"
        v-model="value"
    ></b-form-input>
    <span class="errors">{{ errors[0] }}</span>
    <b-form-text v-if="hint">{{ hint }}</b-form-text>
  </b-form-group>
</template>

<script>
export default {
  name: "TextInput",
  props: {
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: ''
    },
    hint: {
      type: String,
      default: ''
    },
    initValue: null
  },
  data() {
    return {
      value: '',
      errors: []
    }
  },
  mounted() {
    this.value = this.initValue
    this.$emit('input', this.id, this.value)
  },
  methods: {
    addError(errors) {
      this.errors = errors
    },
    clearErrors() {
      this.errors = []
    }
  }
}
</script>
<style scoped>
.errors {
  font-size: 80%;
  color: red;
}
</style>
