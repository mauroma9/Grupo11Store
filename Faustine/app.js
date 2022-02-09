const express = require('express');
const app = express();
app.use(express.static('public'));


app.listen(3000, ()=>{
    console.log('Servidor funcionando');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});
app.get('/carritoDeCompras', (req,res)=>{
    res.sendFile(__dirname + '/views/carritoDeCompras.html');
});

app.get('/formularioRegistro', (req,res)=>{
    res.sendFile(__dirname + '/views/formularioRegistro.html');
});
app.get('/detalleDeProducto', (req,res)=>{
    res.sendFile(__dirname + '/views/detalleDeProducto.html');
});
