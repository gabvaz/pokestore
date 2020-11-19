<template>
    <div>
        <input class="search p-2 rounded" v-model="query" placeholder="Qual pokemon vamos capturar?" @keyup="$store.dispatch('req/SEARCH', query)">
    </div>
</template>

<script>
export default {
    data(){
        return{
            query: ''
        }
    }
}
</script>

<style scoped>
.search{
    width: 20rem;
}
</style>