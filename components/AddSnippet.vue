<template>
  <div class="addSnippet" @click="$emit('addBalken')">
    <svg
      @mouseover="handleMouseover"
      xmlns="http://www.w3.org/2000/svg"
      width="39"
      height="37"
      viewBox="0 0 39 37"
      fill="none"
    >
      <path d="M3 0H39V34L36 37V3.16216H0L3 0Z" fill="black" />
      <rect x="0.5" y="3.5" width="35" height="33" fill="#DAEEF7" />
      <rect x="0.5" y="3.5" width="35" height="33" stroke="black" />
      <rect
        x="0.5"
        y="3.5"
        width="35"
        height="33"
        stroke="black"
        stroke-opacity="0.2"
      />
      <path
        d="M20.6471 30.1351H15.3529V23.4387H9V17.8585H15.3529V11.1621H20.6471V17.8585H27V23.4387H20.6471V30.1351Z"
        fill="#309AC5"
        stroke="black"
      />
    </svg>
  </div>
</template>
<script setup>
const emits = defineEmits(["addBalken"]);
</script>
