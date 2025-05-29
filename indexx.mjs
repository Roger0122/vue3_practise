import express from 'express'
import axios from 'axios'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())

app.get('/api/weather', async (req, res) => {
  try {
    const { data } = await axios.get('https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001',{
      params: {
        Authorization: process.env.CWA_API_KEY,
        format: 'JSON'
      }
    })
   
    res.json(data)
  } catch(error) {
    console.error('轉發 CWA　API 時錯誤', error.message)
    res.status(500).json({ error:'無法取得氣象資料'})
  }
})

app.listen(PORT, () => {
  console.log(`Proxy server is running at http://localhost:${PORT}`)
})
