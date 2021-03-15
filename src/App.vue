<template>
  <div id="app">

    <div class="wrapper">

      <sidebar></sidebar>

      <main class="main">
        <div class="top">
          ICON
        </div>
        <div class="content" style="padding: 25px 0;">
          <router-view/>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";

export default {
  components: {Sidebar}
}
</script>

<style lang="scss">

$primary: #399bff;
$secondary: #e8e8e8;

@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;

  .pointer {
    cursor: pointer;
  }

  .wrapper {
    display: flex;
    background-color: #f5f7fb;
    min-height: 600px;

    .main {

      .top {
        height: 65px;
        text-align: center;
        line-height: 65px;
        background-color: aliceblue;
      }

      width: 100%;
    }
  }
}

#nav {
  text-align: center;
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.btn {
  border-radius: 0;
}

.card {
  border:none;
  border-radius: 0;

  .card-header {
    border-bottom: 1px solid #eeeeee;
    background-color: white;
    padding: 1.25rem
  }

  .card-body {

  }

  .card-footer {
    border-top: 1px solid #eeeeee;
    background-color: white;
    padding: 1.25rem
  }
}
</style>
