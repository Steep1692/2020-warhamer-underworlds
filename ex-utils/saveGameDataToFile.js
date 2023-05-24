const fs = require('fs');

module.exports = Object.freeze({
  saveGameDataFile: (name, lang, data) => {
    const filePath = `public/locales/${lang}/${name}.json`
    const dataToWrite = {}
    dataToWrite.items = data
    dataToWrite.date = new Date().toJSON()

    fs.writeFile(filePath, JSON.stringify(dataToWrite, null, 2), {flag: 'w'}, (err) => {
      if (err) {
        console.log(err)
      } else {
        console.log(filePath, ' - file was saved!')
      }
    })
  }
})