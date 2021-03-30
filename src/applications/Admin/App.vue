<template>
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
</template>

<script>
import Sidebar from "@/applications/Admin/components/Sidebar";

export default {
  name: "Admin",
  components: {Sidebar}
}
</script>

<style scoped>

</style>
