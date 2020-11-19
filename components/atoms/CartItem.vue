<template>
  <div class="cartItem flex items-center justify-between p-4">
    <div class="flex items-center">
      <img :src="item.sprites.front_default" class="w-12"/>
      <div>
        <p>{{ item.name }}</p>
        <div class="flex">
            <span>Quantidade: </span>
            <button class="bg-red-800" @click="$store.dispatch('req/UPDATECART',{item: item, inc: -1})">Dec</button>
            <span>{{item.quantity}}</span>
            <button class="bg-green-800" @click="$store.dispatch('req/UPDATECART',{item: item, inc: 1})">Add</button>
        </div>
      </div>
    </div>
    <div>
        <p>R${{item.base_experience * item.quantity}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.cartItem{
    background: #c4c4c4;
}
.cartItem:nth-child(odd){
    background: #e1e1e1;
}
input{
    max-width: 3rem;
}
</style>