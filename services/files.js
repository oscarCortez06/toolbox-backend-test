const { sendRequest } = require('../utils/makeRequest')
const { convertCsvToJson } = require('../utils/utils')

const getFilesNames = async () => {
  try {
    const response = await sendRequest()

    if(response.code){
      throw new Error(response.message)
    }

    return JSON.parse(response)
  } catch (error) {
    console.error('Error Getting Filenames ->', error)
    return error
  }
}

const getFileInformation = async (fileName) => {
  try {
    const path = `/v1/secret/file/${fileName}`

    const response = await sendRequest(path)
    if(response.code){
      throw new Error(response.message)
    }
    const parsedResponse = convertCsvToJson(response)

    return parsedResponse
  } catch (error) {
    console.error('Error Getting File ->', error)
    return error
  }
}

module.exports = {
  getFilesNames,
  getFileInformation
}
