<template>
  <div id="app">
    <ui-nav></ui-nav>

    <ui-sidenav v-ref:sidenav>
      <form-config v-ref:config></form-config>
    </ui-sidenav>

    <network v-ref:network></network>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
}
</script>

<style lang="scss">
@import './scss/app.scss';
</style>
