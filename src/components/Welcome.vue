<template>
  <div id="welcome" class="modal">
    <div class="container bg">
      <div style="display: flex; flex-flow: column; align-items: center">
        <img src="@/assets/logo.png" class="mt mb" width="120" alt="Logo" />

        <h1>
          Illness Simulator
        </h1>
      </div>

      <div class="frame">
        <p>
          Bem vindo ao Illsim! Este é um projeto de faculdade elaborado em 2017
          que estuda o comportamento da propagação de um vírus em torno de uma
          população. Este estudo consiste em explorar as melhores estratégias de
          vacinação conforme o vírus se espalha.
        </p>

        <p>
          As simulações podem ser representadas por animações de grafos (nós +
          aresta) ou por gráficos tradicionais. No caso dos grafos, cada nó
          representa um indivíduo de uma população e cada aresta representa o
          convívio que um indivíduo tem com um outro (exemplo: professor com
          aluno)
        </p>

        <p>
          Sinta-se a vontade em explorar as configurações do app para aproximar
          do melhor cenário que queira explorar. Também está disponível o
          documento de estudo (TCC).
        </p>

        <p>
          Autor: Felipe Gibran
        </p>
      </div>

      <div
        class="mob-tab-hidden"
        style="display: flex; justify-content: center; margin: 40px 0"
      >
        <a
          @click="start"
          class="mr btn btn-small blue-grey white-text waves-effect waves-light"
        >
          Começar
        </a>

        <a
          href="/TCC_vfinal.pdf"
          class="btn btn-small blue-grey white-text waves-effect waves-light"
          target="_blank"
        >
          Baixar documento
        </a>
      </div>

      <div
        class="des-hidden"
        style="display: flex; flex-flow: column; align-items: center; margin: 40px 0"
      >
        <a
          @click="start"
          class="mb btn btn-small blue-grey white-text waves-effect waves-light"
          style="width: 100%"
        >
          Começar
        </a>

        <a
          href="/TCC_vfinal.pdf"
          class="btn btn-small blue-grey white-text waves-effect waves-light"
          style="width: 100%"
          target="_blank"
        >
          Baixar documento
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#welcome {
  background-color: #f5f8fa;

  .frame {
    border-radius: 10px;
    padding: 5px 20px;
    background-color: rgba(255, 255, 255, 0.5);
  }

  .bg {
    background: url(../assets/bg.png) 50% 50% no-repeat;
    background-size: contain;
    backdrop-filter: opacity(50%);
  }
}
</style>

<script>
export default {
  methods: {
    start() {
      window.$('#welcome').modal('close')
      this.$root.$emit('showSidebar')
    },
  },
}
</script>
