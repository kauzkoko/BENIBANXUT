export const useGstore = defineStore("Gstore", {
  state: () => {
    return {
      balkenArray: [
        { active: true, attack: 40, intensity: 30, duration: 10, decay: 80 },
        { active: true, attack: 40, intensity: 30, duration: 10, decay: 80 },
        { active: true, attack: 40, intensity: 30, duration: 10, decay: 80 },
      ],
    };
  },
  getters: {
    activeBalken: (state) => {
      const newArray = [];
      console.log(state.balkenArray);
      state.balkenArray.forEach((item) => {
        if (item.active) newArray.push(item);
      });
      return newArray;
    },
  },
  persist: {
    storage: persistedState.localStorage,
  },
});
