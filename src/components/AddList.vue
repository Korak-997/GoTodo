<script>
export default {
  name: "AddList",
  data() {
    return {
      list: {
        title: "",
        tag: false,
        reminder: false,
      },
      todos: [],
    };
  },
};
</script>

<template>
  <div class="drawer drawer-mobile">
    <input id="add-list-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col items-center justify-center"></div>
    <div class="drawer-side w-1/2">
      <label for="add-list-drawer" class="drawer-overlay"></label>
      <div class="m-4 p-4 flex flex-col justify-around items-center">
        <label class="text-2xl text-primary">
          TITLE:
          <input
            type="text"
            v-model="list.title"
            placeholder="Finish Paper Work"
            class="text-success border-b border-success"
          />
        </label>
        <label class="text-2xl text-primary">
          REMINDER:
          <input
            type="datetime-local"
            v-model="list.reminder"
            class="text-success border-b border-success"
          />
        </label>
        <label class="text-2xl text-primary">
          TAG:
          <select v-model="list.tag" class="select select-success w-full max-w-xs select-lg">
            <option value="false">PICK A TAG</option>
            <option value="home">HOME</option>
            <option value="school">SCHOOL</option>
            <option value="work">WORK</option>
          </select>
        </label>
        <div class="flex flex-col justify-center items-center">
          <h3>TODOS</h3>
          <label>
            <button class="btn btn-primary btn-sm">ADD</button>
            <input type="text" class="text-success border-b border-success px-2"/>
          </label>

          <ul
            tabindex="0"
            class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            v-if="todos.length > 0"
          >
            <li v-for="todo in todos" :key="todo.id">
              {{todo.content}}
            </li>
          </ul>
        </div>
        <button v-if="list.title" class="btn btn-success">SAVE</button>
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
