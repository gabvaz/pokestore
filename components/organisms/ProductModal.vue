<template>
<div class="modal" v-if="hasSelected">
      <div class="modalBg fixed h-screen w-full bg-black bg-opacity-75 top-0 z-50" @click="$store.dispatch('req/SELECTREMOVE')"></div>
      <ModalContent :pokeInfo="hasSelected" />
</div>
</template>
<script>
export default {
    computed:{
        hasSelected(){
            return this.$store.getters['req/pokeSelected']
        }
    }
}
</script>

<style scoped>
.modalContent{
    top: 50%;
    width: 60vh;
}
</style>