<template>
  <b-card no-body>
    <b-form @submit.stop.prevent="submit">
      <b-card-header>
        <span>{{ $t('amc_create_title') }}</span>
      </b-card-header>
      <b-card-body>
        <text-input v-model="form.name" :errors="errors.name" v-on:input="form.name = $event"></text-input>
      </b-card-body>
      <b-card-footer>
        <b-button class="mr-2" type="submit" variant="primary">{{ $t('save') }}</b-button>
        <b-button @click="$emit('cancel-button-clicked')">{{ $t('cancel') }}</b-button>
      </b-card-footer>
    </b-form>
  </b-card>
</template>

<script>
import ApiService from "@/classes/ApiService";
import TextInput from "@/applications/Admin/components/form/TextInput";

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
        this.toast(this.$t('toast_created'))
      } catch (error) {
        if (error.response && error.response.status === 422) {
          this.errors = error.response.data.errors
          this.toast(this.$t('form_error'), 'danger')
        } else {
          this.toast(this.$t('error'), 'danger')
        }
      }
    },
  }
}
</script>

<style scoped>

</style>
