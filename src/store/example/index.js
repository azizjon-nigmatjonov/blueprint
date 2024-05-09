import { defineStore } from "pinia";

const initialValue = {
  data: {},
};

export const exampleStore = defineStore("example", {
  state: () => {
    return initialValue;
  },
  getters: {},
  actions: {
    setData(data) {
      this.data = data;
    },
  },
});
