const Sequelize = require("sequelize");
const connection = require("../database/database");

const User = connection.define('userscategories', {
    email:{
        type: Sequelize.STRING,
        allowNull: false
    }, passwordsenha: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = User;