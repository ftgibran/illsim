<template>
  <div>
    <div v-if="mode === 'scientific'">
      <div class="card amber lighten-5">
        <div class="card-content ta-c">
          <p>
            A simulação está no modo Científico. As animações são desativadas
            nesse modo por questão de performance.
          </p>
        </div>
      </div>
    </div>

    <ui-slider
      v-if="config"
      label="Escala de tempo"
      v-model="config.scale"
      step="0.1"
      min="0"
      max="2"
      decimals="1"
    ></ui-slider>

    <ul class="collapsible popout mt-0" data-collapsible="accordion">
      <li class="collection-item">
        <div class="collapsible-header">
          <i class="fa fa-square red-text" aria-hidden="true"></i> Infecção
        </div>
        <div class="collapsible-body pl pr">
          <ui-slider
            v-if="config"
            label="Tempo de pausa"
            v-model="config.infect.restTime"
            step="0.1"
            min="0"
            max="10"
            decimals="1"
            postfix=""
          ></ui-slider>

          <ui-slider
            v-if="config"
            label="Duração de movimento (s)"
            v-model="config.infect.dotMovimentTime"
            step="0.1"
            min="0"
            max="3"
            decimals="1"
            postfix=""
          ></ui-slider>

          <ui-slider
            v-if="config"
            label="Duração de expansão (s)"
            v-model="config.infect.expandTime"
            step="0.1"
            min="0"
            max="3"
            decimals="1"
            postfix=""
          ></ui-slider>

          <ui-slider
            v-if="config"
            label="Atraso de expansão (s)"
            v-model="config.infect.expandDelay"
            step="0.1"
            min="0"
            max="3"
            decimals="1"
            postfix=""
          ></ui-slider>

          <ui-slider
            v-if="config"
            label="Escala de expansão"
            v-model="config.infect.expandScale"
            step="0.1"
            min="1"
            max="2"
            decimals="1"
            postfix=""
          ></ui-slider>

          <ui-slider
            v-if="config"
            label="Duração de retração (s)"
            v-model="config.infect.retractTime"
            step="0.1"
            min="0"
            max="3"
            decimals="1"
            postfix=""
          ></ui-slider>

          <ui-slider
            v-if="config"
            label="Raio de vibração"
            v-model="config.infect.shakeRadius"
            step="1"
            min="0"
            max="30"
            decimals="0"
            postfix=""
          ></ui-slider>
        </div>
      </li>

      <li class="collection-item">
        <div class="collapsible-header">
          <i class="fa fa-square yellow-text" aria-hidden="true"></i>
          Recuperação
        </div>
        <div class="collapsible-body pl pr">
          <ui-slider
            v-if="config"
            label="Tempo de pausa"
            v-model="config.recover.restTime"
            step="0.1"
            min="0"
            max="10"
            decimals="1"
            postfix=""
          ></ui-slider>

          <ui-slider
            v-if="config"
            label="Duração de expansão (s)"
            v-model="config.recover.expandTime"
            step="0.1"
            min="0"
            max="3"
            decimals="1"
            postfix=""
          ></ui-slider>

          <ui-slider
            v-if="config"
            label="Escala de expansão"
            v-model="config.recover.expandScale"
            step="0.1"
            min="1"
            max="2"
            decimals="1"
            postfix=""
          ></ui-slider>

          <ui-slider
            v-if="config"
            label="Duração de retração (s)"
            v-model="config.recover.retractTime"
            step="0.1"
            min="0"
            max="3"
            decimals="1"
            postfix=""
          ></ui-slider>
        </div>
      </li>

      <li class="collection-item">
        <div class="collapsible-header">
          <i class="fa fa-square green-text" aria-hidden="true"></i> Vacinação
        </div>
        <div class="collapsible-body pl pr">
          <ui-slider
            v-if="config"
            label="Tempo de pausa"
            v-model="config.vaccinate.restTime"
            step="0.1"
            min="0"
            max="10"
            decimals="1"
            postfix=""
          ></ui-slider>

          <ui-slider
            v-if="config"
            label="Duração de expansão (s)"
            v-model="config.vaccinate.expandTime"
            step="0.1"
            min="0"
            max="3"
            decimals="1"
            postfix=""
          ></ui-slider>

          <ui-slider
            v-if="config"
            label="Escala de expansão"
            v-model="config.vaccinate.expandScale"
            step="0.1"
            min="1"
            max="2"
            decimals="1"
            postfix=""
          ></ui-slider>

          <ui-slider
            v-if="config"
            label="Duração de retração (s)"
            v-model="config.vaccinate.retractTime"
            step="0.1"
            min="0"
            max="3"
            decimals="1"
            postfix=""
          ></ui-slider>
        </div>
      </li>

      <li class="collection-item">
        <div class="collapsible-header">
          <i class="fa fa-square black-text" aria-hidden="true"></i> Falecimento
        </div>
        <div class="collapsible-body pl pr">
          <ui-slider
            v-if="config"
            label="Tempo de pausa"
            v-model="config.death.restTime"
            step="0.1"
            min="0"
            max="10"
            decimals="1"
            postfix=""
          ></ui-slider>

          <ui-slider
            v-if="config"
            label="Escala de retração"
            v-model="config.death.retractScale"
            step="0.1"
            min="0"
            max="1"
            decimals="1"
            postfix=""
          ></ui-slider>

          <ui-slider
            v-if="config"
            label="Duração de retração (s)"
            v-model="config.death.retractTime"
            step="0.1"
            min="0"
            max="4"
            decimals="1"
            postfix=""
          ></ui-slider>

          <ui-slider
            v-if="config"
            label="Duração de retração (aresta) (s)"
            v-model="config.death.edgeRetractTime"
            step="0.1"
            min="0"
            max="3"
            decimals="1"
            postfix=""
          ></ui-slider>

          <ui-slider
            v-if="config"
            label="Tamanho de retração (aresta)"
            v-model="config.death.edgeRetractSize"
            step="0.1"
            min="0"
            max="3"
            decimals="1"
            postfix=""
          ></ui-slider>

          <ui-slider
            v-if="config"
            label="Atraso de retração (aresta) (s)"
            v-model="config.death.edgeRetractDelay"
            step="0.1"
            min="0"
            max="3"
            decimals="1"
            postfix=""
          ></ui-slider>

          <ui-slider
            v-if="config"
            label="Duração de expansão (nascimento) (s)"
            v-model="config.death.birthExpandTime"
            step="0.1"
            min="0"
            max="3"
            decimals="1"
            postfix=""
          ></ui-slider>

          <ui-slider
            v-if="config"
            label="Atraso de expansão (nascimento) (s)"
            v-model="config.death.birthExpandDelay"
            step="0.1"
            min="0"
            max="3"
            decimals="1"
            postfix=""
          ></ui-slider>

          <ui-slider
            v-if="config"
            label="Escala de expansão (nascimento)"
            v-model="config.death.birthExpandScale"
            step="0.1"
            min="0"
            max="3"
            decimals="1"
            postfix=""
          ></ui-slider>

          <ui-slider
            v-if="config"
            label="Duração de retração (nascimento) (s)"
            v-model="config.death.birthRetractTime"
            step="0.1"
            min="0"
            max="3"
            decimals="1"
            postfix=""
          ></ui-slider>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['config', 'mode'],

  mounted() {
    window
      .$(this.$el)
      .find('.collapsible')
      .collapsible()
  },
}
</script>
