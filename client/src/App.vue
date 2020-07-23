<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import io from 'socket.io-client'
export default {
  name: 'App',
  data () {
    return {
    }
  },
  mounted () {
    this.socket = io.connect('http://localhost:3000')
    // received event from server
    this.socket.on('init', function (payload) {
      console.log(payload)
    })
  },
  methods: {
    send () {
      this.socket.emit('send-message', { content: this.content })
    }
  }
}
</script>

<style>
</style>
