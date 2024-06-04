<template>
  <div>
    <button @click="increment">Increment</button>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";

// Define emitted events
const emits = defineEmits(["incremented"]);

// Define count as a ref
const count = ref(0);

// Define the increment function
const increment = () => {
  count.value++;
  // Emit an event to inform the parent component about the change
  emits("incremented", count.value);
};
</script>
