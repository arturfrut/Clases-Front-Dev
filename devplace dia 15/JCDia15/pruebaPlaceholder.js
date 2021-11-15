const axios = require("axios");

//CLIENTE HTTP PERSONALIZADO

const placeholderHTTP = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
  });
  
  
  placeholderHTTP.get("/photos",{
    params: {
      id: 96
    }
  })
  .then(res=>console.log("placeholder: ",res.data))
  .catch(err=>console.log(err))