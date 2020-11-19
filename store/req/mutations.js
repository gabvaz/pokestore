export default{
    SET_POKEMON(state, payload) {
        state.pokeSelected = payload
    },
    REMOVE_POKEMON(state) {
        state.pokeSelected = false
    },
    SEARCH_POKEMON(state, payload) {
        state.searchQuery = payload;
    },
    ADD_CART(state, payload) {
        state.cartItems = payload;
        state.pokeSelected = false;
    },
    UPDATE_CREDIT(state, payload) {
        state.credit = payload;
    },
    BUY_ALERT(state, payload) {
        state.lastBuy = payload;
    },
    CLOSE_ALERT(state) {
        state.lastBuy = false;
        state.noCashback = false;
    },
    NOCASH(state, payload) {
        state.noCashback = payload;
    }

}