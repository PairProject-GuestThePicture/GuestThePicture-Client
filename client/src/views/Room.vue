<template>
  <div>
      <div class="container">
          <div class="row">
              <div class="col-sm-4 bigrectangle" style="height: 500px; ">
              </div>
              <div class="col-sm-8">
                  <div class="row bigrectangle" style="height: 300px; background-color:blue;">
                      <Canvas />

                  </div>
                  <div class="row">
                      <div class="col-sm-6" style="height: 200px; ">
                          <Answer />
                      </div>
                      <div class="col-sm-6" style="height: 200px; ">
                          <Chat />
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import socket from '@/config/socket.js'
import Canvas from '@/components/Canvas.vue'
import Answer from '@/components/Answer.vue'
import Chat from '@/components/Chat.vue'

export default {
  name: 'Gameroom',
  components: {
    Canvas,
    Answer,
    Chat
  },
  mounted () {
    socket.on('roomsFromServer', (rooms) => {
      this.listRooms = rooms
      console.log(rooms)
    })
  }
}
</script>

<style>
.bigrectangle {
  padding: 20px;
}
</style>
