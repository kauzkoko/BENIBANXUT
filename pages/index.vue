<template>
  <div class="container font-sans">
    <div class="sidebar">
      <Backbutton />
      <div class="sidebar-title-container">
        <p>Getting started</p>
      </div>
    </div>
    <div class="main-content">
      <div class="toggle-container">
        <div class="controls-container">
          <div class="containter-container">
            <SnippetContainer>
              <SnippetThumbnail
                :attack="childCount"
                :intensity="childCount2"
                :decay="childCount3"
              />
            </SnippetContainer>
          </div>
          <div class="slider-container">
            <OrangeSlider
              text="Attack"
              class="slider"
              @incremented="updateCountFromChild"
            />
            <OrangeSlider
              text="Intensity"
              class="slider"
              @incremented="updateCountFromChild2"
            />
            <OrangeSlider text="Duration" class="slider" />
            <OrangeSlider
              text="Decay"
              class="slider"
              @incremented="updateCountFromChild3"
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
        <SnippetThumbnail :attack="childCount" />
        <AddSnippet />
        <p>{{ childCount }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const sliderLabel = ref("Decay");

const childCount = ref(0);
const childCount2 = ref(0);
const childCount3 = ref(0);

// Define the updateCountFromChild function
const updateCountFromChild = (value) => {
  childCount.value = value;
};
const updateCountFromChild2 = (value) => {
  childCount2.value = value;
};
const updateCountFromChild3 = (value) => {
  childCount3.value = value;
};
</script>

<style scoped>
.container {
  padding: 20px;
  height: 90vh;
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
</style>
