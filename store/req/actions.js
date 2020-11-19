export default {
  async SELECTPOKE({ commit }, pokemon) {
    commit("SET_POKEMON", pokemon);
  },
  async SELECTREMOVE({ commit }) {
    commit("REMOVE_POKEMON");
  },
  async SEARCH({ commit }, payload) {
    commit("SEARCH_POKEMON", payload);
  },
  async ADDCART({ commit }, payload) {
    const cart = this.$auth.$storage.getLocalStorage("Cart");
    const pos = cart.map(function(e) { return e.name; }).indexOf(payload.name);
    if(pos>-1){
      cart[pos].quantity++;
    }else{
      payload.quantity = 1;
      cart.push(payload);
    }
    this.$auth.$storage.setLocalStorage(
      "Cart",
      cart
    );
    commit("ADD_CART", cart);
  },
  async GETCART({ commit }) {
    var cart = [];
    if(this.$auth.$storage.getLocalStorage("Cart")){
      cart = this.$auth.$storage.getLocalStorage("Cart");
    }else{
      this.$auth.$storage.setLocalStorage(
        "Cart",
        cart
      );
    }
    commit("ADD_CART", cart);
  },
  async UPDATECART({ commit }, {item,inc}) {
    const cart = this.$auth.$storage.getLocalStorage("Cart");
    const pos = cart.map(function(e) { return e.name; }).indexOf(item.name);
    cart[pos].quantity+=inc;
    if(cart[pos].quantity < 1){
      cart.splice(pos, 1);
    }
    this.$auth.$storage.setLocalStorage(
      "Cart",
      cart
    );
    commit("ADD_CART", cart);
  }
};
