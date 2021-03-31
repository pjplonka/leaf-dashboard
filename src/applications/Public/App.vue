<template>

  <div class="container">
    <div class="row mt-2">
      <div class="col">
        <div class="float-right">
          <div v-if="!isAuthenticated()">
            <router-link to="/login">
              Login
            </router-link>
            |
            <router-link to="/register">
              Register
            </router-link>
          </div>
          <div v-else>
            <router-link to="/admin/crud">
              Go to dashboard
            </router-link>
            |
            <a href="" @click.prevent="submitLogout">Logout</a>
          </div>
        </div>
      </div>
    </div>
    <router-view/>
  </div>

</template>

<script>
import {mapActions} from 'vuex';

export default {
  name: "App",
  methods: {
    ...mapActions([
      'logout',
    ]),
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
    submitLogout() {
      this.logout()
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>

</style>
