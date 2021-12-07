<template>
  <div>
    <h1>Tareas</h1>
    <hr />
    <ul>
      <li v-for="(task, $index) in tasks" :key="$index">
        {{ task.name }} ({{ task.duration }})
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AppTaskShow",
  computed: {
    tasks() {
      return this.$store.state.tasks;
    },
  },
};
</script>

<style>
</style>