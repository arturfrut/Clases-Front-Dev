// npm init --yes
// npm i express cors multer uuid dayjs
// npm i uuid nodemon esm method-override
// npm i bcrypt jsonwebtoken 

import express from "express";
import cors from "cors";
import multer from "multer";
import MethodOverride  from 'method-override'
import {v4 as uuid} from "uuid";

const server=express();

let port= process.env.PORT ||3000;

server.use(cors());
server.use(express.json());


const multerConfig= multer.diskStorage({
    destination:function(res,file,cb){
        cb(null,"./bucket")
    },
    filename:function(res,file,cb){
        let idImage = uuid().split('-')[0]
        let day = dayjs.format('DD-MM-YYYY')
        cb(null,`${day}.${idImage}.${file.originalname}`);
    },
});
const multerMiddle =multer({storage:multerConfig})
server.get("/",(req,res)=>{
    res.send("start endpoint")
})

server.post("/upload",multerMiddle.single("imagefile"),(req,res)=>{     //Puedo poner que si no encuentra un archivo salga error
    res.send("imagen Creada")
})

server.listen(port,()=>{
    console.log("start server");
})
