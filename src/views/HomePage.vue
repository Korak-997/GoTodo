<script>
import SpinnerModal from "../components/SpinnerModal.vue";
import AddList from "../components/AddList.vue";
import LoadingModal from "../components/LoadingModal.vue";
import FlashMsg from "../components/FlashMsg.vue";
import { goToTop } from "../helpers/methods";
import { allLists } from "../helpers/db";
export default {
  data() {
    return {
      showSpinner: false,
      showLoading: false,
      loadingText: "",
      flashType: "alert-success",
      flashMsg: "",
      showFlash: false,
      openDrawer: false,
      datas: false,
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
      this.openDrawer = !this.openDrawer;
      if (msg && msg.length > 0) {
        this.loadingText = msg;
        this.showLoading = true;
      } else {
        this.showLoading = false;
      }
      goToTop();
    },
    handleAlert(event) {
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
    <flash-msg v-if="showFlash" :text="flashMsg" :type="flashType"></flash-msg>
    <loading-modal :show="showLoading" :text="loadingText"></loading-modal>
    <spinner-modal :show="showSpinner"></spinner-modal>
    <label for="add-list-drawer" class="btn btn-primary drawer-button lg:hidden"
      >ADD LIST</label
    >
    <add-list
      :open-drawer="openDrawer"
      @showAlert="(e) => handleAlert(e)"
      @showLoading="(e) => handleLoading(e)"
      @stopLoading="handleLoading"
    ></add-list>
    <div
      v-if="datas"
      class="shadow-2xl flex flex-row flex-wrap justify-around items-start text-center"
    >
      <div
        v-for="list in datas"
        :key="list.id"
        class="list card card-compact w-50 bg-base-100 shadow-xl"
        :style="{ backgroundColor: list.settings.color }"
      >
        <h3 class="text-xl">{{ list.title }}</h3>
        <div v-if="list.tag" class="badge badge-secondary">
          {{ list.tag.toUpperCase() }}
        </div>
        <div class="card-body">
          <div
            v-if="list.todos"
            class="flex justify-around items-center flex-col"
          >
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
      </div>
    </div>
  </main>
</template>
