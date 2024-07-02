const { defaultResponse } = require('../constants')
const { getFilesNames, getFileInformation } = require('../services/files')

const getFilesNameController = async (req, res) => {
  try {
    const files = await getFilesNames()

  defaultResponse.message = files.code ? 'Error getting file names' : 'Successfully request'
  defaultResponse.error =  files.code !== undefined
  defaultResponse.results =  files.code ? [] : files

  const statusCode = files ? 200 : 400

  return res.status(statusCode).json(defaultResponse)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const getFileInformationController = async(req, res) => {
  try {
    const { fileName } = req.query
    const filesInfo = []

    if (fileName) {
      const response =  await getFileInformation(fileName)
      if (response.length > 0) {
        filesInfo.push({
          'file': fileName,
          'lines': response
        }) 
      }

    } else {
      const filesNames = await getFilesNames()
      if (filesNames.files.length > 0) {
        for (let index = 0; index < filesNames.files.length; index++) {
          const file = filesNames.files[index];
          const response =  await getFileInformation(file)
          if (response.length > 0) {
            filesInfo.push({
              'file': fileName,
              'lines': response
            }) 
          }
        }
      }
    }
   

    defaultResponse.message =  'Successfully request'
    defaultResponse.error =  false
    defaultResponse.results =  filesInfo || []
  
    return res.status(200).json(defaultResponse)

  
  } catch (error) {
    console.log(error)
    return res.status(400).json(error)

  }
} 

module.exports = {
  getFilesNameController,
  getFileInformationController
}
