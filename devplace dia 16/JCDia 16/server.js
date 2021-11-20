import  express from "express";
import  MethodOverride from "method-override";
import cors from "cors";
import path from"path";

const server= express();
const log=console.log;
// con esto le digo q voy a trabajar con fomularios
server.use(express.urlencoded({extended:true}))
server.use(express.json());

//con esto podes mandar una vista al server
server.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/index.html"))
})

//parametro
server.get("/",(req,res)=>{
    res.send("mi primer endpoint");
})
//parametro
server.get("/minombre/:nombre/ahora/tu/apellido/:apellido",(req,res)=>{
    let nombre= req.params.nombre;
    let apellido= req.params.apellido;
    res.send(`su nombre es ${nombre} y tu apelldio es ${apellido}`);
})
//query
server.get("/mipais",(req,res)=>{
    let pais=req.query.pais
    let ciudad=req.query.ciudad
    res.send(`mi paies es ${pais}, mi ciudad es ${ciudad}`)
})
server.post("/crear/usuario",(req,res)=>{
    let correo= req.body.correo;
    res.send(`usuario creado ${correo}`)

})
server.listen(5000,()=>{
    log("start server");
})
