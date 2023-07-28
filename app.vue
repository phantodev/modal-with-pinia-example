<template>
  <div>
    <Teste :count.sync="store.count" />
  </div>
</template>

<script setup>
import { useStore } from "./store";

const store = useStore();
</script>
