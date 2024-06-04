<template>
  <div
    class="w-232px h-238px flex justify-center items-center bg-black snipped-container-background"
  >
    <div class="grid grid-cols-4 grid-rows-4 mt-15px ml-10px w-200px aspect-1">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.snipped-container-background {
  background-image: url("~/assets/snippetcontainerbackground.svg");
  background-size: cover; /* Adjusts the size of the background image */
  background-repeat: no-repeat;
}
</style>
