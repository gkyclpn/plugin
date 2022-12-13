const router = require('express').Router()
const { plugin } = require('./service')
const storage = require('./configs/storage')


router.post('/api/plugin/create', storage.single('file'), plugin.create)

module.exports = router
