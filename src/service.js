require('dotenv').config()

const path = require("path")
const pluginR = require('./repositories/plugin')
const pluginVersionR = require('./repositories/pluginVersion')


const plugin = {
    create: async (req, res) => {
        try {
            const { body, file } = req
            const filePath = path.join(__dirname, "../resources/static/uploads/" + file.originalname)
            const anyPlugin = await pluginR.one({ name: body.name })
            if (!anyPlugin) {
                const createdPlugin = await pluginR.create({
                    name: body.name,
                })
                const createdPluginVersion = await pluginVersionR.create({
                    pluginId: createdPlugin.id,
                    versionNumber: body.versionNumber,
                    pluginPath: filePath
                })
                const responseObj = {
                    id: createdPlugin.id,
                    name: createdPlugin.name,
                    versionNumber: createdPluginVersion.versionNumber,
                    pluginPath: createdPluginVersion.pluginPath,
                    plugin: true
                }
                res.status(200).send(responseObj)
            }
            else {
                throw "Plugin Already Created!"
            }
            
        }
        catch (error) {
            console.log(error)
            res.status(400).send(error)
        }
    },
    
    update: async (req, res) => {
        try {
            const { body } = req
            const anyPlugin = await pluginR.one({ name: body.name })
            if (!anyPlugin) {
                const updatedPlugin = await pluginR.update({
                    name: body.name
                }, {id: body.id})
                const responseObj = {
                    id: body.id,
                    name: body.name,
                    plugin: true
                }
                res.status(200).send(responseObj)
            }
            else {
                throw "Plugin Already Created!"
            }
        }
        catch (error) {
            console.log(error)
            res.status(400).send(error)
        }
    }
}


module.exports = { plugin }
