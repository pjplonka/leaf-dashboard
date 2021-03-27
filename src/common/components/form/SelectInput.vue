<template>
  <b-form-group :label="label">
    <b-form-select
        :options="options"
        @change="$emit('input', $event)"
        :value="value"
    ></b-form-select>
    <span class="errors">{{ errors[0] }}</span>
    <b-form-text v-if="hint">{{ hint }}</b-form-text>
  </b-form-group>
</template>

<script>
export default {
  name: "SelectInput",
  props: {
    value: {
      type: String,
      default: null
    },
    options: {
      type: Array,
      default: () => []
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
