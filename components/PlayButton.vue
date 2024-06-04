<template>
  <div>
    <svg
      v-if="!isClicked && !isHovering"
      @mousedown="handleClick"
      @mouseup="handleClick"
      @mouseenter="handleMouseover"
      @mouseleave="handleMouseleave"
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
        fill="#FBA7C6"
        stroke="black"
      />
      <path
        d="M12.25 10.4067L28 19.5L12.25 28.5933V10.4067Z"
        fill="#D9296A"
        stroke="black"
      /></svg
    ><svg
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
        d="M12.25 10.4067L28 19.5L12.25 28.5933V10.4067Z"
        fill="#C31656"
        stroke="black"
      /></svg
    ><svg
      v-if="isClicked"
      @click="handleClick"
      @mouseover="handleMouseover"
      @mouseleave="handleMouseleave"
      @mouseup="handleClick"
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
        fill="#C31656"
        stroke="black"
      />
      <path
        d="M12.25 10.4067L28 19.5L12.25 28.5933V10.4067Z"
        fill="#F0568F"
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
      console.log(this.isHovering);
    },
    handleMouseleave() {
      // Handle mouseleave event (optional)
      this.isHovering = false;
      console.log(this.isHovering);
    },
  },
};
</script>

<style scoped>
.playButton {
}
</style>
