<script>
export default {
  name: "ListBox",
  props:{
    list:Object
  }
};
</script>
<template>
  <h3 class="text-4xl  shadow-xl p-2 mb-4">{{ list.title }}</h3>
  <div v-if="list.tag" class="badge badge-secondary">
    {{ list.tag.toUpperCase() }}
  </div>
  <div class="card-body flex justify-around items-center flex-col">
    <div v-if="list.todos" class="text-left m-2">
      <li
        v-for="todo in list.todos"
        class="bt-secondary text-xl"
        :key="todo.id"
      >
        {{ todo.content }}
      </li>
    </div>

    <div class="card-actions justify-middle">
      <div class="btn-group">
        <button class="btn btn-info btn-sm">EDIT</button>
        <button class="btn btn-error btn-sm">DELETE</button>
      </div>
    </div>
  </div>
</template>
