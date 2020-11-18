<template>
  <div v-if="$fetchState.pending">Carregando</div>
  <div v-else>
    <div>
      <button @click="pokeList.pokemon = alphaOrder">Alphabetic</button>
      <button @click="pokeList.pokemon = [...copiaLista]">Id</button>
    </div>
    <div class="flex flex-wrap">
      <Product
        v-for="pokeElement in pokeList.pokemon"
        :key="pokeElement.pokemon.name"
        :url="pokeElement.pokemon.url"
        v-show="pokeElement.pokemon.name.includes(searchQuery)"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pokeList: [],
      copiaLista: [],
    };
  },
  computed: {
    alphaOrder() {
      function compare(a, b) {
        if (a.pokemon.name < b.pokemon.name) return -1;
        if (a.pokemon.name > b.pokemon.name) return 1;
        return 0;
      }
      return this.pokeList.pokemon.sort(compare);
    },
    searchQuery() {
      return this.$store.getters["req/searchQuery"];
    },
  },
  async fetch() {
    this.pokeList = await fetch(
      "https://pokeapi.co/api/v2/type/fire"
    ).then((res) => res.json());
    this.copiaLista = [...this.pokeList.pokemon];
  },
  fetchOnServer: false,
};
</script>