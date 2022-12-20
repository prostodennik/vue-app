const generates = {
  state: {
    generates: []
  },
  mutations: {
    addName(state, names) {
      state.generates.push(names)
      },
      clearState(state) {
        state.generates = []
      }
    },
  }

export default generates;