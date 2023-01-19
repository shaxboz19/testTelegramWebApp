export const state = () => ({
  client: null,
  variables: null
})

export const mutations = {
  setClient (state, data) {
    state.client = data
  },
  setVariables (state, data) {
    state.variables = data
  }
}
export const actions = {
  async getDetail ({
    commit,
    state
  }, id) {
    try {
      const {
        data
      } = await this.$axios.get('/' + id)
      const {
        client
      } = data
      commit('setClient', client)
      commit('setVariables', data.variables)

      return data
    } catch ({
      message
    }) {
      commit('setError', true, {
        root: true
      })
    }
  },
  async getEvents () {
    try {
      const { data } = await this.$api.get('/event_types', {
        params: {
          organization: 'https://api.calendly.com/organizations/CAHGRGSMGGKFKFH2',
          user: 'https://api.calendly.com/users/FHAEUBTG3USWWA2W'
        }
      })
      return data
    } catch (error) {
      console.log(error)
    }
  }
}

export const getters = {
  getClient (state) {
    return state.client
  },
  getVariables (state) {
    return state.variables
  }
}
