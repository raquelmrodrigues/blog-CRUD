const Sequelize = require("sequelize");

const connection = new Sequelize('blog_crud', 'root', '1701', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;