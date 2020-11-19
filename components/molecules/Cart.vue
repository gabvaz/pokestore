<template>
  <div>
    <p class="font-bold text-xl">Items no carrinho</p>
    <p v-if="cartItems.length < 1">Seu carrinho está vazio :(</p>
    <div v-else>
      <CartItem
        v-for="item in cartItems"
        :key="item.base_experience * Math.random()"
        :item="item"
      />
      <div v-show="totalCredit > 0">
          <input type="checkbox" v-model="checked" />
      <label for="checkbox">Usar saldo</label>
      </div>
      <div v-if="checked">Subtotal: {{ credit }}</div>
      <div v-else >Subtotal: {{ cartAmount }}</div>
      <button
        @click="
          $store.dispatch('req/BUY', { amount: cartAmount, credit: checked })
        "
      >
        Comprar
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
      return{
          checked: false
      }
  },
  computed: {
    credit(){
        var aux = this.$store.getters["req/credit"];
        if((this.cartAmount - aux) < 0){
            return 0;
        }else{
            return this.cartAmount - aux;
        }
    },
    totalCredit(){
        return this.$store.getters["req/credit"];
    },
    cartItems() {
      return this.$store.getters["req/cartItems"];
    },
    cartAmount() {
      var total = 0;
      const el = this.$store.getters["req/cartItems"];
      for (let i = 0; i < el.length; i++) {
        total = total + el[i].quantity * el[i].base_experience;
      }
      return total;
    },
  },
};
</script>