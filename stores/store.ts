export const useGstore = defineStore("Gstore", {
  state: () => {
    return {
      balkenArray: new Array(16).fill({
        active: false,
        attack: 40,
        intensity: 30,
        duration: 10,
        decay: 80,
      }),
    };
  },
  persist: {
    storage: persistedState.localStorage,
  },
});
