<script>
import { onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import mainLogic from "./Logic/index.vue";
import { authStore } from "../store/auth";

export default {
  components: {
    mainLogic,
  },
  setup() {
    const route = useRoute();
    const authStorege = authStore();

    const GetData = (name) => {
      const res = localStorage.getItem(name);
      return res ? JSON.parse(res) : "";
    };

    const routes = GetData("routes");
    console.log("routes", routes);

    function Login() {
      authStorege.signIn();
    }

    const currentRoute = computed(
      () => routes.find((item) => item.id === route.path) ?? ""
    );

    return {
      route,
      currentRoute,
    };
  },
};
</script>

<template>
  <section>
    <router-view />
  </section>
  <mainLogic />
</template>

<style scoped lang="scss"></style>
