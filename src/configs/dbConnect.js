require('dotenv').config()

const { Sequelize } = require('sequelize')

const databaseName = process.env.DB_NAME
const databaseUser = process.env.DB_USER
const databasePass = process.env.DB_PASS

const serverObject = {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    encrypt: false,
    logging: false,
}

const SequelizeConnection = new Sequelize(databaseName, databaseUser, databasePass, serverObject)
module.exports = SequelizeConnection