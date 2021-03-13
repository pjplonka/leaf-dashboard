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
        <router-link :to="item.to">
          <component :is="'b-icon-' + item.icon" class="icon mr-2"></component>
          {{ item.text }}
        </router-link>
      </li>
    </ul>
  </div>

</template>

<script>
import SidebarProvider from "@/classes/SidebarProvider";
export default {
  name: "Sidebar",
  data() {
    return {
      items: [],
    }
  },
  mounted() {
    this.items = SidebarProvider.get()
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
