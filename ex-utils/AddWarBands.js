const fs = require('fs');
const {saveGameDataFile} = require('./saveGameDataToFile')
const fighters = require('../public/locales/en/fighters.json').items

const allJavaData = fs.readFileSync('ex-utils/DatabaseObjectsLab.txt').toString();
const warBandsXmlDataTransformedToJSON = JSON.parse(fs.readFileSync('ex-utils/warBands.txt'));

const warBandRegExp = /\/\/Warband \- (.*)[\n\s]/mg;
const fighterRegExp = /\/\/Fighter \- (.*)[\w\n\s=();\."]*setName\("(.*)"\)/mg;

const warBands = []

for (let match of allJavaData.matchAll(warBandRegExp)) {
  const [matchStr, warBandName] = match
  const {index} = match
  const warBandData = warBandsXmlDataTransformedToJSON.resources.string.splice(0, 3)

  const warBand = {
    name: warBandData.length ? warBandData[0].__text : warBandName,
    description: warBandData.length ? warBandData[1].__text : "",
    icon: warBandData.length ? warBandData[2].__text : "",
    fighters: []
  }

  const start = index + matchStr.length;
  const warBandDataStringWithoutCurrentWB = allJavaData.substring(start)
  const endMatch = warBandDataStringWithoutCurrentWB.match(/\/\/Warband \- (.*)/m);
  const end = endMatch && endMatch.index
  const warBandFightersScopeString = warBandDataStringWithoutCurrentWB.substring(0, end || undefined);

  for (let [_, fighterName, fighterNameRus] of warBandFightersScopeString.matchAll(fighterRegExp)) {
    fighters.forEach(({name, id}) => {
      if (name === fighterNameRus) {
        warBand.fighters.push(id)
      }
    })
  }

  warBands.push(warBand)
}

console.log(warBands)

saveGameDataFile("warBands", "en", warBands)
saveGameDataFile("warBands", "ru", warBands)