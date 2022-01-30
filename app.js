const express = requiere("express");

const app = express();

app.listen("3000", function(){
    console.log("Faustine")
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/home.html")
});