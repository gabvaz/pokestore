<template>
    <div>
        <p class="font-bold text-xl">Items no carrinho</p>
        <p v-if="cartItems.length < 1">Seu carrinho está vazio :(</p>
        <CartItem v-for="item in cartItems" :key="item.base_experience*Math.random()" :item="item" />
        <div>
            Subtotal: {{cartAmount}}
        </div>
        <button>Comprar</button>
    </div>
</template>

<script>
export default {
 computed:{
     cartItems(){
         return this.$store.getters["req/cartItems"];
     },
     cartAmount(){
         var total = 0;
         const el = this.$store.getters['req/cartItems'];
         for(let i = 0; i < el.length; i++){
             total = total + (el[i].quantity * el[i].base_experience);
         }
         return total;
     }
 }
}
</script>