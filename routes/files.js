const express = require('express')

const router = express.Router()

const { getFilesNameController, getFileInformationController } = require('../controllers/files')

router.get('/list', getFilesNameController)
router.get('/data', getFileInformationController)

module.exports = router
