<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" width="25%"> -->
    <!-- <HelloWorld msg="Hello Vue in CodeSandbox!"/> -->
    <AppTaskEntry />
    <AppTaskShow />
    <AppTaskFilter />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
import AppTaskEntry from "./components/AppTaskEntry.vue";
import AppTaskShow from "./components/AppTaskShow.vue";
import AppTaskFilter from "./components/AppTaskFilter.vue";
export default {
  name: "App",
  components: {
    // HelloWorld
    AppTaskEntry,
    AppTaskShow,
    AppTaskFilter,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
