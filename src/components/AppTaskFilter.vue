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
  name: "AppTaskFilter",
  computed: {
    tasks() {
      return this.$store.getters.getTaskByDuration;
    },
  },
};
</script>

<style>
</style>