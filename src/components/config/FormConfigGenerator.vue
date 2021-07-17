<template>
  <ui-loader>
    <div class="input-field ta-l">
      <ui-select
        label="Método de Geração"
        :options="methods"
        v-model="config.method"
      ></ui-select>
    </div>

    <form-config-full-random
      v-show="config.method === 'fullRandom'"
      :factory="config.factory.fullRandom"
      :simulation="simulation"
      v-model="mode"
    ></form-config-full-random>

    <form-config-uniform-format
      v-show="config.method === 'uniformFormat'"
      :factory="config.factory.uniformFormat"
      :simulation="simulation"
      v-model="mode"
    ></form-config-uniform-format>
  </ui-loader>
</template>

<script>
export default {
  props: ['config', 'simulation'],

  data() {
    return {
      methods: null,

      fullRandom: {
        label: 'Full Random',
        val: 'fullRandom',
      },

      uniformFormat: {
        label: 'Uniform Format',
        val: 'uniformFormat',
      },
    }
  },

  methods: {
    init() {
      this.methods = [this.fullRandom, this.uniformFormat]
    },
  },

  computed: {
    mode: {
      get() {
        return this.simulation.mode
      },
      set(val) {
        this.simulation.mode = val
      },
    },
  },

  mounted() {
    this.init()
    this.$emit('load')
  },
}
</script>
