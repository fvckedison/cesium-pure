import express from "express"    //透過express.js 起靜態cesium服務
import * as dotenv from 'dotenv'  //環境變數
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config()

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const app = express()

app.use(express.static(__dirname));


app.listen(process.env.PORT, () => {
    console.log(`server run in http://localhost:${process.env.PORT}`)
})

