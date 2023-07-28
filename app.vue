<template>
  <ClientOnly fallback-tag="span" fallback="Loading comments...">
    <div class="fixed inset-0 flex items-center justify-center">
      <button
        type="button"
        @click="openModal"
        class="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
        Open dialog
      </button>
    </div>
    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog as="div" @close="closeModal" class="relative z-10">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0">
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div
            class="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95">
              <DialogPanel
                class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <DialogTitle
                  as="h3"
                  class="text-lg font-medium leading-6 text-gray-900">
                  Aqui estou lendo o texto abaixo do estado
                </DialogTitle>
                <div class="mt-2 w-full">
                  <input
                    type="text"
                    :value="store.estadoZe"
                    ref="inputRef"
                    class="h-10 border p-2 my-2 w-full rounded-md" />
                </div>

                <div class="mt-4 gap-4 flex">
                  <button
                    type="button"
                    class="inline-flex justify-center rounded-md border border-transparent text-white bg-red-400 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    @click="closeModalLimparState">
                    Cancelar Modal e Limpar Store
                  </button>
                  <button
                    type="button"
                    class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    @click="closeModal">
                    Fechar e Gravar Update
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </ClientOnly>
</template>

<script setup>
import { ref } from "vue";
const inputRef = ref(null);
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";
import { useStore } from "~/stores/myStore";
const store = useStore();
console.log(store.estadoZe);

const isOpen = ref(true);

function closeModal() {
  isOpen.value = false;
  const inputValue = inputRef.value.value;
  store.atualizarEstadoZe(inputValue);
}
function closeModalLimparState() {
  isOpen.value = false;
  store.limparEstadoZe();
}
function openModal() {
  isOpen.value = true;
}
</script>
