<template>
  <div class="text-center">
    <span class="absolute top-0 left-0 p-2">#{{ id }}</span>
    <p class="capitalize text-sm">{{ name }}</p>
    <p class="text-md font-bold">R${{ price }},00</p>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
};
</script>