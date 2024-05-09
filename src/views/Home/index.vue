<script setup>
import { ref, computed } from "vue";
import { exampleStore } from "../../store/example";
import { useQuery, useMutation } from "vue-query";

import exampleService from "../../services/example";
const exampleStorage = exampleStore();
const currentData = ref(computed(() => exampleStorage.data));

// get method
const getList = ({ queryParams }) => {
  return useQuery(
    ["POSTS_LIST"],
    () => {
      return exampleService.getList();
    },
    queryParams
  );
};

const { mutate: handleMutate, isLoading } = useMutation({
  mutationFn: (data) => {
    return exampleService.createPost(data);
  },
  onSuccess: (response) => {
    console.log(response);
  },
  onError: () => {
    console.log("error!");
  },
});

// post method same as put
handleMutate({ name: "example" });

exampleStorage.setData({ name: "Example" });
console.log("11", currentData.value);
</script>

<template>
  <h1 class="text-3xl font-bold underline text-[var(--black)]">Home page</h1>
</template>

<style lang="scss" scoped></style>
