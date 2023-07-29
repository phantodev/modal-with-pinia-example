<template>
  <div>
    <input
      class="bg-red-50 border w-60 h-20 mb-10"
      :value="modelValue"
      placeholder="0"
      @input="$emit('update:modelValue', Number($event.target.value))" />
  </div>
</template>

<script setup>
defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);
</script>
