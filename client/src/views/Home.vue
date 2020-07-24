<template>
  <div class="container home">
    <h3>{{ title }}</h3>
    <div class="col-md-3"></div>
    <div class="col-md-6">
      <Login />
      <div class="button-all mt-4">
        <a href="" class="" style="color:white">Rooms</a>
      </div>
    </div>
  </div>
</template>

<script>
import Login from '../components/Login'

export default {
  name: 'Home',
  data () {
    return {
      title: 'LOGIN'
    }
  },
  components: {
    Login
  }
}

</script>

<style>
.home {
  background-color: slategray;
}
/* .button-all {
    background-color: rgb(255, 255, 255);
    border: 2px solid blue;
    color: blue;
    border-radius: 10px;
    padding-top: 15px;
    padding-bottom: 15px;
}

.button-all:hover {
    background-color: blue;
    border-radius: 10px;
    padding-top: 15px;
    padding-bottom: 15px;
}

a:hover{
    text-decoration: unset;
} */
</style>
