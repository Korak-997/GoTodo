<script>
import { RouterView } from "vue-router";
import NavbarComponent from "./components/NavbarComponent.vue";
export default {
  data(){
    return{
      currentUser: false
    }
  },
  components: {
    NavbarComponent,
    RouterView,
  },
  methods: {},
  watch: {
    $route(to, from) {
      this.currentUser = JSON.parse(localStorage.kadBlogUser || false)[0];
    },
  },
};
</script>

<template>
  <navbar-component :user=currentUser> </navbar-component>
  <RouterView />
</template>

<style></style>
