<template>
  <validation-provider
      :rules="rules"
      v-slot="validationContext"
  >
    <b-form-group  :label="label" >
      <b-form-input
          @input="$emit('input', id, value)"
          v-model="value"
          :state="getValidationState(validationContext)"
      ></b-form-input>
      <b-form-invalid-feedback >{{ validationContext.errors[0] }}</b-form-invalid-feedback>
      <b-form-text v-if="hint" >{{ hint }}</b-form-text>
    </b-form-group>
  </validation-provider>
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
      default() {return {}}
    },
    initValue: null
  },
  data() {
    return {
      value: '',
    }
  },
  mounted() {
    this.value = this.initValue
    this.$emit('input', this.id, this.value)
  },
  methods: {
    getValidationState({dirty, validated, valid = null}) {
      return dirty || validated ? valid : null;
    }
  }
}
</script>

<style scoped>

</style>
