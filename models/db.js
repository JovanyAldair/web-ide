const Sequelize = require("sequelize") 
const sequelize = new Sequelize('web_ide_db', 'admin', 'password', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {Sequelize, sequelize}