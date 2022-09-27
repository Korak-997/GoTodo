<script>
import { RouterLink } from "vue-router";
export default {
  name: "NavbarComponent",
  data() {
    return {

    };
  },

  components: {
    RouterLink,
  },
  methods: {
  },
};
</script>
<template>
  <header>
    <div class="navbar shadow-xl flex justify-between">
      <div>
        <div>
          <RouterLink to="/" class="text-2xl"> GoTodo </RouterLink>
        </div>
      </div>
      <div class="flex justify-around w-1/2">
        <RouterLink to="/" class="text-2xl text-accent">
            <h3>Home</h3>
          </RouterLink>
        <div>
          <RouterLink to="/about" class="text-2xl text-accent">
            <h3>About</h3>
          </RouterLink>
        </div>
      </div>

          </div>
  </header>
</template>

<style scoped></style>
