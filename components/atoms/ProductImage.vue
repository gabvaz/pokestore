<template>
  <div class="pokePic relative w-24 h-24">
      <img :src="imageUrl" class="w-full object-contain">
  </div>
</template>
<script>
export default {
  props: {
    imageUrl: {
      type: String,
      required: true,
    },
  },
};
</script>
<style scoped>
.pokePic:after {
  content: "";
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: #ffb9be;
  z-index: -1;
  border-radius: 100%;
}
</style>