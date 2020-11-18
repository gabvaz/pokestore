<template>
    <div>
        <input v-model="query" placeholder="Qual pokemon vamos capturar?" @keyup="$store.dispatch('req/SEARCH', query)">
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