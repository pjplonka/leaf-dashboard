<template>
  <b-card no-body>
    <b-card-header>
      <span>List of resources</span>
      <a @click="$emit('create-button-clicked')" class="float-right" style="cursor:pointer;">Add new resource</a>
    </b-card-header>
    <b-card-body>
      <b-table borderless :items="items" :fields="fields" thStyle="{color: 'red'}">
        <template #cell(actions)="data">
          <span class="mr-3" v-b-tooltip.hover="{ variant: 'info' }" title="Edit">
            <b-icon-pencil class="icon pointer" @click="$emit('edit-button-clicked', data.item.id)"/>
          </span>
          <span class="mr-3" v-b-tooltip.hover="{ variant: 'info' }" title="Remove">
            <b-icon-trash class="icon pointer" @click="remove(data.item.id)"/>
          </span>
        </template>
      </b-table>
    </b-card-body>
  </b-card>
</template>

<script>
import Edit from "./../components/Edit";
import ApiService from "@/classes/ApiService";
import config from './../config'

export default {
  name: "List",
  components: {Edit},
  data() {
    return {
      items: [],
      fields: config.list.fields
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    async remove(id) {
      if (confirm("Are you sure?")) {
        try {
          await ApiService.delete(config.url + '/' + id)
          this.$emit('resource-created')
          this.toast('Resource removed.')
          this.load()
        } catch (error) {
          this.toast('Something gone wrong.', 'danger')
        }
      }
    },
    async load() {
      const resources = await ApiService.get(config.url);
      this.items = resources.data
    }
  }
}
</script>

<style lang="scss">
tr td {
  border-bottom: 1px solid #eaeaea !important;
}

tr th {
  font-size: 80%;
  text-transform: uppercase;
  color: #bcc0c5;
  border-bottom: 1px solid #eaeaea !important;
}

.icon:hover {
  color: grey;
}
</style>
