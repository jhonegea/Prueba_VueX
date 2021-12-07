import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    tasks: []
  },
  mutations: {
    addTask(state, task) {
      state.tasks.push(task);
      console.log(state);
    }
  },

  getters: {
    getTaskByDuration(state) {
      const filteredTasks = [...state.tasks];
      return filteredTasks.sort((a, b) => {
        if (a.duration < b.duration) {
          return -1;
        }

        if (a.duration > b.duration) {
          return 1;
        }

        return 0;
      });
    }
  }
});
