<template>
  <div style>
    <div>
      <h5></h5>
      <h3 style="color:white">Tool</h3>
      <h4 style="color:white">Change Brush Color</h4>
      <button @click='strokeRed' class="btn btn-primary">RED</button>
      <button @click='strokeGreen' class="btn btn-primary">GREEN</button>
      <button @click='strokeBlue' class="btn btn-primary">BLUE</button>
      <button @click='strokeBlack' class="btn btn-primary">BLACK</button>
      <button @click='eraser' class="btn btn-primary">ERASER</button>
    </div>
    <div>
    <h4 style="color:white" v-if='isDrawing == true'>{{drawThis}}</h4>
      <buttton class="btn btn-primary" @click='startGame'>START GAME</buttton>
    <h4 style="color:white" v-if="timerStart == true">{{timer}}</h4>
    <form action="" v-if="isDrawing == false">
      <input type="text" v-model='guessDrawing'>
      <button type="submit" @click.prevent='inputAnswer' class="btn btn-primary">Submit</button>
    </form>
    </div>
    <div>
      <canvas
        id='my-canvas'
        @mousedown='startDraw'
        @mouseup='stopDraw'
        @mousemove='draw'
        width='500px'
        height='500px'
      />
    </div>
    <WinModal />
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
      color: 'white',
      drawThis: '',
      timer: 15,
      timerStart: false,
      guessDrawing: '',
      answerDrawing: '',
      isDrawing: false,
      userScore: 0,
      displayWinner: false
    }
  },
  components: {
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
    eraser () {
      this.ctx.strokeStyle = 'white'
      this.ctx.lineWidth = 100
    },
    loadCanvas (dataURL) {
      if (dataURL) {
        const imageObj = new Image()
        imageObj.onload = () => {
          this.ctx.drawImage(imageObj, 0, 0)
        }
        imageObj.src = dataURL
      }
    },
    startGame () {
      this.isDrawing = true
      socket.emit('gameStart', { message: 'game is starting' })
      this.startCountdown()
    },
    startCountdown () {
      this.timer = 15
      this.timerStart = true
      this.timerFunction()
    },
    timerFunction () {
      setTimeout(() => {
        if (this.timer > 1) {
          this.timer -= 1
          this.timerFunction()
        }
      }, 1000)
    },
    inputAnswer () {
      this.isDrawing = false
      socket.emit('submitAnswer', [this.guessDrawing, this.answerDrawing])
      console.log('masukk sini answer')
    }
  },
  mounted () {
    this.canvas = document.getElementById('my-canvas')
    this.ctx = this.canvas.getContext('2d')
    // this.canvas.height = window.innerHeight
    // this.canvas.width = window.innerWidth
    socket.on('connect', () => {
      console.log(socket.connected)
      console.log(socket.id)
    })
    socket.on('draw', payload => {
      this.loadCanvas(payload)
    })

    socket.on('gameStart', payload => {
      this.drawThis = payload.gambar
    })

    socket.on('submitAnswerResponse', payload => {
      console.log(payload)
      if (payload === true && this.timer > 0) {
        this.userScore += 10
        console.log('My current score ' + this.userScore)
        socket.emit('stopRound')
        this.timer = 0
      } else if (payload === false) {
        console.log('Wrong Answer!')
      }
    })

    socket.on('gameStartForAll', payload => {
      this.answerDrawing = payload
      console.log('game is starting!')
      this.startCountdown()
    })

    socket.on('stopRound', payload => {
      this.timer = 0
      this.isDrawing = false
    })
  },
  beforeUpdate () {
    if (this.score === 50) {
      socket.emit('userWin', localStorage.getItem('username'))
    }
  }
}
</script>

<style scoped>
#my-canvas {
  border: 3px solid black;
  margin: 0;
  padding: 0;
  background-color: white;
}
</style>
