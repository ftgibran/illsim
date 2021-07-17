<template>
  <div>
    <ul class="collapsible popout" data-collapsible="accordion">
      <li
        class="card-panel blue-grey darken-2 white-text mt-0 mb-0 pt-s pb-s ta-l"
      >
        Full Random
      </li>

      <li class="grey lighten-5">
        <div class="collapsible-header">Grupo</div>
        <div class="collapsible-body pl pr">
          <div v-if="mode === 'visual'">
            <ui-slider
              v-if="factory.group"
              label="Quantidade de grupos"
              v-model="factory.group.quant"
              step="1"
              min="1"
              max="5"
            ></ui-slider>
            <ui-slider
              v-if="factory.group"
              label="Conexões entre os grupos (mínimo e máximo)"
              :value-min="factory.group.connections.min"
              :value-max="factory.group.connections.max"
              @inputMin="val => (factory.group.connections.min = val)"
              @inpuMax="val => (factory.group.connections.max = val)"
              step="1"
              min="0"
              max="6"
              :range="true"
            ></ui-slider>

            <ul class="collection" style="overflow: visible;">
              <li class="collection-item">
                <ui-checkbox
                  v-model="factory.group.startingValuesByGroup.enabled"
                  name="factory.group.startingValuesByGroup.enabled"
                  label="Valores iniciais por grupo"
                >
                  <ui-slider
                    v-if="factory.group"
                    label="Quantidade de grupos"
                    v-model="factory.group.startingValuesByGroup.quant"
                    step="1"
                    min="1"
                    max="5"
                  ></ui-slider>
                </ui-checkbox>
              </li>
            </ul>
          </div>
          <div v-if="mode === 'scientific'">
            <ui-slider
              v-if="factory.group"
              label="Quantidade de grupos"
              v-model="factory.group.quant"
              step="1"
              min="1"
              max="100"
            ></ui-slider>
            <ui-slider
              v-if="factory.group"
              label="Conexões entre os grupos (mínimo e máximo)"
              :value-min="factory.group.connections.min"
              :value-max="factory.group.connections.max"
              @inputMin="val => (factory.group.connections.min = val)"
              @inpuMax="val => (factory.group.connections.max = val)"
              step="1"
              min="0"
              max="30"
              :range="true"
            ></ui-slider>

            <ul class="collection" style="overflow: visible;">
              <li class="collection-item">
                <ui-checkbox
                  v-model="factory.group.startingValuesByGroup.enabled"
                  name="factory.group.startingValuesByGroup.enabled"
                  label="Valores iniciais por grupo"
                >
                  <ui-slider
                    v-if="factory.group"
                    label="Quantidade de grupos"
                    v-model="factory.group.startingValuesByGroup.quant"
                    step="1"
                    min="1"
                    max="100"
                  ></ui-slider>
                </ui-checkbox>
              </li>
            </ul>
          </div>
        </div>
      </li>

      <li class="grey lighten-5">
        <div class="collapsible-header">Nós</div>
        <div class="collapsible-body pl pr">
          <div v-if="mode === 'visual'">
            <ui-slider
              v-if="factory.node"
              label="Quantidade (mínimo e máximo) por grupo"
              :value-min="factory.node.min"
              :value-max="factory.node.max"
              @inputMin="val => (factory.node.min = val)"
              @inpuMax="val => (factory.node.max = val)"
              step="1"
              min="0"
              max="200"
              decimals="0"
              :range="true"
            ></ui-slider>
          </div>
          <div v-if="mode === 'scientific'">
            <ui-slider
              v-if="factory.node"
              label="Quantidade (mínimo e máximo) por grupo"
              :value-min="factory.node.min"
              :value-max="factory.node.max"
              @inputMin="val => (factory.node.min = val)"
              @inpuMax="val => (factory.node.max = val)"
              step="1"
              min="0"
              max="1000"
              decimals="0"
              :range="true"
            ></ui-slider>
          </div>

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
                <input
                  type="number"
                  id="i-quant"
                  v-model="groupInfected.quant"
                />
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
                />
              </div>

              <div class="cl-b"></div>
            </div>
          </div>

          <ui-slider
            v-if="factory.node && (infectBy === 'node' || infectBy === 'both')"
            icon="fa-square red-text"
            label="Taxa de infecção"
            :value-min="factory.node.rate.infect.min"
            :value-max="factory.node.rate.infect.max"
            @inputMin="val => (factory.node.rate.infect.min = val)"
            @inpuMax="val => (factory.node.rate.infect.max = val)"
            step="0.5"
            min="0"
            max="100"
            decimals="1"
            postfix="%"
            :range="true"
          ></ui-slider>

          <ui-slider
            v-if="factory.node"
            icon="fa-square-o green-text"
            label="Taxa de resistência"
            :value-min="factory.node.rate.resist.min"
            :value-max="factory.node.rate.resist.max"
            @inputMin="val => (factory.node.rate.resist.min = val)"
            @inpuMax="val => (factory.node.rate.resist.max = val)"
            step="0.5"
            min="0"
            max="100"
            decimals="1"
            postfix="%"
            :range="true"
          ></ui-slider>

          <ui-slider
            v-if="factory.node"
            icon="fa-square yellow-text"
            label="Taxa de recuperação"
            :value-min="factory.node.rate.recover.min"
            :value-max="factory.node.rate.recover.max"
            @inputMin="val => (factory.node.rate.recover.min = val)"
            @inpuMax="val => (factory.node.rate.recover.max = val)"
            step="0.5"
            min="0"
            max="100"
            decimals="1"
            postfix="%"
            :range="true"
          ></ui-slider>

          <ui-slider
            v-if="factory.node"
            icon="fa-square grey-text"
            label="Taxa de suscetibilidade"
            :value-min="factory.node.rate.susceptible.min"
            :value-max="factory.node.rate.susceptible.max"
            @inputMin="val => (factory.node.rate.susceptible.min = val)"
            @inpuMax="val => (factory.node.rate.susceptible.max = val)"
            step="0.5"
            min="0"
            max="100"
            decimals="1"
            postfix="%"
            :range="true"
          ></ui-slider>

          <ui-slider
            v-if="factory.node"
            icon="fa-square black-text"
            label="Taxa de falecimento"
            :value-min="factory.node.rate.death.min"
            :value-max="factory.node.rate.death.max"
            @inputMin="val => (factory.node.rate.death.min = val)"
            @inpuMax="val => (factory.node.rate.death.max = val)"
            step="0.5"
            min="0"
            max="100"
            decimals="1"
            postfix="%"
            :range="true"
          ></ui-slider>
        </div>
      </li>

      <li class="grey lighten-5">
        <div class="collapsible-header">Arestas</div>
        <div class="collapsible-body pl pr">
          <div v-if="mode === 'visual'">
            <ui-slider
              v-if="factory.edge"
              name="factory[edge]"
              label="Quantidade (mínimo e máximo) por grupo"
              :value-min="factory.edge.min"
              :value-max="factory.edge.max"
              @inputMin="val => (factory.edge.min = val)"
              @inpuMax="val => (factory.edge.max = val)"
              step="1"
              min="0"
              max="400"
              decimals="0"
              :range="true"
            ></ui-slider>
            <ui-slider
              v-if="factory.edge"
              label="Máximo de arestas por nó"
              v-model="factory.edge.density"
              step="1"
              min="2"
              max="12"
              decimals="0"
            ></ui-slider>
          </div>

          <div v-if="mode === 'scientific'">
            <ui-slider
              v-if="factory.edge"
              name="factory[edge]"
              label="Quantidade (mínimo e máximo) por grupo"
              :value-min="factory.edge.min"
              :value-max="factory.edge.max"
              @inputMin="val => (factory.edge.min = val)"
              @inpuMax="val => (factory.edge.max = val)"
              step="1"
              min="0"
              max="2000"
              decimals="0"
              :range="true"
            ></ui-slider>
            <ui-slider
              v-if="factory.edge"
              label="Máximo de arestas por nó"
              v-model="factory.edge.density"
              step="1"
              min="3"
              max="150"
              decimals="0"
            ></ui-slider>
          </div>

          <ui-slider
            v-if="factory.edge && (infectBy === 'edge' || infectBy === 'both')"
            icon="fa-square red-text"
            name="factory[edge][rate][infect]"
            label="Taxa de infecção"
            :value-min="factory.edge.rate.infect.min"
            :value-max="factory.edge.rate.infect.max"
            @inputMin="val => (factory.edge.rate.infect.min = val)"
            @inpuMax="val => (factory.edge.rate.infect.max = val)"
            step="0.5"
            min="0"
            max="100"
            decimals="1"
            postfix="%"
            :range="true"
          ></ui-slider>
        </div>
      </li>
    </ul>
  </div>
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
    window
      .$(this.$el)
      .find('.collapsible')
      .collapsible()
  },
}
</script>
