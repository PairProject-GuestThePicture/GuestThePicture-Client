<template>
<div>
   <div class="container-fluid" v-for="(room, id) in listRooms" :key="id">
      <div class="col-3">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h2 class="card-title">{{room.title}}</h2>
            <h3 class="card-text">{{room.description}}</h3>
            <a href="#" class="btn btn-primary" @click.prevent="join(room.title)">Join</a>
          </div>
        </div>
      </div>
   </div>
</div>
</template>

<script>
import io from 'socket.io-client'
const socket = io('http://localhost:3000/')
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
      socket.emit('joinRoom', room)
    }
  },
  created () {
    // this.$store.dispatch('fetchRooms')
    socket.on('roomsFromServer', function (rooms) {
    // console.log(rooms)
      this.rooms = rooms
      console.log(this.rooms)
    })
  },
  computed: {
    // rooms () {
    //   return this.$store.state.rooms
    // }
  }
// mounted () {
  // socket.on('roomsFromServer', function (rooms) {
  //   // console.log(rooms)
  //   this.rooms = rooms
  //   console.log(this.rooms)
  // })
//   socket.on('fullMember', function (message) {
//     this.message = message
//   })
// }
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
