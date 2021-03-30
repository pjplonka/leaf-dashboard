<template>
  <div class="container mt-5">
    <h1>Register</h1>
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
            required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Re-type your password:" label-for="input-2">
        <b-form-input
            id="input-2"
            v-model="form.password2"
            placeholder="Enter password"
            required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        email: '',
        password: '',
        password2: ''
      }
    }
  },
  methods: {
    onSubmit(event) {

      event.preventDefault()
      alert(JSON.stringify(this.form))
    },
  }
}
</script>

<style scoped>

</style>
