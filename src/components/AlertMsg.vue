<script>
export default {
  name: "AlertMsg",
  props: {
    text: String,
  },
};
</script>
<template>
  <div class="alert shadow-lg">
    <div>
      <h3>{{ text }}</h3>
    </div>
    <div class="flex-none">
      <button @click="$emit('deny')" class="btn btn-sm btn-ghost">Deny</button>
      <button @click="$emit('accept')" class="btn btn-sm btn-primary">Accept</button>
    </div>
  </div>
</template>
