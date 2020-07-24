<template>
  <div class="login col-sm-4">

    <form v-on:submit.prevent="createUser">
      <div class="form-group">

        <label for="exampleInputEmail1" >Username</label>
        <input style="text-align:center; " v-model="username" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required>
      </div>
      <div class="button-all">
        <button type="submit" class="btn btn-primary">LOGIN</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: ''
    }
  },
  methods: {
    createUser () {
      this.$store.commit('SET_USERNAME', this.username)
      this.$router.push('/loby')
    }
  },
  computed: {
    getUsername () {
      return this.$store.state.username
    }
  },
  created () {
    this.username = this.getUsername
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
