<template>

  <div class="container">
    <div class="row mt-2">
      <div class="col">
        <div class="float-right">
          <div v-if="!isAuthenticated()">
            <router-link to="/login">
              Login
            </router-link>
            or
            <router-link to="/register">
              Register
            </router-link>
          </div>
          <div v-else>
            <router-link to="/admin/crud">
              Go to dashboard
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <router-view/>
  </div>

</template>

<script>

export default {
  name: "App",
  methods: {
    isAuthenticated() {
      return !!localStorage.getItem('auth-token')
    }
  }
}
</script>

<style scoped>

</style>
