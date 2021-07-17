<template>
  <ul class="collapsible popout" data-collapsible="accordion">
    <li
      class="card-panel blue-grey darken-2 white-text mt-0 mb-0 pt-s pb-s ta-l"
    >
      Uniform Format
    </li>

    <li class="grey lighten-5">
      <div class="collapsible-header">Nível</div>
      <div class="collapsible-body pl pr">
        <div v-if="mode === 'visual'">
          <ui-slider
            v-if="factory.level"
            label="Nível"
            v-model="factory.level"
            step="1"
            min="1"
            max="20"
            decimals="0"
          ></ui-slider>
        </div>
        <div v-if="mode === 'scientific'">
          <ui-slider
            v-if="factory.level"
            label="Nível"
            v-model="factory.level"
            step="1"
            min="50"
            max="120"
            decimals="0"
          ></ui-slider>
        </div>
      </div>
    </li>

    <li class="grey lighten-5">
      <div class="collapsible-header">Nós</div>
      <div class="collapsible-body pl pr">
        <div v-if="factory.node" class="row">
          <div class="input-field s12 m6 col">
            <div class="fl-r">
              <ui-checkbox
                v-model="groupInfected.percent"
                name="groupInfected"
                label="%"
              ></ui-checkbox>
            </div>
            <div style="overflow: hidden;">
              <label class="active truncate" for="i-quant">
                <i class="fa fa-square red-text" aria-hidden="true"></i>
                Quantidade de infectados</label
              >
              <input type="number" id="i-quant" v-model="groupInfected.quant" />
            </div>

            <div class="cl-b"></div>
          </div>

          <div class="input-field s12 m6 col">
            <div class="fl-r">
              <ui-checkbox
                v-model="groupVaccinated.percent"
                name="groupVaccinated"
                label="%"
              ></ui-checkbox>
            </div>
            <div style="overflow: hidden;">
              <label class="active truncate" for="v-quant">
                <i class="fa fa-square green-text" aria-hidden="true"></i>
                Quantidade de vacinados</label
              >
              <input
                type="number"
                id="v-quant"
                v-model="groupVaccinated.quant"
                required
              />
            </div>

            <div class="cl-b"></div>
          </div>
        </div>

        <ui-slider
          v-if="factory.node && (infectBy === 'node' || infectBy === 'both')"
          icon="fa-square red-text"
          label="Taxa de infecção"
          v-model="factory.node.rate.infect"
          step="0.5"
          min="0"
          max="100"
          decimals="1"
          postfix="%"
        ></ui-slider>

        <ui-slider
          v-if="factory.node"
          icon="fa-square-o green-text"
          label="Taxa de resistência"
          v-model="factory.node.rate.resist"
          step="0.5"
          min="0"
          max="100"
          decimals="1"
          postfix="%"
        ></ui-slider>

        <ui-slider
          v-if="factory.node"
          icon="fa-square yellow-text"
          label="Taxa de recuperação"
          v-model="factory.node.rate.recover"
          step="0.5"
          min="0"
          max="100"
          decimals="1"
          postfix="%"
        ></ui-slider>

        <ui-slider
          v-if="factory.node"
          icon="fa-square grey-text"
          label="Taxa de suscetibilidade"
          v-model="factory.node.rate.susceptible"
          step="0.5"
          min="0"
          max="100"
          decimals="1"
          postfix="%"
        ></ui-slider>

        <ui-slider
          v-if="factory.node"
          icon="fa-square black-text"
          label="Taxa de falecimento"
          v-model="factory.node.rate.death"
          step="0.5"
          min="0"
          max="100"
          decimals="1"
          postfix="%"
        ></ui-slider>
      </div>
    </li>

    <li
      v-if="infectBy === 'edge' || infectBy === 'both'"
      class="grey lighten-5"
    >
      <div class="collapsible-header">Arestas</div>
      <div class="collapsible-body pl pr">
        <ui-slider
          v-if="factory.edge"
          icon="fa-square red-text"
          label="Taxa de infecção"
          v-model="factory.edge.rate.infect"
          step="0.5"
          min="0"
          max="100"
          decimals="1"
          postfix="%"
        ></ui-slider>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['factory', 'value', 'simulation'],

  computed: {
    mode: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },

    infectBy: {
      get() {
        return this.simulation.infectBy
      },
      set(val) {
        this.simulation.infectBy = val
      },
    },

    groupInfected() {
      if (!this.factory.node) return {}

      for (var i in this.factory.node.groups) {
        var group = this.factory.node.groups[i]
        if (group.ref === 'i') return group
      }

      return {}
    },

    groupVaccinated() {
      if (!this.factory.node) return {}

      for (var i in this.factory.node.groups) {
        var group = this.factory.node.groups[i]
        if (group.ref === 'v') return group
      }

      return {}
    },
  },

  mounted() {
    window.$(this.$el).collapsible()
  },
}
</script>
