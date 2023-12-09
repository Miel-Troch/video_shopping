const path = require('path')
const models = require('./models/init-models')
require('dotenv').config({ path: path.join(__dirname, '.env') })

// Specify the format of a date
const sequelize = require('sequelize')
sequelize.DATE.prototype._stringify = function _stringify(date, options) {
  return this._applyTimezone(date, options).format('YYYY-MM-DD HH:mm:ss')
}

// Establish the connection with the database
const connection = new sequelize(
  process.env.lokaal_database,
  process.env.lokaal_username,
  process.env.lokaal_password,
  {
    host: process.env.lokaal_host,
    port: process.env.lokaal_port,
    dialect: process.env.lokaal_dialect,
    logging: false,
    define: { timestamps: false },
    charset: 'utf8',
    dialectOptions: {
      useUTC: false,
      // A date from the database is always returned as a string
      typeCast: function (field, next) {
        if (field.type == 'DATETIME' || field.type == 'TIMESTAMP' || field.type == 'DATE') {
          return field.string()
        }
        return next()
      },
    },
    timezone: '+01:00',
  }
)

const { category, product, video } = models.initModels(connection)

module.exports = {
  category,
  product,
  video,
}
