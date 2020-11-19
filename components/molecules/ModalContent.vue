<template>
  <div
    class="modalContent bg-white p-4 fixed inset-x-0 m-auto -translate-y-1/2 z-50"
  >
    {{ pokeInfo.name }}
    {{ pokeInfo.base_experience }}
    <button class="bg-green-800 p-2" @click="$store.dispatch('req/ADDCART', pokeInfo)">Comprar</button>
  </div>
</template>

<script>
export default {
  props: {
    pokeInfo: {
      type: Object,
      required: true,
    },
  }
};
</script>