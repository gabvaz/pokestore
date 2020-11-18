<template>
    <div class="modalContent bg-white p-4 fixed inset-x-0 m-auto -translate-y-1/2 z-50">
        {{pokeInfo.name}}
    </div>
</template>

<script>
export default {
    props:{
        pokeInfo: {
            type: Object,
            required: true
        }
    }
}
</script>