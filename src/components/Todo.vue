<template>
  <h1>Todo List</h1>
  <input type="text" name="" id="" v-model="todoName" />
  <button @click="addTodo">Add</button>


  <ul>
    <li v-for="(lis, index) in list" :key="index">{{ lis }}</li>
  </ul>
</template>

<script>
import { comState } from "../assets/comState";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  setup() {
    const store = useStore();
    const { todoName } = comState();
    const list = computed(() => {
      return store.state.list;
    });
    const addTodo = () => {
      if (todoName.value) {
        store.dispatch("addTodo", todoName.value);
        todoName.value = null;
      }else{
        alert("Please write a todo")
      }
    };

    return { todoName, addTodo, list };
  },
};
</script>

<style></style>
