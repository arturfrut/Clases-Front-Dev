const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');


const app = express();

console.log('Servidor iniciado');

let port = process.env.PORT || 4500;

let users = [];

app.use(cors());

const SECRET = 'pbcltnzr'
const SALT = 10;

app.get("/users",(req,res) =>{
    res.send(users)
})

app.get("/user/:email", (req, res)=>{
    let emailUser = users.map((user,i)=>{
       if (user[i].email == req.params.email){
          return user[i]
       }
    })
    res.send(emailUser);
 });

 app.post("/user/:email/:name/:pass/:role",(req,res)=>{     //http://localhost:4500/user/artur@gmail.com/artu/123/admin
    const {email, name, pass, role} = req.params;  
    let payload = {
        email,
        name,
        pass,
        role:role
    };

    bcrypt.hash(pass,SALT, (err, hash) =>{
        if(!err){
            payload.pass = hash;
            users.push(payload)
            console.log(payload)
            jwt.sign(payload, SECRET, (err, token)=>{
                if(!err){
                  res.send(token);
                }
              });
        }
    })

 });

 app.post("/verify/:user/:mail/:pass", (req, res)=>{        ///http://localhost:4500/verify/artu/artur@gmail.com/123
    let {user, mail, pass} = req.params;  
    const token = req.headers.authorization.split(" ")[1];
    console.log('validacion: ',user)

    for (user in users)
    console.log(users)
    {
        if (user == users.name){
            if(token){
                jwt.verify(token, SECRET, (err, payload)=>{
                    if(!err){
                        bcrypt.compare(payload.pass, users.pass, (err, validate)=>{     //Primero deberia revisar el token y luego el bycript
                            if(!err){
                                res.send(`verify ${validate}`);
                            }
                            });
                    }
                });
             }
            
        }
        else{
           res.send("Ese usuario no existe");
        }
        
     }
     

 });


 
 app.listen(port, ()=>{
    console.log("start server");
});

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFydHVyQGdtYWlsLmNvbSIsIm5hbWUiOiJhcnR1IiwicGFzcyI6IjEyMyIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzNzQyMzgzNH0.4hgb_nlI8ds562FV2W2NsnlRlkiY-TD_ch3vik1ZvYM