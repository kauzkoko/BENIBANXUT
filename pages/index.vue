<template>
  <div class="container font-sans">
    <!-- <div class="sidebar">
      <Backbutton />
      <div class="sidebar-title-container">
        <p>Getting started</p>
      </div>
    </div> -->
    <div class="main-content">
      <div class="toggle-container">
        <div class="controls-container">
          <div class="containter-container">
            <MiniBalkenContainer>
              <MiniBalken
                v-for="(balken, index) in balkenArray"
                :index="index"
                :balken="balken"
                @click="selectedIndex = index"
                :selected="selectedIndex === index"
                @delete="deleteBalkenByIndex"
              />
              <AddSnippet
                v-if="balkenArray.length < 16"
                @addBalken="addBalken"
              />
            </MiniBalkenContainer>
          </div>
          <div class="slider-container">
            <Slider
              :index="selectedIndex"
              type="attack"
              text="Attack"
              class="slider"
            />
            <Slider
              :index="selectedIndex"
              type="intensity"
              text="Intensity"
              class="slider"
            />
            <Slider
              :index="selectedIndex"
              type="duration"
              text="Duration"
              class="slider"
            />
            <Slider
              :index="selectedIndex"
              type="decay"
              text="Decay"
              class="slider"
            />
          </div>
          <div class="aidd-play-container">
            <AiddRepresentation />
            <PlayButton />
          </div>
        </div>
      </div>
      <div class="text-content">
        <RedButton />
        <RedButtonMacBook />
      </div>
      <button @click="sendSerial()" class="fixed bottom-0 left-0">
        send serial test
      </button>
    </div>
  </div>
</template>

<script setup>
import "@unocss/reset/normalize.css";
const selectedIndex = ref(0);
const store = useGstore();
const { balkenArray } = storeToRefs(store);
const deleteBalkenByIndex = (index) => {
  balkenArray.value.splice(index);
};
const addBalken = () => {
  console.log(balkenArray.value);
  if (balkenArray.value.length < 17)
    balkenArray.value.push({
      active: true,
      attack: 40,
      intensity: 40,
      duration: 40,
      decay: 40,
    });
};

const sendSerial = async () => {
  console.log("send serial");
  await $fetch("/api/serial");
};
</script>

<style>
html,
body {
  margin: 0 !important;
  padding: 0 !important;
  width: 100vw;
  height: 100vh;
}

.container {
  margin: 0;
  max-width: 100vw;
  /* padding: 20px; */
  height: 100vh;
  display: flex;
  background-color: black; /* Set background color of the entire layout to black */
}

.sidebar {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 230px; /* Sidebar width */
  height: 90vh;
  margin-right: 20px;
  background-color: #dddddd; /* Grey background color for sidebar */
  /* Other sidebar styles */
}

.main-content {
  display: flex;
  flex-direction: column;
  flex: 1; /* Main content takes remaining space */
  background-color: #dddddd; /* Grey background color for main content */
  /* Other main content styles */
  align-items: center;
  justify-content: space-around;
}
.sidebar-title-container {
  display: flex;
  flex-direction: row;
  padding-top: 20px;
}
.toggle-container {
  width: 90%;
  height: 40%;

  background-color: #f6f6f6;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border: black solid 1px;
}
.slider-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.slider {
  margin: 0 10px;
}

.container-container {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
.text-content {
  display: flex;
  flex-direction: row;
}
.aidd-play-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80%;
}
.controls-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 700px;
}

.snipped-container-background {
  background-image: url("~/assets/snippetcontainerbackground.svg");
  background-size: cover; /* Adjusts the size of the background image */
  background-repeat: no-repeat;
}
</style>
