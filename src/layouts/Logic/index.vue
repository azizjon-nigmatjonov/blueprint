<script>
export default {
  name: "mainLogic",
};
import { ColorConstants } from "../../contants/color.js";

const obj = ColorConstants ?? {};

Object.keys(obj).forEach((key) => {
  document.documentElement.style.setProperty("--" + key, obj[key]);
});

console.log("ColorConstants", ColorConstants);
</script>

<template></template>
