<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          GitHub - Consumer
        </q-toolbar-title>

        <!-- <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Repositório: {{ this.title }}</q-item-label>
          <q-item clickable to="/listagem">
            <q-item-section avatar>
              <q-icon name="list" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Listagem de Issues</q-item-label>
            </q-item-section>
          </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
import Store from '../store'

export default {
  name: 'Dashboard',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      title: ''
    }
  },
  methods: {
    openURL
  },
  mounted () {
    this.title = Store.state.owner + '/' + Store.state.repository
  }
}
</script>

<style>
</style>
