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
    }
}