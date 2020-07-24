<template>
<<<<<<< HEAD
  <div class="answer">
    <ul id="messages"></ul>
    <form action="">
      <input type="text" v-model="message" autocomplete="off" placeholder="Type Message Here ..."/><button>Send</button>
=======
  <div class="card">
    <ul id='messages'></ul>
    <form>
      <input v-model='guessDrawing' autocomplete='off' />
      <button type='submit' @click.prevent='inputAnswer' class='btn btn-primary'>Send</button>
>>>>>>> Development
    </form>
  </div>
</template>

<script>
<<<<<<< HEAD

export default {

=======
export default {
  name: 'Answer',
  data () {
    return {
    }
  },
  methods: {
    inputAnswer () {
    }
  }
>>>>>>> Development
}
</script>

<style>
<<<<<<< HEAD

=======
.container {

}
form input {
  border: 10;
  padding: 10px;
  margin-right: 0.5%;
}
#messages {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
#messages li {
  padding: 5px 10px;
}
#messages li:nth-child(odd) {
  background: #eee;
}
>>>>>>> Development
</style>
