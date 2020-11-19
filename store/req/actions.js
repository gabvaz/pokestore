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
    const pos = cart.map(function (e) { return e.name; }).indexOf(payload.name);
    if (pos > -1) {
      cart[pos].quantity++;
    } else {
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
    if (this.$auth.$storage.getLocalStorage("Cart")) {
      cart = this.$auth.$storage.getLocalStorage("Cart");
    } else {
      this.$auth.$storage.setLocalStorage(
        "Cart",
        cart
      );
    }
    commit("ADD_CART", cart);
  },
  async UPDATECART({ commit }, { item, inc }) {
    const cart = this.$auth.$storage.getLocalStorage("Cart");
    const pos = cart.map(function (e) { return e.name; }).indexOf(item.name);
    cart[pos].quantity += inc;
    if (cart[pos].quantity < 1) {
      cart.splice(pos, 1);
    }
    this.$auth.$storage.setLocalStorage(
      "Cart",
      cart
    );
    commit("ADD_CART", cart);
  },
  async BUY({ commit }, { amount, credit }) {
    var totalCredit;
    var actualCredit = this.$auth.$storage.getLocalStorage('Credit');
    var cart = []
    if (credit && actualCredit > 0) {
      totalCredit = actualCredit - amount > 0 ? actualCredit - amount : 0;
      this.$auth.$storage.setLocalStorage(
        "Credit",
        totalCredit
      )
      commit("UPDATE_CREDIT", totalCredit);
      commit("NOCASH", true);
    }
    else {
      var cashback = (amount * 0.1);
      totalCredit = cashback;
      totalCredit += this.$auth.$storage.getLocalStorage('Credit');
      this.$auth.$storage.setLocalStorage(
        "Credit",
        totalCredit
      )
      commit("UPDATE_CREDIT", totalCredit);
      commit("BUY_ALERT", cashback);
    }
    this.$auth.$storage.setLocalStorage(
      "Cart",
      cart
    );
    commit("ADD_CART", cart);
  },
  async CLOSEALERT({ commit }) {
    commit("CLOSE_ALERT", false);
  },
  async UPDATECREDIT({ commit }) {
    if (this.$auth.$storage.getLocalStorage('Credit')) {
      commit("UPDATE_CREDIT", this.$auth.$storage.getLocalStorage('Credit'));
    } else {
      this.$auth.$storage.setLocalStorage(
        "Credit",
        0
      )
      commit("UPDATE_CREDIT", this.$auth.$storage.getLocalStorage('Credit'));
    }
  }
};
