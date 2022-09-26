<script>
import SpinnerModal from "../components/SpinnerModal.vue";
export default {
  data() {
    return {
      showSpinner: true,
      posts: false
    };
  },
  components: {
    SpinnerModal,
  },
  methods: {
    async getPosts(){
      const data = await allPosts()
      if(data.status){
        this.posts = data.posts
        this.showSpinner = false
      }
    }
  },
  mounted() {
    this.getPosts()
  },
};
</script>
<template>
  <main class="my-6 flex justify-center items-center flex-col">
    <spinner-modal :show="showSpinner"></spinner-modal>
    <h1>hi</h1>
  </main>
</template>
