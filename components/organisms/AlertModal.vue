<template>
<div class="absolute">
    <div v-if="hasBuy || noCashback" class="modalBackdrop" @click="$store.dispatch('req/CLOSEALERT')"></div>
    <transition name="show-modal">
        <div v-if="hasBuy" class="modal text-center">
          {{noCashback}}
            <p>OBRIGADO PELA SUA COMPRA</p>
            <div>Você recebeu <span class="bg-green-400">R${{ hasBuy }}</span> de volta!!</div>
        </div>
        <div v-if="noCashback" class="modal text-center">
            <p>OBRIGADO PELA SUA COMPRA</p>
            <p>Como você usou o saldo da sua carteira, essa compra não gerou um cashback :( </p>
        </div>
    </transition>
</div>
</template>
<script>
export default {
  computed: {
    hasBuy() {
      return this.$store.getters["req/lastBuy"];
    },
     noCashback() {
      return this.$store.getters["req/noCashback"];
    }
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