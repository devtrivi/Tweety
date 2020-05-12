const express = require('express');
const app = express();


function loggingMiddleware(req, res, next){
    console.log(req['method']);
    console.log(req['url']);
     next();
}
app.use(loggingMiddleware)

app.get('/usuarios', (req, res, next)=>{
    res.send('hola')
})




app.use(function (req, res, next) {
    // hacé tu logueo acá.
    // llamá a `next`. Sino tu app recibirá pedidos 
    // pero no responderá adecuadamente.
})



var port = 3000;

app.listen(port, ()=>{
console.log('listening  on port 3000'); 
})