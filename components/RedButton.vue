<template>
  <div class="redButton">
    <svg
      v-if="!isClicked && !isHovering"
      @mousedown="handleClick"
      @mouseup="handleClick"
      @mouseover="handleMouseover"
      @mouseleave="handleMouseleave"
      width="213"
      height="59"
      viewBox="0 0 213 59"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="5.5"
        width="207"
        height="53"
        fill="#FBA7C6"
        stroke="black"
      />

      <path fill="black" />
      <path d="M213 0V54L208 59V5H0L5 0H213Z" fill="black" />
      <text
        x="50%"
        y="55%"
        dominant-baseline="middle"
        text-anchor="middle"
        class="redButtonText"
        fill="black"
      >
        Next
      </text>
    </svg>
    <svg
      v-if="isHovering && !isClicked"
      @mouseleave="handleMouseover"
      @mousedown="handleClick"
      width="213"
      height="59"
      viewBox="0 0 213 59"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="5.5"
        width="207"
        height="53"
        fill="#F16E9E"
        stroke="black"
      />
      <path fill="black" />
      <path d="M213 0V54L208 59V5H0L5 0H213Z" fill="black" />
      <text
        x="50%"
        y="55%"
        dominant-baseline="middle"
        text-anchor="middle"
        class="redButtonText"
        fill="black"
      >
        Back
      </text>
    </svg>
    <svg
      v-if="isClicked"
      @click="handleClick"
      @mouseover="handleMouseover"
      @mouseleave="handleMouseleave"
      @mouseup="handleClick"
      width="213"
      height="59"
      viewBox="0 0 213 59"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="5.5"
        width="207"
        height="53"
        fill="#F0568F"
        stroke="black"
      />
      <path fill="black" />
      <path d="M213 0V54L208 59V5H0L5 0H213Z" fill="black" />
      <text
        x="50%"
        y="55%"
        dominant-baseline="middle"
        text-anchor="middle"
        class="redButtonText"
        fill="black"
      >
        Back
      </text>
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
      console.log("click", this.isClicked);
    },
    handleMouseUp() {
      this.isClicked = !this.isClicked;
    },
    handleMouseover() {
      // Handle mouseover event (optional)
      this.isHovering = !this.isHovering;
      console.log("hover", this.isHovering);
    },
    handleMouseleave() {
      // Handle mouseleave event (optional)
      this.isHovering = !this.isHovering;
      console.log("hover", this.isHovering);
    },
  },
};
</script>

<style scoped>
.redButtonText {
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-variation-settings: "slnt" 0;
}
</style>
