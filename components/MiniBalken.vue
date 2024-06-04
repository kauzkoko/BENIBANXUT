<template>
  <div class="w-36px h-34px bg-hex-daeef7" ref="el">
    <svg
      width="39"
      height="37"
      viewBox="0 0 39 37"
      :fill="selected ? '#FF8C72' : 'none'"
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
          :height="attackHeight"
          fill="#309AC5"
          stroke="black"
        />
        <rect
          id="Rectangle 193"
          x="12.5"
          :y="intensityY"
          width="11"
          :height="intensityHeight"
          fill="#309AC5"
          stroke="black"
        />
        <rect
          id="Rectangle 194"
          x="23.5"
          :y="decayY"
          width="12"
          :height="decayHeight"
          fill="#309AC5"
          stroke="black"
        />
        <path id="Polygon 9" d="M3 0H39V34L36 37V3H0L3 0Z" fill="black" />
      </g>
    </svg>
  </div>
</template>

<script setup>
const props = defineProps({
  index: {
    type: Number,
    required: true,
  },
  balken: {
    type: Object,
    required: true,
  },
  selected: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const el = ref(null);
onLongPress(el, () => {
  console.log("long press");
});

const attackHeight = computed(() => (32.5 / 100) * props.balken.attack);
const attackY = computed(() => 4 + (32.5 - attackHeight.value));

const intensityHeight = computed(() => (32.5 / 100) * props.balken.intensity);
const intensityY = computed(() => 4 + (32.5 - intensityHeight.value));

const decayHeight = computed(() => (32.5 / 100) * props.balken.decay);
const decayY = computed(() => 4 + (32.5 - decayHeight.value));
</script>
