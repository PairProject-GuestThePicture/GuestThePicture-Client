<template>
<div class="container">
  <h1 class="room">ROOMS' LIST</h1>
  <RoomsList class="room"/>
  <CreateRoom />
</div>
</template>

<script>
import RoomsList from '../components/RoomsList.vue'
import CreateRoom from '../components/CreateRoom.vue'
export default {
  name: 'Loby',
  components: {
    RoomsList,
    CreateRoom
  }
}
</script>

<style scoped>
  .container{
    display: flex;
    flex-direction: column;
  }
  .room{
    margin:10px;
  }
</style>
