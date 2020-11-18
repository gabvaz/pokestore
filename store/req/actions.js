export default {
  async SELECTPOKE({ commit }, pokemon ) {
    commit("SET_POKEMON", pokemon);
  },
  async SELECTREMOVE({ commit } ) {
    commit("REMOVE_POKEMON");
  },
  async SEARCH({ commit }, payload ) {
    commit("SEARCH_POKEMON", payload);
  }
};
