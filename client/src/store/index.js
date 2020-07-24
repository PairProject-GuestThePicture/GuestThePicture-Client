import Vue from 'vue'
import Vuex from 'vuex'
import io from 'socket.io-client'
const socket = io('http://localhost:3000/')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rooms: null
  },
  mutations: {
    FETCH_ROOMS (state, payload) {
      state.rooms = payload
    }
  },
  actions: {
    fetchRooms ({ commit }) {
      socket.on('roomsFromServer', function (rooms) {
        commit('FETCH_ROOMS', rooms)
      })
    }
  },
  modules: {
  }
})
