const express = require("express");

const app = express();

app.use(express.static(__dirname + '/'));

app.listen("3030", function(){
    console.log("Faustine")
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/home.html")
});

app.get("/carritoDeCompras", (req, res) => {
    res.sendFile(__dirname + "/views/carritoDeCompras.html")
});

app.get("/formularioRegistro", (req, res) => {
    res.sendFile(__dirname + "/views/formularioRegistro.html")
});
