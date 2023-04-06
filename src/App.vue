<template>
  <v-main-wrapper />
</template>

<script>
import vMainWrapper from "./components/v-main-wrapper.vue";

export default {
  name: "App",
  components: {
    vMainWrapper,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap");

* {
  margin: 0;
  padding: 0;
  font-family: "Montserrat", sans-serif;
}
</style>
