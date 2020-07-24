import Vue from 'vue'
import Vuex from 'vuex'

import socket from '@/config/socket.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rooms: null,
    username: ''
  },
  mutations: {
    FETCH_ROOMS (state, payload) {
      state.rooms = payload
    },
    SET_USERNAME (state, payload) {
      state.username = payload
    }
  },
  actions: {
    fetchRooms ({ commit }) {
      socket.emit('roomsFromServer')
    }
  },
  modules: {
  }
})
