export const useGstore = defineStore("Gstore", {
  state: () => {
    return {
      balkenArray: [
        { attack: 40, intensity: 30, duration: 10, decay: 80 },
        { attack: 40, intensity: 30, duration: 10, decay: 80 },
        { attack: 40, intensity: 30, duration: 10, decay: 80 },
      ],
    };
  },
  persist: {
    storage: persistedState.localStorage,
  },
});
