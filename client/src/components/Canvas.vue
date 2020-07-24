<template>
  <div style>
    <div>
      <h3>Tool</h3>
      <h4>Change Brush Color</h4>
      <button @click='strokeRed'>RED</button>
      <button @click='strokeGreen'>GREEN</button>
      <button @click='strokeBlue'>BLUE</button>
      <button @click='strokeBlack'>BLACK</button>
      <h4>Change Background Color</h4>
      <button @click='backgroundRed'>RED</button>
      <button @click='backgroundGreen'>GREEN</button>
      <button @click='backgroundBlue'>BLUE</button>
      <button @click='backgroundWhite'>WHITE</button>
      <button @click='backgroundBlack'>BLACK</button>
      <button @click='clearCanvas'>CLEAR</button>
    </div>
    <div>
      <canvas
        id='my-canvas'
        @mousedown='startDraw'
        @mouseup='stopDraw'
        @mousemove='draw'
        width='500px'
        height='500px'
        v-bind:style="{backgroundColor: color}"
      />
    </div>
  </div>
</template>

<script>
import socket from '@/config/socket.js'

export default {
  name: 'Canvas',
  data () {
    return {
      drawing: false,
      canvas: null,
      ctx: null,
      x: 0,
      y: 0,
      color: 'white'
    }
  },
  methods: {
    startDraw (e) {
      this.x = e.offsetX
      this.y = e.offsetY
      this.drawing = true
    },
    stopDraw (e) {
      if (this.drawing) {
        this.drawLine(this.x, this.y, e.offsetX, e.offsetY)
        this.x = 0
        this.y = 0
        this.drawing = false
        socket.emit('draw', this.canvas.toDataURL())
      }
    },
    drawLine (x1, y1, x2, y2) {
      this.ctx.beginPath()
      this.ctx.lineWidth = 5
      this.ctx.moveTo(x1, y1)
      this.ctx.lineTo(x2, y2)
      this.ctx.stroke()
      this.ctx.closePath()
    },
    draw (e) {
      if (this.drawing) {
        this.drawLine(this.x, this.y, e.offsetX, e.offsetY)
        this.x = e.offsetX
        this.y = e.offsetY
      }
    },
    clearCanvas () {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    },
    strokeRed () {
      this.ctx.strokeStyle = 'red'
    },
    strokeGreen () {
      this.ctx.strokeStyle = 'green'
    },
    strokeBlue () {
      this.ctx.strokeStyle = 'blue'
    },
    strokeBlack () {
      this.ctx.strokeStyle = 'black'
    },
    backgroundRed () {
      this.color = 'red'
    },
    backgroundGreen () {
      this.color = 'green'
    },
    backgroundBlue () {
      this.color = 'blue'
    },
    backgroundWhite () {
      this.color = 'white'
    },
    backgroundBlack () {
      this.color = 'black'
    },
    loadCanvas (dataURL) {
      if (dataURL) {
        var imageObj = new Image()
        imageObj.onload = () => {
          this.ctx.drawImage(imageObj, 0, 0)
        }
        imageObj.src = dataURL
      }
    }
  },
  mounted () {
    this.canvas = document.getElementById('my-canvas')
    this.ctx = this.canvas.getContext('2d')
    // this.canvas.height = window.innerHeight
    // this.canvas.width = window.innerWidth
    
    
    // socket.on('connection', () => {
    //   console.log(socket.connected)
    // })

    // socket.on('disconnect', () => {
    //   console.log(socket.connected)
    // })

    socket.on('draw', payload => {
      console.log(payload)
      this.loadCanvas(payload)
    })
  }
}
</script>

<style scoped>
#my-canvas {
  border: 3px solid black;
  margin: 0;
  padding: 0;
}
</style>
