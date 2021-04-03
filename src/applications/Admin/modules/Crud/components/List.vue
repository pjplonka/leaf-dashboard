<template>
  <b-card no-body>
    <b-card-header>
      <span>{{ $t('amc_list_title') }}</span>
      <a @click="$emit('create-button-clicked')" class="float-right" style="cursor:pointer;">{{ $t('amc_list_add_button') }}</a>
    </b-card-header>
    <b-card-body>
      <b-table borderless :items="items" :fields="fields" thStyle="{color: 'red'}">
        <template #cell(actions)="data">
          <span class="mr-3" v-b-tooltip.hover="{ variant: 'info' }" :title="$t('Edit')">
            <b-icon-pencil class="icon pointer" @click="$emit('edit-button-clicked', data.item.id)"/>
          </span>
          <span class="mr-3" v-b-tooltip.hover="{ variant: 'info' }" :title="$t('Remove')">
            <b-icon-trash class="icon pointer" @click="remove(data.item.id)"/>
          </span>
        </template>
      </b-table>
    </b-card-body>
  </b-card>
</template>

<script>
import Edit from "./Edit";
import ApiService from "@/classes/ApiService";

export default {
  name: "List",
  components: {Edit},
  data() {
    return {
      fields: [
        {'key': 'id', 'label': 'ID'},
        {'key': 'name', 'label': this.$t('name').toUpperCase()},
        {'key': 'actions', 'label': this.$t('actions').toUpperCase()}
      ],
      items: [],
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    async remove(id) {
      if (confirm(this.$t('are_you_sure'))) {
        try {
          await ApiService.delete('/resources/' + id)
          this.$emit('resource-created')
          this.toast(this.$t('toast_removed'))

          this.load()
        } catch (error) {
          this.toast(this.$t('error'), 'danger')
        }
      }
    },
    async load() {
      const resources = await ApiService.get('/resources');
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
