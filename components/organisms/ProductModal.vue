<template>
  <div class="absolute">
    <div v-if="hasSelected " class="modalBackdrop" @click="$store.dispatch('req/SELECTREMOVE')"></div>
    <transition name="show-modal">
      <ModalContent :pokeInfo="hasSelected" class="modal" v-if="hasSelected"/>
    </transition>
</div>
</template>
<script>
export default {
  computed: {
    hasSelected() {
      return this.$store.getters["req/pokeSelected"];
    },
  },
};
</script>

<style scoped>
.modal {
  height: auto;
  width: 500px;
  background-color: white;
  z-index: 1000;
  position: fixed;
  box-sizing: border-box;
  padding: 30px;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 0.5rem;
  box-shadow: 0 0 1.8rem rgba(0, 0, 0, 0.15);
}
.modalBackdrop {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
}
.show-modal-enter-active,
.show-modal-leave-active {
  transition: all 0.3s ease-out;
}
.show-modal-enter,
.show-modal-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>