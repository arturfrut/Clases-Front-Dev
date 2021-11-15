const axios = require("axios");

//CLIENTE HTTP PERSONALIZADO
const pokeHTTP = axios.create({
  baseURL: 'https://pokeapi.co/api/v2'
});


pokeHTTP.get("/pokemon/1")
.then(res=>console.log(res.data))