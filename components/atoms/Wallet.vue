<template>
    <div class="text-white">
        CARTEIRA: <span class="font-bold">R${{credit}}</span>
    </div>
</template>

<script>
export default {
    computed: {
        credit(){
            return this.$store.getters['req/credit'];
        }
    }
}
</script>