<template>
  <div class="login">
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Username</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  v-model='username'>
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="button-all">
        <button type="submit" @click.prevent='submitLogin'>LOGIN</button>
      </div>
    </form>
  </div>
</template>

<script>
import io from 'socket.io-client'
const socket = io('http://localhost:3000/')

export default {
  name: 'Login',
  data () {
    return {
      username: ''
    }
  },
  methods: {
    submitLogin () {
      this.$store.dispatch('moveToLobby')
      localStorage.setItem('username', this.username)
      socket.emit('clientLogin', this.username)
    }
  }
}
</script>

<style>
button {
  border:0px;
  background-color: transparent;
  color: white;
}
</style>
