<script>
import SpinnerModal from "../components/SpinnerModal.vue";
import AddList from "../components/AddList.vue";
import LoadingModal from "../components/LoadingModal.vue";
import FlashMsg from "../components/FlashMsg.vue";
import {goToTop} from "../helpers/methods"
export default {
  data() {
    return {
      showSpinner: false,
      showLoading: false,
      loadingText: "",
      flashType: "alert-success",
      flashMsg: "",
      showFlash: false,
      openDrawer: false
    };
  },
  components: {
    SpinnerModal,
    AddList,
    LoadingModal,
    FlashMsg,
  },
  methods: {
    handleLoading(msg = false) {
      this.openDrawer = !this.openDrawer
      if (msg && msg.length > 0) {
        this.loadingText = msg;
        this.showLoading = true;
      } else {
        this.showLoading = false;
      }
      goToTop()
    },
    handleAlert(event) {
      if(event.status) {
        this.flashMsg = "List was successfully saved 😃"
        this.showFlash = true
      }else{
        this.flashType = "alert-error"
        this.flashMsg = `There was a problem 😭\nERROR MESSAGE IS 👇\n${event.msg}`
        this.showFlash = true
      }
      setTimeout(() => (this.showFlash = false), 4000);
    },
  },
  mounted() {},
};
</script>
<template>
  <main class="my-6 flex justify-center items-center flex-col">
    <flash-msg v-if="showFlash" :text="flashMsg" :type="flashType"></flash-msg>
    <loading-modal :show="showLoading" :text="loadingText"></loading-modal>
    <spinner-modal :show="showSpinner"></spinner-modal>
    <label for="add-list-drawer" class="btn btn-primary drawer-button lg:hidden"
      >ADD LIST</label
    >

    <add-list
      :open-drawer="openDrawer"
      @showAlert="(e)=>handleAlert(e)"
      @showLoading="(e) => handleLoading(e)"
      @stopLoading="handleLoading"
    ></add-list>
  </main>
</template>
