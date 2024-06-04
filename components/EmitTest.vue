<template>
  <div>
    <p>Count from child component: {{ childCount }}</p>
    <emitTestChild @incremented="updateCountFromChild" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import emitTestChild from "./emitTestChild.vue";

// Define childCount as a ref
const childCount = ref(0);

// Define the updateCountFromChild function
const updateCountFromChild = (value) => {
  childCount.value = value;
};
</script>
