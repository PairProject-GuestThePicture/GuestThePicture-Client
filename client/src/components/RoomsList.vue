<template>
   <div class="container-fluid">
    <div class="col-3">
      <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h2 class="card-title">Fiah Room</h2>
            <h3 class="card-text">Everthing</h3>
            <a href="#" class="btn btn-primary">Join</a>
          </div>
      </div>
    </div>
    <div class="col-3">
      <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h2 class="card-title">Fiah Room</h2>
            <h3 class="card-text">All about animals</h3>
            <a href="#" class="btn btn-primary">Join</a>
          </div>
      </div>
    </div>
       <div class="col-3">
      <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h2 class="card-title">Fiah Room</h2>
            <h3 class="card-text">All about human</h3>
            <a href="#" class="btn btn-primary">Join</a>
          </div>
      </div>
    </div>
 </div>

</template>

<script>
export default {
  name: 'RoomsList'
}
</script>

<style scoped>
  .container-fluid{
    display: flex;
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
