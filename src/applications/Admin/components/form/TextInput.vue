<template>
  <b-form-group :label="label">
    <b-form-input
        @input="$emit('input', $event)"
        :value="value"
    ></b-form-input>
    <span v-if="errors" class="errors">{{ errors[0] }}</span>
    <b-form-text v-if="hint">{{ hint }}</b-form-text>
  </b-form-group>
</template>

<script>
export default {
  name: "TextInput",
  props: {
    value: {
      type: String,
      default: null
    },
    errors: {
      type: Array,
      default: () => []
    },
    label: {
      type: String,
      default: ''
    },
    hint: {
      type: String,
      default: ''
    },
  },
}
</script>
<style scoped>
.errors {
  font-size: 80%;
  color: red;
}
</style>
