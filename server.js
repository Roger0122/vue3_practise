import express from "express";
import axios from "axios";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import "dotenv/config";

const PORT = process.env_bike.PORT ?? 3000;
const UPSTREAM =
  process.env_bike YOUBIKE_URL ??
  "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";
const TTL = Number(process.env.CACHE_TTL ?? 30)*1000;

const app = express();
app.use(helmet());
app.use(
  cors({
    origin:["http://localhost:5173", "http://127.0.0.1:5173"]
  })
)
app.use(morgan("dev"));

let cache = { data: null, ts:0 };

app.get("/api/youbike", async(req, res) => {
  try {
    const now = Date.now();
    if(!cache.data || now - cache.ts > TTL){
      const { data } = await axios.get(UPSTREAM, { timeout: 10000 });
      cache = { data, ts: now};
      }

      const {q, area } = req.query;
      let rows = ch

  }
  

  


})