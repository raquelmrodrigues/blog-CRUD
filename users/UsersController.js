const express = require("express");
const router = require("../categories/CategoriesController");
const touer = express.Router();
const User = require("./User");
const bcrypt =require('bcryptjs');

router.get("/admin/users", (req, res) => {
    User.findAll().then(user => {
        res.render("admin/users/index", {users: users});
    });
});

router.get("/admin/users/create", (req, res) => {
    res.render("admin/users/create")
});

router.post("/users/create", (req, res) => {
    var email = req.body.email;
    var password = req.body.password;

    //verifica se o email já está cadastrado
    User.findOne({where:{email: email}}).then( user =>{
        if(user == undefined) {
            //criptografa a senha
            var salt = bcrypt.genSaltSync(10);
            var hash  = bcrypt.hashSync(password, salt);

            User.create({
                email: email,
                password: hash
            }).then(() => {
                res.redirect("/");
            }).catch(() => {
                res.redirect("/");
            })
        } else {
            res.redirect("/admin/users/create")
        }
    })    
});

router.get("/login", (req, res) => {
    res.render("admin/users/login");
});

// autenticação
router.post("/authenticate", (req, res) => {
    var email = req.body.email;
    var password = req.body.password;

    User.findOne({where:{email: email}}).then(user => {
        if(user != undefined) {
            var correct = bcrypt.compareSync(password, user.password);
            if(correct) {
                req.session.user = {
                    id: user.id,
                    email: user.email
                }
                res.redirect("/admin/articles");
            } else {
                res.redirect("/login");
            }
        } else {
            res.redirect("/login");
        }
    })
});

//logout
router.get("/logout", (req, res) => {
    req.session.user = undefined;
    res.redirect("/");
})

module.exports = router;