<template>
  <div class="slider-container" ref="sliderRef">
    <div class="filler" :style="{ bottom: fillerBottom + 'px' }"></div>
    <div class="thumb" :style="{ bottom: sliderValue + '%' }"></div>
    <div class="top"></div>
    <div class="bottom"></div>
  </div>
</template>

<script setup>
const sliderValue = ref(50);
const sliderRef = ref(null);
const fillerBottom = ref(-95);
const store = useGstore();
const { balkenArray } = storeToRefs(store);

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

const updateSlider = (event) => {
  const rect = sliderRef?.value.getBoundingClientRect();
  const offsetY = event.clientY - rect.top;
  const height = rect.height;
  sliderValue.value = Math.max(
    0,
    Math.min(100, ((height - offsetY) / height) * 100)
  );
};

watch(sliderValue, (value) => {
  console.log(value);
  // map function beni stuff find de richtig wert
  fillerBottom.value = useMap(value, 0, 100, -180, 0);
  balkenArray.value[props.index][props.type] = Math.floor(sliderValue.value);
});

const onMouseMove = (event) => {
  if (sliderRef.value) {
    updateSlider(event);
  }
};

const onMouseUp = () => {
  document.removeEventListener("mousemove", onMouseMove);
  document.removeEventListener("mouseup", onMouseUp);
};

const onMouseDown = (event) => {
  updateSlider(event);
  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);
};

onMounted(() => {
  const slider = sliderRef.value;
  slider.addEventListener("mousedown", onMouseDown);
});

onUnmounted(() => {
  const slider = sliderRef.value;
  slider.removeEventListener("mousedown", onMouseDown);
  document.removeEventListener("mousemove", onMouseMove);
  document.removeEventListener("mouseup", onMouseUp);
});
</script>

<style scoped>
.slider-container {
  position: relative;
  width: 50px;
  height: 238px;
  border-radius: 10px;
  border-radius: 0;
  background-image: url("/background2.svg");
  overflow: hidden;
}

.thumb {
  position: absolute;
  left: 50%;
  transform: translateX(-55%);
  width: 25px;
  height: 9px;
  cursor: pointer;
  border-radius: 0;
  background-image: url("/lines.svg");
}

.top {
  position: absolute;
  top: 0;
  width: 46px;
  height: 5px;
  border-radius: 0;
  background-image: url("/top.svg");
}

.bottom {
  position: absolute;
  bottom: 0;
  width: 46px;
  height: 1px;
  border-radius: 0;
  background-image: url("/bottom.svg");
}

.filler {
  position: absolute;
  bottom: -100px;
  width: 46px;
  height: 238px;
  border-radius: 0;
  background-image: url("/filler3.svg");
}
</style>
