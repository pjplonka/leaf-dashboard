<template>
  <b-card no-body>
    <b-form @submit.stop.prevent="submit">
      <b-card-header>
        <span>Create new resource</span>
      </b-card-header>
      <b-card-body>
        <component
            ref="inputs"
            v-for="input in form.inputs"
            :is="input.component"
            v-bind="input.props"
            v-on:input="updateValue"
        />
      </b-card-body>
      <b-card-footer>
        <b-button class="mr-2" type="submit" variant="primary">Submit</b-button>
        <b-button @click="$emit('cancel-button-clicked')">Cancel</b-button>
      </b-card-footer>
    </b-form>
  </b-card>
</template>

<script>
import TextInput from "@/components/TextInput";
import Form from "@/classes/Form";
import ApiService from "@/classes/ApiService";
import config from './../config'

export default {
  name: "Create",
  components: {TextInput},
  data() {
    return {
      form: new Form()
    }
  },
  mounted() {
    this.form = new Form({}, config.create.form)
  },
  methods: {
    async submit() {
      this.$refs.inputs.forEach((input) => {
        input.clearErrors()
      })
      try {
        await ApiService.post(config.url, this.form.formData())
        this.$emit('resource-created')
        this.toast('Resource created.')
      } catch (error) {
        if (error.response && error.response.status === 422) {
          this.toast('Please check form errors.', 'danger')
          for (const [key, value] of Object.entries(error.response.data.errors)) {
            this.$refs.inputs.forEach((input) => {
              if (input.id === key) {
                input.addError(value)
              }
            })
          }
        } else {
          this.toast('Something gone wrong.', 'danger')
        }
      }
    },
    updateValue(id, name) {
      this.form.updateValue(id, name)
    }
  }
}
</script>

<style scoped>

</style>
