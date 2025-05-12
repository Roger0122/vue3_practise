<template>
  <h1>展示 Excel 並轉換為 PDF</h1>

  <input type="file" accept=".xlsx, .xls" @change="onFileChange" />

  <div class="btn-group">
    <button :disabled="!excelBlobUrl" @click="downloadExcel">下載 Excel</button>
    <button :disabled="!pdfUrl" @click="downloadPdf">下載 PDF</button>
  </div>

  <iframe v-if="pdfUrl" :src="pdfUrl" width="600" height="800" />

  <!-- 真正渲染表格 -->
  <div ref="tableContainer" style="position: absolute; top: -9999px;">
    <table v-if="tableData.length">
      <tr v-for="(row, rowIndex) in tableData" :key="rowIndex">
        <td v-for="(cell, colIndex) in row" :key="colIndex">{{ cell }}</td>
      </tr>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
import * as XLSX from 'xlsx'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

const pdfUrl = ref<string | null>(null)
const excelBlobUrl = ref<string | null>(null)
const tableContainer = ref<HTMLElement | null>(null)
const tableData = ref<string[][]>([]) // ✅ 儲存 Excel 資料

let latestPdfBlob: Blob | null = null
let uploadedExcelFile: File | null = null

function onFileChange(event: Event) {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]
  if (!file) return

  uploadedExcelFile = file
  excelBlobUrl.value = URL.createObjectURL(file)

  handleExcel(file)
}

function handleExcel(file: File) {
  const reader = new FileReader()
  reader.onload = async (e) => {
    const data = new Uint8Array(e.target!.result as ArrayBuffer)
    const workbook = XLSX.read(data, { type: 'array' })
    const sheet = workbook.Sheets[workbook.SheetNames[0]]

    // ✅ 將工作表轉成 JSON（每列為陣列）
const range = XLSX.utils.decode_range(sheet['!ref']!)
const rows: string[][] = []

for (let row = range.s.r; row <= range.e.r; row++) {
  const rowData: string[] = []
  for (let col = range.s.c; col <= range.e.c; col++) {
    const cellAddress = { r: row, c: col }
    const cellRef = XLSX.utils.encode_cell(cellAddress)
    const cell = sheet[cellRef]

    if (cell) {
      let value = cell.v

      // ✅ 日期處理：若是日期格式，自動格式化
      if (cell.t === 'n' && cell.z && cell.z.includes('yyyy')) {
        value = XLSX.SSF.format(cell.z, cell.v)
      } else if (cell.t === 'n' && cell.z && cell.z.includes('m/d') && !isNaN(cell.v)) {
        value = XLSX.SSF.format(cell.z, cell.v)
      }

      rowData.push(String(value))
    } else {
      rowData.push('')
    }
  }
  rows.push(rowData)
}

tableData.value = rows

    await nextTick()

    if (tableContainer.value) {
      const canvas = await html2canvas(tableContainer.value)
      const imgData = canvas.toDataURL('image/png')

      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [canvas.width, canvas.height]
      })

      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height)
      latestPdfBlob = pdf.output('blob')

      const blobUrl = URL.createObjectURL(latestPdfBlob)
      pdfUrl.value = blobUrl
    }
  }

  reader.readAsArrayBuffer(file)
}

function downloadPdf() {
  if (latestPdfBlob) {
    const link = document.createElement('a')
    link.href = pdfUrl.value!
    link.download = 'converted-from-excel.pdf'
    link.click()
  }
}

function downloadExcel() {
  if (uploadedExcelFile && excelBlobUrl.value) {
    const link = document.createElement('a')
    link.href = excelBlobUrl.value
    link.download = uploadedExcelFile.name
    link.click()
  }
}
</script>

<style scoped>
.btn-group {
  margin-top: 10px;
  display: flex;
  gap: 10px;
}

table, th, td {
  border: 1px solid #999;
  border-collapse: collapse;
  padding: 4px;
  font-family: 'Arial', 'Microsoft JhengHei', sans-serif;
  font-size: 12px;
}

</style>
