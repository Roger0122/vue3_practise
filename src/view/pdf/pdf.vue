<template>
  <h1>點點簽，PDF 匯入練習：回傳 PDF 時的展示</h1>
  <div>
  畫筆粗細：{{ lineWidth }}
  <input type="range" v-model="lineWidth" min="1" max="20" />
  </div>
  <div>
    <button @click="generatePDF">下載 點點簽(PDF)</button>
  </div>
  
  <div>
    <h2>展示</h2>
  <iframe  v-if="pdfUrl" :src="pdfUrl" width="600" height="400">  
  </iframe>
  </div>
  <div>
    <canvas
      ref="canvasRef"
      width="600"
      height="400"
      style="border:1px solid #000"
    ></canvas>

    <img ref="imgRef" width="250" height="150" style="border: 1px solid" />

    <div class="btn-group">
      <button @click="clearCanvas">Clear</button>
      <button @click="saveCanvas">Save</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import jsPDF from 'jspdf'

const canvasRef = ref<HTMLCanvasElement | null>(null)
const imgRef = ref<HTMLImageElement | null>(null)
const lineWidth = ref(4);
const EMPTY_IMAGE = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAusB9Y6n8ZgAAAAASUVORK5CYII='
const pdfUrl = ref<string | null>(null)



onMounted(() => {
  const canvas = canvasRef.value!
  const ctx = canvas.getContext('2d')!
  ctx.lineWidth = 4
  ctx.lineCap = 'round'
  const stored = localStorage.getItem('name')
  if (stored && imgRef.value) {
    imgRef.value.src = stored
  }
  

  let isPainting = false

  function getPaintPosition(e: MouseEvent | TouchEvent) {
    const canvasSize = canvas.getBoundingClientRect()
    if (e instanceof MouseEvent) {
      return {
        x: e.clientX - canvasSize.left,
        y: e.clientY - canvasSize.top
      }
    } else {
      return {
        x: e.touches[0].clientX - canvasSize.left,
        y: e.touches[0].clientY - canvasSize.top
      }
    }
  }

  function startPosition(e: MouseEvent | TouchEvent) {
    e.preventDefault()
    isPainting = true
    const pos = getPaintPosition(e)
    ctx.beginPath()
    ctx.moveTo(pos.x, pos.y)
  }

  function finishedPosition() {
    isPainting = false
    ctx.beginPath()
  }

function draw(e: MouseEvent | TouchEvent) {
  if (!isPainting) return
  const pos = getPaintPosition(e)

  // 🖌️ 這行是關鍵：根據目前的輸入數值改變畫筆粗細
  ctx.lineWidth = lineWidth.value

  ctx.lineTo(pos.x, pos.y)
  ctx.stroke()
}

  // 加入滑鼠事件
  canvas.addEventListener('mousedown', startPosition)
  canvas.addEventListener('mouseup', finishedPosition)
  canvas.addEventListener('mouseleave', finishedPosition)
  canvas.addEventListener('mousemove', draw)

  // 加入觸控事件
  canvas.addEventListener('touchstart', startPosition)
  canvas.addEventListener('touchend', finishedPosition)
  canvas.addEventListener('touchcancel', finishedPosition)
  canvas.addEventListener('touchmove', draw)
})

// 清除畫布
function clearCanvas() {
  const canvas = canvasRef.value!
  const ctx = canvas.getContext('2d')!
  ctx.clearRect(0, 0, canvas.width, canvas.height)

   if (imgRef.value) {
    imgRef.value.src = EMPTY_IMAGE
  }

  localStorage.removeItem('name');
}

// 將畫布儲存為圖片
function saveCanvas() {
  const canvas = canvasRef.value!
  const dataUrl = canvas.toDataURL('image/png')
  imgRef.value!.src = dataUrl
  localStorage.setItem('name', dataUrl); //存入一筆資料
}

// 展示PDF
function generatePDF() {
  const canvas = canvasRef.value!
  const dataUrl = canvas.toDataURL('image/png')

  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'px',
    format: [canvas.width, canvas.height]
  })

  pdf.addImage(dataUrl, 'PNG', 0, 0, canvas.width, canvas.height)

  const blob = pdf.output('blob')
  const blobUrl = URL.createObjectURL(blob)
  pdfUrl.value = blobUrl
}




</script>

<style scoped>
.btn-group {
  margin-top: 10px;
  display: flex;
  gap: 10px;
}
</style>
