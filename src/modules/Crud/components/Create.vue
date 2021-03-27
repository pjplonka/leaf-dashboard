<template>
  <b-card no-body>
    <b-form @submit.stop.prevent="submit">
      <b-card-header>
        <span>Create new resource</span>
      </b-card-header>
      <b-card-body>
        <text-input v-model="form.name" :errors="errors.name" v-on:input="form.name = $event"></text-input>
      </b-card-body>
      <b-card-footer>
        <b-button class="mr-2" type="submit" variant="primary">Submit</b-button>
        <b-button @click="$emit('cancel-button-clicked')">Cancel</b-button>
      </b-card-footer>
    </b-form>
  </b-card>
</template>

<script>
import ApiService from "@/classes/ApiService";
import TextInput from "@/common/components/form/TextInput";

export default {
  name: "Create",
  components: {TextInput},
  data() {
    return {
      form: {
        name: ''
      },
      errors: []
    }
  },
  methods: {
    async submit() {
      this.errors = []
      try {
        await ApiService.post('/resources', this.form)
        this.$emit('resource-created')
        this.toast('Resource created.')
      } catch (error) {
        if (error.response && error.response.status === 422) {
          this.errors = error.response.data.errors
          this.toast('Please check form errors.', 'danger')
        } else {
          this.toast('Something gone wrong.', 'danger')
        }
      }
    },
  }
}
</script>

<style scoped>

</style>
