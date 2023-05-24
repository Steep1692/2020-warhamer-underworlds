// This file is created to parse data of languages from the Google Excel.
const fs = require('fs');
const axios = require('axios');
const tableLink = "https://docs.google.com/spreadsheets/d/1BbBGR326YDnC5BESDWaWPgZxARCDQTPyFLrbusOGOgI/export?format=tsv";
// https://docs.google.com/spreadsheets/d/1BbBGR326YDnC5BESDWaWPgZxARCDQTPyFLrbusOGOgI/edit?usp=sharing


const passedLang = process.argv[2];

const saveTranslation = (lang, data) => {
  var filePath = `./public/locales/${lang}/common.json`;
  var date = new Date().toJSON();

  data.date = date;
  var fileValue = JSON.stringify(data, null, 2);
  // console.log('fileData', fileData)
  fs.writeFile(filePath, fileValue, { flag: 'w' }, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("common.json", " file was saved!");
    }
  });
};

axios.get(tableLink).then((response) => {
  var data = response.data;

  var allTextLines = data.split(/\r\n|\n/);
  var entries = allTextLines[0].split('\t');
  var langs = [];
  var i = 0;
  for (i = 1; i < entries.length; i++) {
    langs.push({});
  }

  for (i = 1; i < allTextLines.length; i++) {
    var line = allTextLines[i].split("\t");
    var paramKey = line[0];
    for (var k = 1; k < line.length; k++) {
      if (line[k]) {
        langs[k - 1][paramKey] = line[k];
      }
    }
  }
  console.log('__dirname', __dirname);
  if (passedLang && entries.includes(passedLang)) {
    console.log('passed lang', passedLang);
    const index = entries.indexOf(passedLang);
    saveTranslation(passedLang, langs[index - 1]);
  } else {
    langs.forEach((value, index) => {
      const lang = entries[index + 1];
      saveTranslation(lang, value);
    });
  }
});
