<template>
  <v-layout>
    <v-flex class="text-center">
      <h5>Todos</h5>
      <ul>
        <li v-for="todo in todos" :key="todo.id">
          <input :checked="todo.done" type="checkbox" @change="toggle(todo)">
          <span :class="{done: todo.done}">{{ todo.text }}</span>
          <v-btn @click="removeTodo(todo)">remove</v-btn>
        </li>
        <li>
          <v-text-field v-model="newTodoText" @keyup.enter="addTodo" type="text" placeholder="What needs to be done?" />
        </li>
      </ul>
      <v-divider class="my-4"></v-divider>
      <Counter />
    </v-flex>
  </v-layout>
</template>


<script lang="ts">
import Vue from 'vue'
import { mapMutations } from 'vuex'
export default Vue.extend({
  data() {
    return {
      count: 0,
      newTodoText: "",
    };
  },
  computed:{
    todos(){
      return this.$store.state.todos.list
    }
  },
  methods: {
    addTodo(e:any){
      this.$store.commit('todos/add', this.newTodoText)
      this.newTodoText = ''
    },
    ...mapMutations({ toggle: 'todos/toggle' }),
    removeTodo(todo:any){
      this.$store.commit('todos/remove', todo)
    }
  }
})
</script>

<style scoped>
.done {
  text-decoration: line-through;
}
</style>