<template>
  <div class="container-fluid">
       <div class="col-3" v-bind:socket="socket"  v-for="(room, id) in listRooms" :key="id">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h2 class="card-title">{{room.title}}</h2>
            <h3 class="card-text">{{room.description}}</h3>
            <a href="#" class="btn btn-primary" @click.prevent="join(room.title)">Join</a>
          </div>
        </div>
      </div>
   </div>
</template>

<script>
import socket from '@/config/socket.js'

export default {
  name: 'RoomsList',
  data () {
    return {
      message: '',
      listRooms: []
    }
  },
  methods: {
    join (room) {
      console.log('ini join title', room)
      socket.emit('joinRoom', room)
    }
    // fetchData () {
    //   socket.on('roomsFromServer', (rooms) => {
    //     this.listRooms = rooms
    //     console.log(rooms)
    //   })
    // }
  },
  mounted () {
    socket.emit('roomsFromServer')
    socket.on('roomsFromServer', (rooms) => {
      this.listRooms = rooms
      console.log(rooms)
    })
    socket.on('responseJoin', (rooms) => {
      this.$router.push('/room')
    })
  },
  created () {
    // this.$store.dispatch('fetchRooms')
  },
  computed: {
    // rooms () {
    //   return this.$store.state.rooms
    // }
  }
}
</script>

<style scoped>
  .container-fluid{
    display: flex;
    flex-direction: row;
  }
  .card{
    background-color:#b7efcd;
    padding:10px;
  }
  a{
    font-size:15px;
  }
  .col-3{
    margin: 30px;
  }
</style>
