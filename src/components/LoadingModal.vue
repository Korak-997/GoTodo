

<script>
export default {
  name: "LoadingModal",
  props:{
    show: Boolean,
    text: String
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<template>
  <div class="modal text-center" :class="{'modal-open': show}">
    <div class="modal-box">
      <h1 class="font-bold text-lg">{{text}}</h1>
      <progress class="progress progress-secondary w-96"></progress>
    </div>
  </div>
</template>
