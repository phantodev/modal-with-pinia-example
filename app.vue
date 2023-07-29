<template>
  <div>
    <!-- Passo o function via PROPS  -->
    <Input @parent-action="roomsNumber" />
    <!-- Passo o state via V-MODEL  -->
    <InputVModel v-model="store.count2" />
  </div>
</template>

<script setup>
import { useStore } from "./stores/store";
const store = useStore();
// Posso criar uma função e passar ela via PROPS para manipular um state de uma STORE
function roomsNumber(rooms) {
  store.count = Number(rooms);
}
</script>
./stores/store
