const { DataTypes, Model } = require('sequelize')
const dbConnect = require('../configs/dbConnect')

const tableOptions = {
    sequelize: dbConnect,
    modelName: 'pluginVersions'
}

const tableColumns = {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
    },
    pluginId: {
        type: DataTypes.UUID,
    },
    versionNumber: {
        type: DataTypes.INTEGER
    },
    pluginPath: {
        type: DataTypes.STRING(255)
    },
    isDelete: {
        type : DataTypes.BOOLEAN,
        defaultValue: false
    }
}

class thisTable extends Model {}
thisTable.init(tableColumns, tableOptions)
module.exports = thisTable