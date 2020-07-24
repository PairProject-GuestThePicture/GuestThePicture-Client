<template>
  <div>
      <div class="container">
          <div class="row">
              <div class="col-sm-4" style="height: 800px; background-color:red;">
                  List User
              </div>
              <div class="col-sm-8">
                  <div class="row" style="height: 600px; background-color:blue;">
                      <Canvas />
                  </div>
                  <div class="row">
                      <div class="col-sm-6" style="height: 200px">
                          <!-- <Answer /> -->
                      </div>
                      <div class="col-sm-6" style="height: 200px; background-color:yellow;">
                          Chattingan
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import Canvas from '@/components/Canvas.vue'

export default {
  name: 'Gameroom',
  components: {
    Canvas
  }
}
</script>

<style>

</style>
