const express =require("express");
const app = express();

//view engine
app.set('view engine', 'ejs')

app.get("/", (req, res) =>{
    res.send("bem vindo")
})

app.listen(8080, () => {
    console.log("o servidor está rodando")
})