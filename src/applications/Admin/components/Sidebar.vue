<template>

  <div class="aside">

    <div class="top">
      <span>LEAF</span>
    </div>

    <ul>
      <li>
        <router-link to="/">
          <b-icon-grid class="icon mr-2"/>
          Home
        </router-link>
      </li>
      <li>
        <router-link to="/about">
          <b-icon-question-square class="icon mr-2"/>
          About
        </router-link>
      </li>
      <li v-for="item in items">
        <router-link :to="'/admin' + item.to">
          <component :is="'b-icon-' + item.icon" class="icon mr-2"></component>
          {{ item.text }}
        </router-link>
      </li>
      <li>
        <a href="" @click.prevent="submitLogout">
          <b-icon-door-open class="icon mr-2"/>
          Logout
        </a>
      </li>
    </ul>
  </div>

</template>

<script>
import {mapActions} from 'vuex';

export default {
  name: "Sidebar",
  data() {
    return {
      items: [],
    }
  },
  mounted() {
    const context = require.context('./../modules', true, /menu.js$/i);
    this.items = context.keys().map(context).flatMap(module => module.default);
  },
  methods: {
    ...mapActions([
      'logout',
    ]),
    submitLogout() {
      this.logout()
      this.$router.push('/')
    }
  }
}
</script>

<style scoped lang="scss">
.aside {
  width: 250px;
  background-color: #191f2c;

  .top {
    height: 65px;
    text-align: center;
    line-height: 65px;
    background-color: #222732;
    color: aquamarine;
  }

  ul {
    list-style: none;
    padding: 20px 0 0 0;
    margin: 0;

    li {
      .router-link-exact-active {
        background-color: #272d3b;
      }

      a {
        display: block;
        color: #f3f3f3;
        padding: 10px 23px;
        font-size: 90%;

        .icon {
          color: #aeaeae;
        }
      }

      a:hover {
        background-color: #262e3f;
        text-decoration: none;
      }
    }
  }
}
</style>
