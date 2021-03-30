<template>
  <div class="container mt-5">
    <h1>Login</h1>
    <b-form @submit="onSubmit">
      <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
          description="We'll never share your email with anyone else."
      >
        <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="Enter email"
            required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your password:" label-for="input-2">
        <b-form-input
            id="input-2"
            v-model="form.password"
            placeholder="Enter password"
            type="password"
            required
        ></b-form-input>
      </b-form-group>

      <div class="text-danger mb-3">{{ error }}</div>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import ApiService from "@/classes/ApiService";

export default {
  name: "Login",
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      error: '',
    }
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault()
      try {
        const response = await ApiService.post('/auth', this.form)
        localStorage.setItem('auth-token', response.data.token)
        this.$router.push('/admin/products')
      } catch (error) {
        if (error.response.status === 401) {
          this.error = 'Invalid data. Please try again.'
        }
      }
    },
  }
}
</script>

<style scoped>

</style>
