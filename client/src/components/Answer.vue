<template>
  <div class="card">
    <ul id='messages'></ul>
    <form>
      <input v-model='guessDrawing' autocomplete='off' />
      <button type='submit' @click.prevent='inputAnswer' class='btn btn-primary'>Send</button>
    </form>
  </div>
</template>

<script>
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
}
</script>

<style>
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
</style>
