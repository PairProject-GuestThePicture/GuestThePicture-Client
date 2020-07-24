<template>
  <div class="chat">
    <ul id="messages"></ul>
    <form action="">
      <input type="text" v-model="message" autocomplete="off" placeholder="Type Message Here ..."/><button>Send</button>
    </form>
  </div>
</template>

<script>
import socket from '@/config/socket.js'

export default {
  name: 'Chat',
  data () {
    return {}
  }, 
  mounted () {
    socket = io.connect('http://localhost:3000')

    socket.on('init', function () {
      console.log('Init invoked')
    })

   
  }
}
</script>

<style>

</style>