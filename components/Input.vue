<template>
  <div>
    <input
      class="bg-blue-50 border w-60 h-20 mb-10"
      type="text"
      placeholder="0"
      @input="$emit('parentAction', $event.target.value)" />
  </div>
</template>
<!-- Não posso excluir a linda do Script, pois o $event precisa dele -->
<script setup></script>
