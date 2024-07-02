const https = require('https')

const { apiUrl, bearerTokenKey } = require('../constants')

const options = {
  method: '',
  hostname: apiUrl,
  path: '',
  headers: {
    Authorization: `Bearer ${bearerTokenKey}`
  }
}

const sendRequest = (path = '/v1/secret/files', method = 'GET') => {
  return new Promise((resolve, reject) => {
    options.method = method
    options.path =  path
    const req = https.request(options, res => {
      const chunks = []
      
      res.on("data", function (chunk) {
        chunks.push(chunk);
      });

      res.on('end', function (chunk) {
        const body = Buffer.concat(chunks)
        resolve(body.toString())
      }) // success, resolve
    })
      .on('error', e => reject(e)) // failure, reject
      req.end();
  })
}

module.exports = {
  sendRequest
}
