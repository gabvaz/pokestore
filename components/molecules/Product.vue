<template>
  <div
    v-if="!$fetchState.pending"
    class="singleProduct flex flex-col bg-red-400 p-4 m-4 rounded shadow z-50"
  >
    <ProductImage :imageUrl="pokemon.sprites.front_default" />
    {{ pokemon.name }}
    <AddToCart />
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