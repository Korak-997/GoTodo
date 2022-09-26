<script>
export default {
  name: "FlashMsg",
  props: {
    text: String,
    type: String,
  },
};
</script>
<template>
  <div class="alert shadow-lg my-4" :class="type">
    <div>
      <h3>{{ text }}</h3>
    </div>
  </div>
</template>
