<template>
  <div
    class="singleProduct w-2/12"
    @click="$store.dispatch('req/SELECTPOKE', pokemon)"
  >
    <div
      v-if="!$fetchState.pending"
      class="relative flex flex-col items-center bg-red-400 p-8 m-4 rounded shadow z-50"
    >
      <ProductImage :imageUrl="pokemon.sprites.front_default" />
      <ProdContent
        :name="pokemon.name"
        :id="pokemon.id"
        :price="pokemon.base_experience"
      />
      <AddToCart />
    </div>
    <div v-else>carregando</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pokemon: [],
    };
  },
  props: {
    url: {
      type: String,
      required: true,
    },
  },
  async fetch() {
    this.pokemon = await fetch(this.url).then((res) => res.json());
  },
  fetchOnServer: false,
};
</script>