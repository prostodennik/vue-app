const cost = {
  state: {
    cost: []
  },
  mutations: {
    addCost(state, costs) {
      state.cost.push(costs)
      },
      clearState(state) {
        state.cost = []
      }
    },
  }

export default cost;