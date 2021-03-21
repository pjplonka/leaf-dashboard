<template>
  <b-card no-body>
    <b-form @submit.stop.prevent="submit">
      <b-card-header>
        <span>{{ config.labels.title }}</span>
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
  name: "Edit",
  components: {TextInput},
  props: ['id'],
  data() {
    return {
      config: config.edit,
      form: new Form()
    }
  },
  async mounted() {
    const resource = await ApiService.get(config.url + '/' + this.id)

    this.form = new Form({}, config.edit.form)

    this.form.inputs = this.form.inputs.map(element => {
      element.props.initValue = resource.data[element.props.id]
      return element
    })
  },
  methods: {
    async submit() {
      this.$refs.inputs.forEach((input) => {
        input.clearErrors()
      })
      try {
        await ApiService.put(config.url + '/' + this.id, this.form.formData())
        this.$emit('resource-updated')
        this.toast('Resource saved.')
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
