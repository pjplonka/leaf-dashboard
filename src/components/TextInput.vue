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
    rules: {
      type: Object,
      default() {
        return {}
      }
    },
    initValue: null
  },
  data() {
    return {
      value: '',
      errors: []
    }
  },
  computed: {
    state: function () {
      return this.error
    }
  },
  mounted() {
    this.value = this.initValue
    this.$emit('input', this.id, this.value)
  },
  methods: {
    getValidationState({dirty, validated, valid = null}) {
      return dirty || validated ? valid : null;
    },
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
