// This file is created to parse data from the Web site.
import {saveGameDataFile} from './saveGameDataToFile'

const fs = require('fs')
const axios = require('axios')
const Jimp = require('jimp')
const arrayBufferToBuffer = require('arraybuffer-to-buffer')
const {parse} = require('node-html-parser')

// Make sure "homepage"(5 line) and "PUBLIC_URL"(51 line) in package.json are the same.
const publicUrl = process.env.PUBLIC_URL

const warBandsNamesDependencies = {
  'Bloodreavers': 'garreks_reavers', // Changed
  'Liberators': 'steelhearts_champions', // Changed
  'Sepulchral Guard': 'Sepulchral_Guard',
  'Ironskull’s Boyz': 'Ironskulls_Boyz',
  'The Chosen Axes': 'The_Chosen_Axes',
  'Spiteclaw’s Swarm': 'Spiteclaws_Swarm',
  'The Farstriders': 'The_Farstriders',
  'Magore’s Fiends': 'Magores_Fiends',
  'Stormsire’s Cursebreakers': 'Stormsires_Cursebreakers',
  'Thorns of the Briar Queen': 'Thorns_of_the_Briar_Queen',
  'Zarbag’s Gitz': 'Zarbags_Gitz',
  'Eyes of the Nine': 'the_Eyes_of_the_Nine', // Changed
  'Mollog’s Mob': 'Mollogs_Mob',
  'Godsworn Hunt': 'Godsworn_Hunt',
  'Ylthari’s Guardians': 'Yltharis_Guardians',
  'Thundrik’s Profiteers': 'Thundriks_Profiteers',
  'Grashrak’s Despoilers': 'Grashraks_Despoilers',
  'Skaeth’s Wild Hunt': 'Skaeths_Wild_Hunt'
}

const generateCardImageUrl = (warBand, fighterIndex, flipped, lang) => {
  return {
    path: `${publicUrl}images/cards/${lang}/`,
    fileName: `card_${warBandsNamesDependencies[warBand]}_${fighterIndex + 1}${flipped ? '_inspired' : ''}.jpg`.toLocaleLowerCase()
  }
}

const downloadFile = async (fileUrl) => {
  return await axios.get(fileUrl, {
    responseType: 'arraybuffer'
  }).then(({data}) => {
    return data
  })
}

const convertPngToJpg = (imageBuffer, cb) => {
  Jimp.read(imageBuffer, cb)
}

const storeApiCardImageIfNeeded = (imagePath, imageUrl) => {
  if (!fs.existsSync(imagePath)) {
    downloadFile(imageUrl).then((data) => {
      convertPngToJpg(arrayBufferToBuffer(data), (err, image) => {
        if (err) {
          console.log(err)
        } else {
          image.write(imagePath)
          console.log(imagePath, ' - image saved.')
        }
      })
    })
  }
}

const getApiGameData = axios.get('https://warhammerunderworlds.com/warbands/').then(({data}) => {
  return data
})

const parseApiGameData = (apiGameData, lang, storeImages) => {
  const hexRegExp = /#(?:[0-9a-f]{2}){2,4}/
  const dataInHtml = parse(apiGameData)
  const warBandElements = dataInHtml.querySelectorAll('.warbands__navigation .warbands__nav-item')
  const fighterElements = dataInHtml.querySelectorAll('.warbands__slider .warbands__slider-item')

  return [
      warBandElements.map((item, i) => {
      const fighterElement = fighterElements[i]
      const fighterIconItems = fighterElement.querySelectorAll('.warbands__fighters-nav .warbands__fighters-nav-item')

      // Prevent duplicates of slick slider.
      fighterIconItems.length = Math.ceil(fighterIconItems.length / 2)
      //

      // Name
      const warBandName = item.querySelector('.warbands__nav-title').text.trim()
      // Icon
      const warBandIconSrc = item.querySelector('.warbands__nav-img').getAttribute('src')
      // Color
      const warBandAccentColor = item.querySelector('.warbands__nav-img-container').getAttribute('style').match(hexRegExp).pop()

      // Fighters
      const fighterCardItems = fighterElement.querySelectorAll('.warbands__fighters .warbands__fighters-item')
      const fighters = fighterIconItems.map((fighterIconItem, fighterIndex) => {
        const fighterCardItem = fighterCardItems[fighterIndex]

        // Name
        const fighterName = fighterCardItem.querySelector('h4.warbands__fighters-title').rawText.trim()
        // Icon
        const fighterIcon = fighterIconItem.querySelector('.warbands__fighters-nav-img').getAttribute('src')
        // Description
        const fighterDescription = fighterCardItem.querySelector('h4.warbands__fighters-body').rawText.trim()

        const [cardDefault, cardFlipped] = fighterCardItem.querySelectorAll('.warbands__cards-wrapper a img')
        const defaultImageUrl = generateCardImageUrl(warBandName, fighterIndex, false, lang)
        const flippedImageUrl = generateCardImageUrl(warBandName, fighterIndex, true, lang)

        if (storeImages) {
          storeApiCardImageIfNeeded(`./public/images/cards/${lang}/${defaultImageUrl.fileName}`, cardDefault.getAttribute('src'))
          storeApiCardImageIfNeeded(`./public/images/cards/${lang}/${flippedImageUrl.fileName}`, cardFlipped.getAttribute('src'))
        }

        return {
          name: fighterName,
          icon: fighterIcon,
          description: fighterDescription,
          card: {
            default: defaultImageUrl.path + defaultImageUrl.fileName,
            flipped: flippedImageUrl.path + flippedImageUrl.fileName
          },
        }
      })
      //

      return {
        name: warBandName,
        icon: warBandIconSrc,
        color: warBandAccentColor,
        fighters
      }
    }),
    ...leakingWarBands
  ]
}

getApiGameData.then((data) => {
  saveGameDataFile("warBands", 'en', parseApiGameData(data, 'en', true))
  saveGameDataFile("warBands", 'ru', parseApiGameData(data, 'ru', false))
})

const leakingWarBands = [
  {
    "name": "Охотники на людей Хротгорна",
    "icon": "/warhamer-underworlds/images/war-bands/ic_warband_hrothgorns_mantrappers.png",
    "color": "#344e2f",
    "fighters": []
  },
  {
    "name": "Червегады",
    "icon": "/warhamer-underworlds/images/war-bands/ic_warband_the_wurmspat.png",
    "color": "#344e2f",
    "fighters": []
  },
  {
    "name": "Каратели из отряда Железной Души",
    "icon": "/warhamer-underworlds/images/war-bands/ic_warband_ironsouls_condemnors.png",
    "color": "#344e2f",
    "fighters": []
  },
  {
    "name": "Горестный полёт Леди Харроу",
    "icon": "/warhamer-underworlds/images/war-bands/ic_warband_lady_harrows_mournflight.png",
    "color": "#344e2f",
    "fighters": []
  },
  {
    "name": "Рёвоклыки Риппы",
    "icon": "/warhamer-underworlds/images/war-bands/ic_warband_rippas_snarlfangs.png",
    "color": "#344e2f",
    "fighters": []
  },
  {
    "name": "Мрачный Дозор",
    "icon": "/warhamer-underworlds/images/war-bands/ic_warband_the_grymwatch.png",
    "color": "#344e2f",
    "fighters": []
  }
]
