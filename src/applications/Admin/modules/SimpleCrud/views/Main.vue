<template>

  <div class="container">

    <list
        v-if="show === 'table'"
        v-on:create-button-clicked="show = 'create'"
        v-on:edit-button-clicked="editId = $event; show = 'edit'"
    ></list>

    <create
        v-if="show === 'create'"
        v-on:resource-created="show = 'table'"
        v-on:cancel-button-clicked="show = 'table'"
    ></create>

    <edit
        v-if="show === 'edit' && editId"
        :id="editId"
        v-on:cancel-button-clicked="show = 'table' ; editId = null"
        v-on:resource-updated="show = 'table' ; editId = null"
    ></edit>

  </div>

</template>

<script>
import List from "../components/List";
import Edit from "../components/Edit";
import Create from "../components/Create";

export default {
  name: "Main",
  components: {List, Create, Edit},
  data() {
    return {
      show: null,
      editId: null,
    }
  },
  mounted() {
    this.show = 'table'
  },
}
</script>
