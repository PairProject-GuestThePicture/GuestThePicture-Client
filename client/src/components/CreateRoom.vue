<template>
<div>
  <button @click.prevent="showModal" data-toggle="modal" data-target="#exampleModal">Create Room</button>
  <!-- Button trigger modal -->

<!-- Modal -->
<div v-bind:class="{modal: true, fade: true, in: isModalOpen}" v-bind:style="{display: display}" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title" id="exampleModalLabel">Rooms' Name</h2>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click.prevent="close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div>
          <label for="title"></label>
          <input type="text" id="title" v-model="title" placeholder="title">
        </div>
        <div>
          <label for="description"></label>
          <input type="text" id="description" v-model="description" placeholder="description">
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal" @click.prevent="close">Close</button>
        <button type="button" class="btn btn-primary" @click.prevent="save">Save</button>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>

export default {
  name: 'CreateRoom',
  data () {
    return {
      title: '',
      description: '',
      isModalOpen: false,
      display: 'none'
    }
  },
  methods: {
    showModal () {
      this.isModalOpen = true
      this.display = 'block'
    },
    close () {
      this.isModalOpen = false
      this.display = 'none'
    },
    save () {
    }
  }
}
</script>

<style scoped>
  button{
    width:100px;
  }
  input{
    width: 300px;
    margin:20px;
    height: 30px;
  }
</style>
