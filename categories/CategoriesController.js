const express = require("express");
const { default: slugify } = require("slugify");
const router = express.Router();
const Category = require("./Category");

router.get("/admin/categories/new", (req, res) => {
    res.render("admin/categories/new")
});

router.post("/categories/save", (req, res) => {
    var title = req.body.title;
    if(title != undefined){

        Category.create({
            title: title,
            slug: slugify(title)
        }).then(() => {
            res.redirect("/");
        })

    }else{
        res.redirect("/admin/categories/new")
    }
});

router.get("/admin/categories", (req, res) => {

    Category.findAll().then(categories => {
        res.render("admin/categories/index", {categories:categories});
    });
});

// deletar uma categoria
router.post("/categories/delete", (req, res) => {
    var id = req.body.id;
    if(id != undefined) {
        if(!isNaN(id)) {

            Category.destroy({
                where: {
                    id: id
                }
            }).then(() => {
                res.redirect("/admin/categories")
            });

        }else{
            res.redirect("/admin/categories");
        }

    }else{
        res.redirect("/admin/categories");
    }
});

module.exports = router;