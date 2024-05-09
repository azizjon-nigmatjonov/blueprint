import { defineStore } from "pinia";

const initialValue = {
  auth_data: {},
};

export const authStore = defineStore("auth", {
  state: () => {
    return initialValue;
  },
  getters: {
    getUser: (state) => state.user,
  },
  actions: {
    signIn(data) {
        this.auth_data = data
    },
    logout: () => {
      return initialState;
    },
  },
});
