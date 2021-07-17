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
}
</script>

<style lang="scss">
@import './scss/app.scss';
</style>
