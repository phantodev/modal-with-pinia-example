<template>
  <div>
    <input
      class="bg-blue-50 border w-60 h-20"
      type="text"
      v-model="countValue"
      @input="updateCount" />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  count: {
    type: Number,
    required: true,
  },
});

const countValue = ref(props.count);

watch(
  () => props.count,
  (newValue) => {
    countValue.value = newValue;
  }
);

const emit = defineEmits(["count"]);

const updateCount = (event) => {
  const newValue = event.target.value;
  countValue.value = newValue;
  emit("update:count", newValue);
};
</script>

<script>
export default {
  emits: ["update:count"],
};
</script>
