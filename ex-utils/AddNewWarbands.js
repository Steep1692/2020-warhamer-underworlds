// This file is created to parse data from the Android application.
const fs = require('fs');

// Adds leaking war band from the array below if it is not in the current war bands list.
const addMissingWarBandsData = () => {
  const path = 'public/locales/en/warBands.json';
  const fileData = JSON.parse(fs.readFileSync(path));

  const currentWarBandsNames = fileData.items.map(({name}) => {
    return name;
  })

  leakingWarBands.forEach((leakingWarBand) => {
    if (!currentWarBandsNames.includes(leakingWarBand.name)) {
      fileData.items.push(leakingWarBand);
    }
  });

  fs.writeFile(path, JSON.stringify(fileData, null, 2), () => {});
};

// Leaking war bands array.
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
];

addMissingWarBandsData();
