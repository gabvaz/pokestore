<template>
    <div v-if="$fetchState.pending">
        Carregando
    </div>
    <div class="flex flex-wrap" v-else>
        <Product v-for="pokeElement in pokeList.pokemon" :key="pokeElement.pokemon.name" :url="pokeElement.pokemon.url"/>
    </div>
</template>

<script>
export default {
    data(){
        return{
            pokeList: []
        }
    },
    async fetch() {
      this.pokeList = await fetch(
        'https://pokeapi.co/api/v2/type/fire'
      ).then(res => res.json())
    },
    fetchOnServer: false
}
</script>