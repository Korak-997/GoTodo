<script>
import SpinnerModal from "../components/SpinnerModal.vue";
import AddList from "../components/AddList.vue";
import LoadingModal from "../components/LoadingModal.vue";
import FlashMsg from "../components/FlashMsg.vue";
import ListBox from "../components/ListBox.vue";
import AlertMsg from "../components/AlertMsg.vue";
import { goToTop } from "../helpers/methods";
import { allLists, deleteList } from "../helpers/db";
export default {
  data() {
    return {
      showSpinner: false,
      showLoading: false,
      loadingText: "",
      flashType: "alert-success",
      flashMsg: "",
      showFlash: false,
      showAddList: false,
      datas: false,
      showAlert: false,
      alertText: "",
    };
  },
  components: {
    SpinnerModal,
    AddList,
    LoadingModal,
    FlashMsg,
    ListBox,
    AlertMsg,
  },
  methods: {
    async remove() {
      this.showAlert = false;
      const res = await deleteList(this.listToDelete.id);
      if (res.status) {
        this.flashMsg = `Your list successfully deleted`;
        this.flashType = "alert-success";
        this.showFlash = true;
      } else {
        this.flashType = "alert-error";
        this.flashMsg = `There was a problem 😭\nERROR MESSAGE IS 👇\n${res.msg}`;
        this.showFlash = true;
      }
      setTimeout(() => (this.showFlashMsg = false), 3000);
    },
    removeList(list) {
      this.listToDelete = list;
      this.alertText = "You really want to delete the list ?";
      this.showAlert = true;
    },
    handleLoading(msg = false) {
      this.openDrawer = !this.openDrawer;
      if (msg && msg.length > 0) {
        this.loadingText = msg;
        this.showLoading = true;
      } else {
        this.showLoading = false;
      }
      goToTop();
    },
    handleFlash(event) {
      if (event.status) {
        this.flashMsg = "List was successfully saved 😃";
        this.showFlash = true;
      } else {
        this.flashType = "alert-error";
        this.flashMsg = `There was a problem 😭\nERROR MESSAGE IS 👇\n${event.msg}`;
        this.showFlash = true;
      }
      setTimeout(() => (this.showFlash = false), 4000);
    },
    async getDatas() {
      this.showSpinner = true;
      const res = await allLists();
      if (!res.status) {
        this.flashType = "alert-error";
        this.flashMsg = `There was a problem 😭\nERROR MESSAGE IS 👇\n${event.msg}`;
        this.showFlash = true;
        this.showSpinner = false;
        setTimeout(() => (this.showFlash = false), 4000);
      } else {
        this.datas = res.data;
        this.showSpinner = false;
      }
    },
  },
  mounted() {
    this.getDatas();
  },
};
</script>
<template>
  <main class="my-6 flex justify-center items-center flex-col">
    <edit-list
      :show="showEditList"
      @close="() => (showEditList = false)"
      @showAlert="(e) => handleFlash(e)"
      @showLoading="(e) => handleLoading(e)"
      @stopLoading="handleLoading"
      :list="listTodEdit"
    ></edit-list>
    <alert-msg
      @deny="() => (showAlert = false)"
      @accept="remove"
      v-show="showAlert"
      :text="alertText"
    ></alert-msg>
    <flash-msg v-if="showFlash" :text="flashMsg" :type="flashType"></flash-msg>
    <loading-modal :show="showLoading" :text="loadingText"></loading-modal>
    <spinner-modal :show="showSpinner"></spinner-modal>
    <button @click="() => (showAddList = true)" class="btn btn-accent">
      ADD LIST
    </button>
    <add-list
      :show="showAddList"
      @close="() => (showAddList = false)"
      @showAlert="(e) => handleFlash(e)"
      @showLoading="(e) => handleLoading(e)"
      @stopLoading="handleLoading"
    ></add-list>
    <div
      v-if="datas"
      class="flex flex-row flex-wrap justify-around items-start text-center"
    >
      <div
        v-for="list in datas"
        :key="list.id"
        class="list card card-compact w-50 bg-base-100 shadow-6xl m-6 p-4"
        :style="{ backgroundColor: list.settings.color }"
      >
        <list-box @delete="() => removeList(list)" :list="list"></list-box>
      </div>
    </div>
  </main>
</template>
