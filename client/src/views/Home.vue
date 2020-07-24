<template>
  <div class="container home">
    <div class="col-sm-4"></div>
    <Login />
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
