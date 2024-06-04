<template>
  <div class="orangeSlider" @mouseup="updateMouseFlagFalse" id="slidr">
    <svg
      @mousemove="updateMousePosition"
      @click="updateSlider, increment"
      @mousedown="updateMouseFlagTrue"
      @mouseover="updateSliderColor"
      @mouseout="resetSliderColor"
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
      <line
        ref="kack1"
        id="kack1"
        x1="10"
        :y1="computedValueFirstLine"
        x2="35"
        :y2="computedValueFirstLine"
        stroke="black"
      />
      <line
        x1="10"
        :y1="computedValueSecondLine"
        x2="35"
        :y2="computedValueSecondLine"
        stroke="black"
      />
      <line
        x1="10"
        :y1="computedValueThirdLine"
        x2="35"
        :y2="computedValueThirdLine"
        stroke="black"
      />

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
import { ref, computed, onMounted, defineProps } from "vue";
const kack1 = ref(null);
const sliderValue = ref(0);
const computedValueMainRect = computed(() => mouseY.value / 1 + 5.2071);
const computedValueFirstLine = computed(() => mouseY.value / 1 + 15);
const computedValueSecondLine = computed(() => mouseY.value / 1 + 20);
const computedValueThirdLine = computed(() => mouseY.value / 1 + 25);
const computedValueY = computed(() => 237.5 - mouseY.value - 5.2071);
const accc = computed(() => mouseY.value);
const accc1 = computed(() => mouseY.value / 1 + 5.2071);
const accc2 = computed(() => mouseY.value / 1 + 0.5);
const accc3 = computed(() => mouseY.value / 1 + 5.5);
const mouseY = ref(0);
const defaultColor = "#FA613F";
const hoverColor = "#F23C13";
const clickedColor = "CF2904";
//var element = document.getElementById("slidr");
//var recta = element.getBoundingClientRect();
//console.log("TOP: ", recta.top);
var sliderColor = computed(() => sliderColor1);
var sliderColor1 = "#FA613F";
const updateSliderColor = () => {
  sliderColor1 = hoverColor;
};
const resetSliderColor = () => {
  sliderColor1 = defaultColor;
};

var clickedFlag = false;
const updateMouseFlagTrue = () => {
  clickedFlag = true;
  sliderColor1 = clickedColor;
};
const updateMouseFlagFalse = () => {
  clickedFlag = false;
};
var percent = "0%";
var percentValue = ref(0);
const updateText = () => {
  percentValue = Math.round(100 - ((100 / 189) * mouseY.value + 1));
  percent = Math.round(100 - ((100 / 189) * mouseY.value + 1)) + "%";
  increment();
};
const updateMouseY = (event) => {
  if (clickedFlag == true && event.clientY < 220 && event.clientY > 30) {
    mouseY.value = event.clientY - 32;
    updateText();
  }
};
const skewedRect = computed(
  () =>
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
onMounted(() => {
  window.addEventListener("mousemove", updateMouseY);
});

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});
const emits = defineEmits(["incremented"]);

// Define count as a ref
const count = ref(0);

// Define the increment function
const increment = () => {
  count.value = percentValue;
  // Emit an event to inform the parent component about the change
  emits("incremented", count.value);
};
</script>

<style scoped>
.beni-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  justify-content: center;
  align-items: center;
}
.sliderText {
  font-family: "Roboto", sans-serif;
}
</style>
