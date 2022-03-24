const express =require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database")

const categoriesController = require("./categories/CategoriesController");
const articlesController = require("./articles/ArticlesController");

// view engine para exibir html
app.set('view engine', 'ejs')

// static
app.use(express.static('public'))

// body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// database
connection
    .authenticate()
    .then(() => {
        console.log("conexão feita com sucesso");
    }).catch((error) => {
        console.log(error);
    })

app.use("/", categoriesController);
app.use("/", articlesController);

app.get("/", (req, res) =>{
    res.render("index")
})

app.listen(8080, () => {
    console.log("o servidor está rodando")
})


