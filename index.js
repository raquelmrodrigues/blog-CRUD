const express =require("express");
const app = express();

app.get("/", (req, res) =>{
    res.send("bem vindo")
})

app.listen(8080, () => {
    console.log("o servidor está rodando")
})