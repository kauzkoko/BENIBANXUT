<template>
  <div class="backbutton">
    <!-- Conditional rendering to display different SVGs based on the state -->
    <svg
      v-if="!isClicked && !isHovering"
      @mousedown="handleClick"
      @mouseup="handleClick"
      @mouseover="handleMouseover"
      @mouseleave="handleMouseleave"
      width="39"
      height="37"
      viewBox="0 0 39 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <!-- SVG path for default state -->
      <path d="M3 0H39V34L36 37V3H0L3 0Z" fill="black" />
      <rect
        x="0.5"
        y="3.5"
        width="35"
        height="33"
        fill="#FBA7C6"
        stroke="black"
      />
      <path
        d="M20.5 16V16.5H21H30.5V23.5H21H20.5V24V29.1258L4.98615 20L20.5 10.8742V16Z"
        fill="#D9296A"
        stroke="black"
      />
    </svg>

    <svg
      v-if="isClicked"
      @click="handleClick"
      @mouseover="handleMouseover"
      @mouseleave="handleMouseleave"
      @mouseup="handleClick"
      width="39"
      height="37"
      viewBox="0 0 39 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <!-- SVG path for alternate state -->
      <path d="M3 0H39V34L36 37V3H0L3 0Z" fill="black" />
      <rect
        x="0.5"
        y="3.5"
        width="35"
        height="33"
        fill="#C31656"
        stroke="black"
      />
      <path
        d="M20.5 16V16.5H21H30.5V23.5H21H20.5V24V29.1258L4.98615 20L20.5 10.8742V16Z"
        fill="#F0568F"
        stroke="black"
      />
    </svg>
    <svg
      v-if="isHovering && !isClicked"
      @mouseleave="handleMouseleave"
      @mousedown="handleClick"
      xmlns="http://www.w3.org/2000/svg"
      width="39"
      height="37"
      viewBox="0 0 39 37"
      fill="none"
    >
      <path d="M3 0H39V34L36 37V3H0L3 0Z" fill="black" />
      <rect
        x="0.5"
        y="3.5"
        width="35"
        height="33"
        fill="#F16E9E"
        stroke="black"
      />
      <path
        d="M20.5 16V16.5H21H30.5V23.5H21H20.5V24V29.1258L4.98615 20L20.5 10.8742V16Z"
        fill="#C31656"
        stroke="black"
      />
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isClicked: false,
      isHovering: false,
    };
  },
  methods: {
    handleClick() {
      this.isClicked = !this.isClicked; // Toggle the state on click
    },
    handleMouseUp() {
      this.isClicked = !this.isClicked;
    },
    handleMouseover() {
      // Handle mouseover event (optional)
      this.isHovering = true;
    },
    handleMouseleave() {
      // Handle mouseleave event (optional)
      this.isHovering = false;
    },
  },
};
</script>

<style scoped>
.backbutton {
}
</style>
