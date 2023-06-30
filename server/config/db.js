require("dotenv").config();

module.exports = {
    user: {
        host: process.env.DB_host,
        user: process.env.DB_user,
        password: process.env.DB_password,
        database: process.env.DB_database
    }
}
