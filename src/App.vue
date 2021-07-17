<template>
  <div>
    <ui-nav :state="state" />

    <ui-sidenav ref="sidenav">
      <form-config ref="config" v-model="config" />
    </ui-sidenav>

    <network
      ref="network"
      :config="config"
      :network-state="state"
      @changeState="stateEvent"
    />

    <welcome />
  </div>
</template>

<script>
import config from './config'

export default {
  name: 'App',
  data() {
    return {
      state: null,
      config,
    }
  },
  methods: {
    stateEvent(val) {
      this.state = val
    },
  },
  mounted() {
    window.$('#welcome').modal('open')
  },
}
</script>

<style lang="scss">
@import './scss/app.scss';
</style>
