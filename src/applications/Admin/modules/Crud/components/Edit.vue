<template>
  <b-card no-body>
    <b-form @submit.stop.prevent="submit">
      <b-card-header>
        <span>{{ $t('amc_edit_title') }}</span>
      </b-card-header>
      <b-card-body>
        <text-input class="col-sm-6" v-model="form.name" :errors="errors.name" v-on:input="form.name = $event"></text-input>
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
  name: "Edit",
  components: {TextInput},
  props: ['id'],
  data() {
    return {
      form: {
        name: ''
      },
      errors: []
    }
  },
  async mounted() {
    const resource = await ApiService.get('/resources/' + this.id)
    this.form = resource.data
  },
  methods: {
    async submit() {
      this.errors = []
      try {
        await ApiService.put('/resources/' + this.id, this.form)
        this.$emit('resource-updated')
        this.toast(this.$t('toast_updated'))
      } catch (error) {
        if (error.response && error.response.status === 422) {
          this.toast(this.$t('form_error'), 'danger')
          this.errors = error.response.data.errors
        } else {
          this.toast(this.$t('error'), 'danger')
        }
      }
    }
  }
}
</script>
