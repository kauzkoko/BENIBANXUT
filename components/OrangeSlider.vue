<template>
  <div class="orangeSlider">
    <div
      class="absolute ml--12px mt--35px w-68px h-60px bg-transparent border-solid border-1 border-black"
      :style="{ top: computedValueLines + 30 + 'px' }"
      @mousedown="mousedownDiv"
      @mouseup="mouseupDiv"
      @mouseout="mouseupDiv"
    ></div>
    <svg
      width="50"
      height="257"
      viewBox="0 0 50 257"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.5 236.932V4.50103L5.5 4.50009V215.468V232.766L0.5 236.932Z"
        fill="#FF8C72"
        stroke="black"
      />
      <rect
        x="5.5"
        y="4.5"
        width="40"
        height="228"
        fill="#F8BBAD"
        stroke="black"
      />

      <path
        ref="skewRect1"
        id="skewRect1"
        :d="skewedRect"
        fill="#FF8C72"
        stroke="black"
      />
      <rect
        ref="rect1"
        id="rect1"
        x="0.5"
        :y="computedValueMainRect"
        :width="45"
        :height="computedValueY"
        :fill="sliderColor"
        stroke="black"
      />
      <g id="lines">
        <line
          x1="10"
          :y1="computedValueLines"
          x2="35"
          :y2="computedValueLines"
          stroke="black"
        />
        <line
          x1="10"
          :y1="computedValueLines + 5"
          x2="35"
          :y2="computedValueLines + 5"
          stroke="black"
        />
        <line
          x1="10"
          :y1="computedValueLines + 10"
          x2="35"
          :y2="computedValueLines + 10"
          stroke="black"
        />
      </g>

      <path fill="black" />
      <path d="M50 0V234L46 238V4.00043H0L2 2L4 0H50Z" fill="#410F04" />
      <text
        x="50%"
        y="89%"
        class="sliderText"
        dominant-baseline="middle"
        text-anchor="middle"
        fill="black"
      >
        {{ percent }}
      </text>
      <text
        x="50%"
        y="97%"
        dominant-baseline="middle"
        text-anchor="middle"
        fill="black"
        class="sliderText"
        font-size="13"
      >
        {{ text }}
      </text>
    </svg>
  </div>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});
const store = useGstore();
const { balkenArray } = storeToRefs(store);

const { y } = useMouse();

const count = ref(0);
const mouseY = ref(0);
const computedValueMainRect = computed(() => mouseY.value + 5.2071);
const computedValueLines = computed(() => mouseY.value + 15);
const computedValueY = computed(() => 237.5 - mouseY.value - 5.2071);
const accc = computed(() => mouseY.value);
const accc1 = computed(() => mouseY.value + 5.2071);
const accc2 = computed(() => mouseY.value + 0.5);
const accc3 = computed(() => mouseY.value + 5.5);
const skewedRect = computed(() => {
  return (
    "M0.5 " +
    accc1.value +
    " " +
    "L5.20711 " +
    accc2.value +
    " H45.5V" +
    accc3.value +
    " H0.5V" +
    accc1.value +
    " " +
    "Z"
  );
});

// const mouseY = ref(0);
const defaultColor = "#FA613F";
const hoverColor = "#F23C13";
const clickedColor = "CF2904";

var sliderColor = computed(() => sliderColor1);
var sliderColor1 = "#FA613F";
const updateSliderColor = () => {
  sliderColor1 = hoverColor;
};
const resetSliderColor = () => {
  sliderColor1 = defaultColor;
};

var percent = "0%";
var percentValue = ref(0);
const updateText = () => {
  percentValue = Math.round(100 - ((100 / 189) * mouseY.value + 1));
  percent = Math.round(100 - ((100 / 189) * mouseY.value + 1)) + "%";
  increment();
};

const updateMouseY = (event) => {
  if (clickedFlag && event.clientY < 220 && event.clientY > 30) {
    console.log("mouseY", mouseY.value);
    mouseY.value = event.clientY - 32;
    updateText();
  }
};

const increment = () => {
  console.log("incremented", balkenArray.value[props.index][props.type]);
  balkenArray.value[props.index][props.type] = percentValue;
};

var clickedFlag = false;
const updateMouseFlagTrue = () => {
  clickedFlag = true;
  sliderColor1 = clickedColor;
};

const updateMouseFlagFalse = () => {
  clickedFlag = false;
};

const mousedownDiv = () => {
  updateMouseFlagTrue();
};

const mouseupDiv = () => {
  updateMouseFlagFalse();
  resetSliderColor();
};

onMounted(() => {
  window.addEventListener("mousemove", updateMouseY);
});
</script>

<style scoped>
.beni-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  justify-content: center;
  align-items: center;
}
</style>
