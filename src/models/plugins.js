const { DataTypes, Model } = require('sequelize')
const dbConnect = require('../configs/dbConnect')

const tableOptions = {
    sequelize: dbConnect,
    modelName: 'plugins'
}

const tableColumns = {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
    },
    name: {
        type: DataTypes.STRING(50),
    },
    isDelete: {
        type : DataTypes.BOOLEAN,
        defaultValue: false
    }
}

class thisTable extends Model {}
thisTable.init(tableColumns, tableOptions)
module.exports = thisTable