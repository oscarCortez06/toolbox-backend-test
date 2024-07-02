const  hasValidProperties = (obj)  => {
    for (let key in obj) {
      if (obj[key] === undefined || obj[key].length  === 0) {
        return true;
      } else if (key === 'number' &&  isNaN(+obj[key])) {
        return true;
      } else if (key === 'hex' && obj[key].length !== 32) {
        return true;
      }
    }
    return false;
}


const convertCsvToJson = (file) => {
    const lines = file.split('\n')
    const result = []
    const headers = lines[0].split(',')

    for (let i = 1; i < lines.length; i++) {        
        if (!lines[i])
            continue
        const obj = {}
        const currentline = lines[i].split(',')

        for (let j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j]
        }
        result.push(obj)
    }
    const filteredResult = result.filter(obj =>   !hasValidProperties(obj))
    return filteredResult
}


module.exports = {
    convertCsvToJson
} 