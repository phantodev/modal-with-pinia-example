import { defineStore } from "pinia";

export const useStore = defineStore("store", () => {
  const estadoZe = ref("Teste ESTADO: ");
  const estadoZeAtualizado = ref("");
  // Apenas fazendo uma função do tipo computed() é a mesma coisa que o GETTER no OPTION API.
  const showEstadoZe = computed(() => estadoZe);
  // A funbção direta como abaixo é o ACTIONS do OPTION API.
  function atualizarEstadoZe(parametro) {
    console.log(parametro);
    estadoZeAtualizado.value = parametro;
  }

  function limparEstadoZe() {
    console.log("Entrou para limpar!");
  }

  return {
    showEstadoZe,
    estadoZe,
    atualizarEstadoZe,
    limparEstadoZe,
    estadoZeAtualizado,
  };
});
