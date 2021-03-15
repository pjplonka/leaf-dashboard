<template>
  <b-card no-body>
    <validation-observer ref="observer" v-slot="{ handleSubmit }">
      <b-form @submit.stop.prevent="handleSubmit(onSubmit)">
        <b-card-header>
          <span>Create new resource</span>
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
    getValidationState({dirty, validated, valid = null}) {
      return dirty || validated ? valid : null;
    },
    async onSubmit() {
      try {
        await ApiService.post(config.url, this.form.formData())
        this.$emit('resource-created')
        this.toast('Resource created.')
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

<style scoped>

</style>
