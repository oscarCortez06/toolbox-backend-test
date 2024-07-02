const { getFilesNames, getFileInformation } = require('../services/files');
const expect = require('chai').expect;


describe('#getFileNames()', function() {
  context('getFileNames', function() {
      it('should return array with names', async function() {
        const { files } = await getFilesNames()
        expect(files).to.be.an('array')
      })
    })
})


describe('#getFileInfo()', function() {
  context('Get Info of one file', async function() {
    it('This should return all info of file test9.csv', async function() {

      const infoFiles = await getFileInformation('test9.csv')
      console.log(infoFiles)
      expect(infoFiles).to.be.an('array')
    })
  })
})

describe('#getFileInfo()', function() {
  context('Get Info of one file', async function() {
    it('This should  validate info of file test2.csv only has 1 element', async function() {

      const infoFiles = await getFileInformation('test2.csv')
      console.log(infoFiles)
      expect(infoFiles).to.have.length(1)
    })
  })
})



describe('#getFileInfo()', function() {
  context('Get Info of invalid file', async function() {
    it('This should  validate info of file test15.csv has not valid ', async function() {

      const infoFiles = await getFileInformation('test15.csv')
      console.log(infoFiles)
      expect(infoFiles).to.have.length(0)
    })
  })
})
