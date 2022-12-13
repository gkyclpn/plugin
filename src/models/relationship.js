const plugin = require('./plugins')
const pluginVersion = require('./pluginVersions')

plugin.hasMany(pluginVersion, {
    foreignKey: 'pluginId'
})

pluginVersion.belongsTo(plugin)