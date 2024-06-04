<template>
  <div class="snippetThumbnail">
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
      <g id="Property 1=Default">
        <g id="Rectangle 191">
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
        </g>
        <rect
          id="Rectangle 192"
          x="0.5"
          :y="attackY"
          width="12"
          :height="heightAttack"
          fill="#309AC5"
          stroke="black"
        />
        <rect
          id="Rectangle 193"
          x="12.5"
          :y="intensityY"
          width="11"
          :height="heightIntensity"
          fill="#309AC5"
          stroke="black"
        />
        <rect
          id="Rectangle 194"
          x="23.5"
          :y="decayY"
          width="12"
          :height="heightDecay"
          fill="#309AC5"
          stroke="black"
        />
        <path id="Polygon 9" d="M3 0H39V34L36 37V3H0L3 0Z" fill="black" />
      </g>
    </svg>
    <!-- <svg
      v-if="isHovering && !isClicked"
      @mouseleave="handleMouseleave"
      @mousedown="handleClick"
      xmlns="http://www.w3.org/2000/svg"
      width="39"
      height="37"
      viewBox="0 0 39 37"
      fill="none"
    >
      <rect x="0.5" y="3.5" width="35" height="33" fill="#87CEEB" />
      <rect x="0.5" y="3.5" width="35" height="33" stroke="black" />
      <rect
        x="0.5"
        y="3.5"
        width="35"
        height="33"
        stroke="black"
        stroke-opacity="0.2"
      />
      <rect
        x="0.5"
        :y="attackY"
        width="12"
        :height="heightAttack"
        fill="#1A769B"
        stroke="black"
      />
      <rect
        x="12.5"
        :y="intensityY"
        width="11"
        :height="heightIntensity"
        fill="#1A769B"
        stroke="black"
      />
      <rect
        x="23.5"
        :y="decayY"
        width="12"
        :height="heightDecay"
        fill="#1A769B"
        stroke="black"
      />
      <path d="M3 0H39V34L36 37V3H0L3 0Z" fill="black" /></svg
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
      <rect x="0.5" y="3.5" width="35" height="33" fill="#1A769B" />
      <rect x="0.5" y="3.5" width="35" height="33" stroke="black" />
      <rect
        x="0.5"
        y="3.5"
        width="35"
        height="33"
        stroke="black"
        stroke-opacity="0.2"
      />
      <rect
        x="0.5"
        :y="attackY"
        width="12"
        :height="heightAttack"
        fill="#5DB9DF"
        stroke="black"
      />
      <rect
        x="12.5"
        :y="intensityY"
        width="11"
        :height="heightIntensity"
        fill="#5DB9DF"
        stroke="black"
      />
      <rect
        x="23.5"
        :y="decayY"
        width="12"
        :height="heightDecay"
        fill="#5DB9DF"
        stroke="black"
      />
      <path d="M3 0H39V34L36 37V3H0L3 0Z" fill="black" />
    </svg> -->
  </div>
</template>

<script setup>
const props = defineProps({
  attack: {
    type: Number,
    required: true,
  },
  intensity: {
    type: Number,
    required: true,
  },
  decay: {
    type: Number,
    required: true,
  },
});
const attack1 = computed(() => props.attack);
const intensity = computed(() => props.intensity);
const decay = computed(() => props.decay);

const attackPercent = computed(() => attack1.value);
const attackValue = computed(() => (32.5 / 100) * attackPercent.value);
const heightAttack = computed(() => attackValue.value);
const attackY = computed(() => 4 + (32.5 - attackValue.value));

const intensityPercent = computed(() => intensity.value);
const intensityValue = computed(() => (32.5 / 100) * intensityPercent.value);
const heightIntensity = computed(() => intensityValue.value);
const intensityY = computed(() => 4 + (32.5 - intensityValue.value));

const decayPercent = computed(() => decay.value);
const decayValue = computed(() => (32.5 / 100) * decayPercent.value);
const heightDecay = computed(() => decayValue.value);
const decayY = computed(() => 4 + (32.5 - decayValue.value));

// Define reactive variables
const isClicked = ref(false);
const isHovering = ref(false);

// Define event handling functions
const handleClick = () => {
  isClicked.value = !isClicked.value; // Toggle the state on click
};

const handleMouseUp = () => {
  isClicked.value = !isClicked.value;
};

const handleMouseover = () => {
  // Handle mouseover event (optional)
  isHovering.value = true;
};

const handleMouseleave = () => {
  // Handle mouseleave event (optional)
  isHovering.value = false;
};
</script>

<style scoped>
.snippetThumbnail {
  position: relative;
  top: 0;
  left: 0;
}
</style>
