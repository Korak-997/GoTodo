<script>
import { v4 as uuidv4 } from "uuid";
import { addList } from "../helpers/db";
import CloseBtn from "./CloseBtn.vue";

export default {
  name: "EditList",
  data() {
    return {
      list: {
        title: list.title,
        tag: list.tag,
        reminder: list.reminder,
        settings: list.settings,
        todos: list.todos,
      },
      todo: "",
    };
  },
  components: {
    CloseBtn,
  },
  props: {
    show: Boolean,
    list: Object
  },
  methods: {
    resetList() {
      this.list = {
        title: "",
        tag: false,
        reminder: false,
        settings: {
          color: "#80CED1",
        },
      };
    },
    async saveList() {
      this.$emit("showLoading", "Saving new List please wait...");
      const listToSave = {};

      for (const key in this.list) {
        if (this.list[key].length > 0 || this.list[key])
          listToSave[key] = this.list[key];
      }
      const response = await addList(listToSave);
      if (response.status) {
        this.$emit("stopLoading");
        this.$emit("showAlert", { status: true });
      } else {
        this.$emit("showAlert", {
          status: false,
          msg: JSON.stringify(response.msg),
        });
      }
    },
    deleteTodo(id){
      this.list.todos = this.list.todos.filter((todo)=> todo.id !== id)
    },
    addTodo() {
      this.list.todos.push({
        id: uuidv4(),
        content: this.todo,
      });
      this.todo = "";
    },
  },
};
</script>

<template>
  <div class="modal text-center" :class="{ 'modal-open': show }">
    <div class="modal-box">
      <close-btn @close="() => $emit('close')"></close-btn>
      <div class="card w-fullf bg-base-100 my-3  flex flex-col justify-around items-center">
        <label class="text-2xl text-primary m-4">
          TITLE:
          <input
            type="text"
            v-model="list.title"
            placeholder="Finish Paper Work"
            class="text-success border-b border-success"
          />
        </label>
        <label class="text-2xl text-primary m-4">
          REMINDER:
          <input
            type="datetime-local"
            v-model="list.reminder"
            class="text-success border-b border-success"
          />
        </label>
        <label class="text-2xl text-primary m-4">
          COLOR:
          <input class="w-10 h-10" type="color" v-model="list.settings.color" />
        </label>
        <label class="text-2xl text-primary m-4">
          TAG:
          <select
            v-model="list.tag"
            class="select select-success w-full max-w-xs select-lg"
          >
            <option value="false">PICK A TAG</option>
            <option value="home">HOME</option>
            <option value="school">SCHOOL</option>
            <option value="work">WORK</option>
          </select>
        </label>
        <div class="flex flex-col justify-center items-center m-4">
          <label class="mb-6">
            <button
              v-if="todo.length > 0"
              @click="addTodo"
              class="btn btn-primary btn-sm"
            >
              ADD
            </button>
            <input
              type="text"
              @keyup.enter="addTodo"
              v-model="todo"
              placeholder="Write your todo here"
              class="text-success border-b border-success px-2"
            />
          </label>
        </div>
        <div v-if="list.todos.length > 0">
          <h3 class="text-success">TODOS</h3>
          <div class="bg-base-100 flex justify-around items-center flex-wrap">
            <li
              class="text-xl m-2 border-b border-success p-4 rounded-none text-success"
              v-for="todo in list.todos"
              :key="todo.id"
            >
              <p>
                {{ todo.content }}
              </p>
              <button @click="()=>deleteTodo(todo.id)" class="btn btn-error btn-sm">DEL</button>
            </li>
          </div>
        </div>
        <button @click="saveList" v-if="list.title" class="btn btn-success w-full m-4">
          SAVE
        </button>
      </div>
    </div>
  </div>
</template>
<style lang="css" scoped>
input {
  background-color: transparent;
  outline: none;
}
</style>
