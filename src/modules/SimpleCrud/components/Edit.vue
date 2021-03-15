<template>
  <b-card no-body>
    <validation-observer ref="observer" v-slot="{ handleSubmit }">
      <b-form @submit.stop.prevent="handleSubmit(onSubmit)">
        <b-card-header>
          <span>Edit resource</span>
        </b-card-header>
        <b-card-body>
          <component
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
    </validation-observer>
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
      form: new Form()
    }
  },
  async mounted() {
    const resource = await ApiService.get(config.url + '/' + this.id)

    this.form = new Form({}, [
      {
        component: 'TextInput',
        props: {id: 'name', label: 'Name', rules: {required: true, min: 3}}
      }
    ])

    this.form.inputs = this.form.inputs.map(element => {
      element.props.initValue = resource.data[element.props.id]
      return element
    })
  },
  methods: {
    getValidationState({dirty, validated, valid = null}) {
      return dirty || validated ? valid : null;
    },
    async onSubmit() {
      try {
        await ApiService.put(config.url + '/' + this.id, this.form.formData())
        this.$emit('resource-updated')
        this.toast('Resource saved.')
      } catch (error) {
        this.toast('Something gone wrong.', 'danger')
      }
    },
    updateValue(id, name) {
      this.form.updateValue(id, name)
    }
  }
}
</script>
