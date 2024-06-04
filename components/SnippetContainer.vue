<template>
  <div class="snippetContainer">
    <div class="container-background">
      <div class="grid">
        <div class="empty-thumbnail" v-for="n in 16"><slot></slot></div>
      </div>
    </div>
  </div>
</template>
<script>
import snippetThumbnail from "./snippetThumbnail.vue";

export default {
  name: "snippetContainer",
  components: {
    snippetThumbnail,
  },
};
</script>
<style scoped>
.container-background {
  background-image: url("snippetcontainerbackground.svg");
  width: 232px; /* Set your desired width */
  height: 238px; /* Set your desired height */

  background-size: cover; /* Adjusts the size of the background image */
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}
.grid {
  margin-top: 15px;
  margin-left: 10px;
  width: 200px;
  height: 200px;
  position: absolute;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
}
.empty-thumbnail {
  width: 36px;
  height: 34px;
  background-color: #daeef7;
}
</style>
