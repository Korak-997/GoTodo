<script>
import SpinnerModal from "../components/SpinnerModal.vue";
import AddList from "../components/AddList.vue"
export default {
  data() {
    return {
      showSpinner: false,
    };
  },
  components: {
    SpinnerModal,
    AddList
  },
  methods: {

  },
  mounted() {
  },
};
</script>
<template>
  <main class="my-6 flex justify-center items-center flex-col">
    <spinner-modal :show="showSpinner"></spinner-modal>
    <label for="add-list-drawer" class="btn btn-primary drawer-button lg:hidden">ADD LIST</label>

    <add-list></add-list>

  </main>
</template>
