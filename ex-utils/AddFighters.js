const {saveGameDataFile} = require('./saveGameDataToFile')

var fighters = []

//Fighter - Garrek Gorebeard
var f1 = {}
f1.leadership = true
f1.name = 'Гаррек Окровавленная Борода'
f1.iconName = 'ic_warband_garreks_reavers_1'
f1.cardName = 'card_garreks_reavers_1'
f1.cardInspiredName = 'card_garreks_reavers_1_inspired'
f1.descriptionInspired = 'Не менее трех бойцов выбыли из игры'
f1.healthPoints = 4

f1.defenceStyle = 'evasion'

f1.movementDistance = 4
f1.defenceValue = 1

f1.nameInspired = 'Гаррек Вдохновленный'
f1.movementDistanceInspired = 5
f1.defenceValueInspired = 1

fighters.push(f1)


//Fighter - Karsus the Chained
var f2 = {}
f2.name = 'Карсус Закованный'
f2.iconName = 'ic_warband_garreks_reavers_2'
f2.cardName = 'card_garreks_reavers_2'
f2.cardInspiredName = 'card_garreks_reavers_2_inspired'
f2.descriptionInspired = 'Не менее трех бойцов выбыли из игры'
f2.healthPoints = 3

f2.defenceStyle = 'evasion'

f2.movementDistance = 4
f2.defenceValue = 1

f2.nameInspired = 'Карсус Вдохновленный'
f2.movementDistanceInspired = 5
f2.defenceValueInspired = 1

fighters.push(f2)


//Fighter - Blooded Saek
var f3 = {}
f3.name = 'Кровавый Саэк'
f3.iconName = 'ic_warband_garreks_reavers_3'
f3.cardName = 'card_garreks_reavers_3'
f3.cardInspiredName = 'card_garreks_reavers_3_inspired'
f3.descriptionInspired = 'Не менее трех бойцов выбыли из игры'
f3.healthPoints = 3

f3.defenceStyle = 'evasion'

f3.movementDistance = 4
f3.defenceValue = 1

f3.nameInspired = 'Саэк Вдохновленный'
f3.movementDistanceInspired = 5
f3.defenceValueInspired = 1

fighters.push(f3)


//Fighter - Targor
var f4 = {}
f4.name = 'Таргор'
f4.iconName = 'ic_warband_garreks_reavers_4'
f4.cardName = 'card_garreks_reavers_4'
f4.cardInspiredName = 'card_garreks_reavers_4_inspired'
f4.descriptionInspired = 'Не менее трех бойцов выбыли из игры'
f4.healthPoints = 2

f4.defenceStyle = 'evasion'

f4.movementDistance = 4
f4.defenceValue = 1

f4.nameInspired = 'Таргор Вдохновленный'
f4.movementDistanceInspired = 5
f4.defenceValueInspired = 1

fighters.push(f4)


//Fighter - Arnulf
var f5 = {}
f5.name = 'Арнулф'
f5.iconName = 'ic_warband_garreks_reavers_5'
f5.cardName = 'card_garreks_reavers_5'
f5.cardInspiredName = 'card_garreks_reavers_5_inspired'
f5.descriptionInspired = 'Не менее трех бойцов выбыли из игры'
f5.healthPoints = 2

f5.defenceStyle = 'evasion'

f5.movementDistance = 4
f5.defenceValue = 1

f5.nameInspired = 'Арнулф Вдохновленный'
f5.movementDistanceInspired = 5
f5.defenceValueInspired = 1

fighters.push(f5)


//Fighter - Severin Steelheart
var f1 = {}
f1.leadership = true
f1.name = 'Северин Стальное Сердце'
f1.iconName = 'ic_warband_steelhearts_champions_1'
f1.cardName = 'card_steelhearts_champions_1'
f1.cardInspiredName = 'card_steelhearts_champions_1_inspired'
f1.descriptionInspired = 'При броске кубиков этот боец получает ' +
  '«Блок» или «Критический успех», если его атакуют'
f1.healthPoints = 4

f1.defenceStyle = 'block'

f1.movementDistance = 3
f1.defenceValue = 1

f1.nameInspired = 'Стальное Сердце Вдохновленный'
f1.movementDistanceInspired = 3
f1.defenceValueInspired = 2

fighters.push(f1)


//Fighter - Angharad Brightshield
var f2 = {}
f2.name = 'Ангард Светлый Щит'
f2.iconName = 'ic_warband_steelhearts_champions_2'
f2.cardName = 'card_steelhearts_champions_2'
f2.cardInspiredName = 'card_steelhearts_champions_2_inspired'
f2.descriptionInspired = 'При броске кубиков этот боец получает ' +
  '«Блок» или «Критический успех», если его атакуют'
f2.healthPoints = 4

f2.defenceStyle = 'block'

f2.movementDistance = 3
f2.defenceValue = 1

f2.nameInspired = 'Светлый Щит Вдохновленный'
f2.movementDistanceInspired = 3
f2.defenceValueInspired = 2

fighters.push(f2)  //Fighter - Obryn the Bold
var f3 = {}
f3.name = 'Обрин Отважный'
f3.iconName = 'ic_warband_steelhearts_champions_3'
f3.cardName = 'card_steelhearts_champions_3'
f3.cardInspiredName = 'card_steelhearts_champions_3_inspired'
f3.descriptionInspired = 'При броске кубиков этот боец получает ' +
  '«Блок» или «Критический успех», если его атакуют'
f3.healthPoints = 4

f3.defenceStyle = 'block'

f3.movementDistance = 3
f3.defenceValue = 1

f3.nameInspired = 'Обрин Вдохновленный'
f3.movementDistanceInspired = 3
f3.defenceValueInspired = 2

fighters.push(f3)


//Fighter - The Sepulchral Warden
var f1 = {}
f1.leadership = true
f1.name = 'Могильный Смотритель'
f1.iconName = 'ic_warband_sepulchral_guard_1'
f1.cardName = 'card_sepulchral_guard_1'
f1.cardInspiredName = 'card_sepulchral_guard_1_inspired'
f1.descriptionInspired = 'Два дружественных бойца возвращаются ' +
  'на поле боя'
f1.healthPoints = 4

f1.defenceStyle = 'evasion'

f1.movementDistance = 2
f1.defenceValue = 1

f1.nameInspired = 'Смотритель Вдохновленный'
f1.movementDistanceInspired = 3
f1.defenceValueInspired = 1

fighters.push(f1)


//Fighter - The Prince of Dust
var f2 = {}
f2.name = 'Принц Пыли'
f2.iconName = 'ic_warband_sepulchral_guard_2'
f2.cardName = 'card_sepulchral_guard_2'
f2.cardInspiredName = 'card_sepulchral_guard_2_inspired'
f2.descriptionInspired = 'Этот боец возвращается на поле боя'
f2.healthPoints = 3

f2.defenceStyle = 'evasion'

f2.movementDistance = 2
f2.defenceValue = 1

f2.nameInspired = 'Принц Вдохновленный'
f2.movementDistanceInspired = 3
f2.defenceValueInspired = 1

fighters.push(f2)


//Fighter - The Harvester
var f3 = {}
f3.name = 'Жнец'
f3.iconName = 'ic_warband_sepulchral_guard_3'
f3.cardName = 'card_sepulchral_guard_3'
f3.cardInspiredName = 'card_sepulchral_guard_3_inspired'
f3.descriptionInspired = 'Этот боец возвращается на поле боя'
f3.healthPoints = 3

f3.defenceStyle = 'evasion'

f3.movementDistance = 2
f3.defenceValue = 1

f3.nameInspired = 'Жнец Вдохновленный'
f3.movementDistanceInspired = 3
f3.defenceValueInspired = 1

fighters.push(f3)


//Fighter - The Champion
var f4 = {}
f4.name = 'Чемпион'
f4.iconName = 'ic_warband_sepulchral_guard_4'
f4.cardName = 'card_sepulchral_guard_4'
f4.cardInspiredName = 'card_sepulchral_guard_4_inspired'
f4.descriptionInspired = 'Этот боец возвращается на поле боя'
f4.healthPoints = 3

f4.defenceStyle = 'evasion'

f4.movementDistance = 2
f4.defenceValue = 1

f4.nameInspired = 'Чемпион Вдохновленный'
f4.movementDistanceInspired = 3
f4.defenceValueInspired = 1

fighters.push(f4)


//Fighter - Petitioner 1
var f5 = {}
f5.name = 'Проситель'
f5.iconName = 'ic_warband_sepulchral_guard_5'
f5.cardName = 'card_sepulchral_guard_5'
f5.cardInspiredName = 'card_sepulchral_guard_5_inspired'
f5.descriptionInspired = 'Этот боец возвращается на поле боя'
f5.healthPoints = 2

f5.defenceStyle = 'evasion'

f5.movementDistance = 2
f5.defenceValue = 1

f5.nameInspired = 'Вдохновленный Проситель'
f5.movementDistanceInspired = 3
f5.defenceValueInspired = 1

fighters.push(f5)


//Fighter - Petitioner 2
var f6 = {}
f6.name = 'Проситель'
f6.iconName = 'ic_warband_sepulchral_guard_6'
f6.cardName = 'card_sepulchral_guard_6'
f6.cardInspiredName = 'card_sepulchral_guard_6_inspired'
f6.descriptionInspired = 'Этот боец возвращается на поле боя'
f6.healthPoints = 2

f6.defenceStyle = 'evasion'

f6.movementDistance = 2
f6.defenceValue = 1

f6.nameInspired = 'Вдохновленный Проситель'
f6.movementDistanceInspired = 3
f6.defenceValueInspired = 1

fighters.push(f6)


//Fighter - Petitioner 3
var f7 = {}
f7.name = 'Проситель'
f7.iconName = 'ic_warband_sepulchral_guard_7'
f7.cardName = 'card_sepulchral_guard_7'
f7.cardInspiredName = 'card_sepulchral_guard_7_inspired'
f7.descriptionInspired = 'Этот боец возвращается на поле боя'
f7.healthPoints = 2

f7.defenceStyle = 'evasion'

f7.movementDistance = 2
f7.defenceValue = 1

f7.nameInspired = 'Вдохновленный Проситель'
f7.movementDistanceInspired = 3
f7.defenceValueInspired = 1

fighters.push(f7)


//Fighter - Sanson Farstrider
var f1 = {}
f1.leadership = true
f1.name = 'Сансон Странник'
f1.iconName = 'ic_warband_the_farstriders_1'
f1.cardName = 'card_the_farstriders_1'
f1.cardInspiredName = 'card_the_farstriders_1_inspired'
f1.descriptionInspired = 'Этот боец заканчивает фазу действия на вражеской территории'
f1.healthPoints = 4

f1.defenceStyle = 'block'

f1.movementDistance = 4
f1.defenceValue = 1

f1.nameInspired = 'Странник Вдохновленный'
f1.movementDistanceInspired = 4
f1.defenceValueInspired = 2

fighters.push(f1)


//Fighter - Almeric Eagle-Eye
var f2 = {}
f2.name = 'Алмерик Орлиный Глаз'
f2.iconName = 'ic_warband_the_farstriders_2'
f2.cardName = 'card_the_farstriders_2'
f2.cardInspiredName = 'card_the_farstriders_2_inspired'
f2.descriptionInspired = 'Этот боец заканчивает фазу действия на вражеской территории'
f2.healthPoints = 4

f2.defenceStyle = 'block'

f2.movementDistance = 3
f2.defenceValue = 1

f2.nameInspired = 'Орлиный Глаз Вдохновленный'
f2.movementDistanceInspired = 3
f2.defenceValueInspired = 2

fighters.push(f2)


//Fighter - Elias Swiftblade
var f3 = {}
f3.name = 'Элиас Быстрый Клинок'
f3.iconName = 'ic_warband_the_farstriders_3'
f3.cardName = 'card_the_farstriders_3'
f3.cardInspiredName = 'card_the_farstriders_3_inspired'
f3.descriptionInspired = 'Этот боец заканчивает фазу действия на вражеской территории'
f3.healthPoints = 4

f3.defenceStyle = 'block'

f3.movementDistance = 3
f3.defenceValue = 1

f3.nameInspired = 'Быстрый Клинок Вдохновленный'
f3.movementDistanceInspired = 3
f3.defenceValueInspired = 2

fighters.push(f3)


//Fighter - Magore Redhand
var f1 = {}
f1.leadership = true
f1.name = 'Магор Красная Рука'
f1.iconName = 'ic_warband_magores_fiends_1'
f1.cardName = 'card_magores_fiends_1'
f1.cardInspiredName = 'card_magores_fiends_1_inspired'
f1.descriptionInspired = 'Одно из действий «Атака» этого бойца достигает цели'
f1.healthPoints = 4

f1.defenceStyle = 'block'

f1.movementDistance = 3
f1.defenceValue = 1

f1.nameInspired = 'Магор Вдохновленный'
f1.movementDistanceInspired = 4
f1.defenceValueInspired = 1

fighters.push(f1)  //Fighter - Riptooth
var f2 = {}
f2.name = 'Клыкарь'
f2.iconName = 'ic_warband_magores_fiends_2'
f2.cardName = 'card_magores_fiends_2'
f2.cardInspiredName = 'card_magores_fiends_2_inspired'
f2.descriptionInspired = 'Одно из действий «Атака» этого бойца достигает цели'
f2.healthPoints = 4

f2.defenceStyle = 'evasion'

f2.movementDistance = 4
f2.defenceValue = 1

f2.nameInspired = 'Клыкарь Вдохновленный'
f2.movementDistanceInspired = 5
f2.defenceValueInspired = 2

fighters.push(f2)


//Fighter - Ghartok Flayskull
var f3 = {}
f3.name = 'Гарток Сдиратель Черепов'
f3.iconName = 'ic_warband_magores_fiends_3'
f3.cardName = 'card_magores_fiends_3'
f3.cardInspiredName = 'card_magores_fiends_3_inspired'
f3.descriptionInspired = 'Одно из действий «Атака» этого бойца достигает цели'
f3.healthPoints = 4

f3.defenceStyle = 'block'

f3.movementDistance = 3
f3.defenceValue = 1

f3.nameInspired = 'Гарток Вдохновленный'
f3.movementDistanceInspired = 4
f3.defenceValueInspired = 1

fighters.push(f3)


//Fighter - Zharkus the Bloodsighted
var f4 = {}
f4.name = 'Заркус Кровавый Взор'
f4.iconName = 'ic_warband_magores_fiends_4'
f4.cardName = 'card_magores_fiends_4'
f4.cardInspiredName = 'card_magores_fiends_4_inspired'
f4.descriptionInspired = 'Одно из действий «Атака» этого бойца достигает цели'
f4.healthPoints = 4

f4.defenceStyle = 'block'

f4.movementDistance = 3
f4.defenceValue = 1

f4.nameInspired = 'Заркус Вдохновленный'
f4.movementDistanceInspired = 4
f4.defenceValueInspired = 1

fighters.push(f4)


//Fighter - Averon Stormsire
var f1 = {}
f1.leadership = true
f1.name = 'Аверон Отец Грозы'
f1.iconName = 'ic_warband_stormsires_cursebreakers_1'
f1.cardName = 'card_stormsires_cursebreakers_1'
f1.cardInspiredName = 'card_stormsires_cursebreakers_1_inspired'
f1.descriptionInspired = 'Этот боец успешно сотворяет заклинание.'
f1.healthPoints = 4

f1.defenceStyle = 'block'

f1.movementDistance = 3
f1.defenceValue = 1

f1.nameInspired = 'Отец Грозы Вдохновленный'
f1.movementDistanceInspired = 3
f1.defenceValueInspired = 2

fighters.push(f1)


//Fighter - Ammis Dawnguard
var f2 = {}
f2.name = 'Аммис Страж Рассвета'
f2.iconName = 'ic_warband_stormsires_cursebreakers_2'
f2.cardName = 'card_stormsires_cursebreakers_2'
f2.cardInspiredName = 'card_stormsires_cursebreakers_2_inspired'
f2.descriptionInspired = 'Этот боец успешно сотворяет заклинание.'
f2.healthPoints = 4

f2.defenceStyle = 'block'

f2.movementDistance = 3
f2.defenceValue = 1

f2.nameInspired = 'Страж Рассвета Вдохновленный'
f2.movementDistanceInspired = 3
f2.defenceValueInspired = 1

fighters.push(f2)


//Fighter - Rastus the Charmed
var f3 = {}
f3.name = 'Растус Зачарованный'
f3.iconName = 'ic_warband_stormsires_cursebreakers_3'
f3.cardName = 'card_stormsires_cursebreakers_3'
f3.cardInspiredName = 'card_stormsires_cursebreakers_3_inspired'
f3.descriptionInspired = 'Этот боец успешно сотворяет заклинание.'
f3.healthPoints = 4

f3.defenceStyle = 'block'

f3.movementDistance = 3
f3.defenceValue = 1

f3.nameInspired = 'Растус Вдохновленный'
f3.movementDistanceInspired = 3
f3.defenceValueInspired = 1

fighters.push(f3)


//Fighter - Briar Queen
var f1 = {}
f1.leadership = true
f1.name = 'Вересковая Королева'
f1.iconName = 'ic_warband_thorns_of_the_briar_queen_1'
f1.cardName = 'card_thorns_of_the_briar_queen_1'
f1.cardInspiredName = 'card_thorns_of_the_briar_queen_1_inspired'
f1.descriptionInspired = 'Этот боец расположен смежно с вражеским бойцом в начале вашей активации'
f1.healthPoints = 4

f1.defenceStyle = 'evasion'

f1.movementDistance = 3
f1.defenceValue = 2

f1.nameInspired = 'Вересковая Королева Вдохновленная'
f1.movementDistanceInspired = 4
f1.defenceValueInspired = 2

fighters.push(f1)


//Fighter - Varclav the Cruel
var f2 = {}
f2.name = 'Варклав Жестокий'
f2.iconName = 'ic_warband_thorns_of_the_briar_queen_2'
f2.cardName = 'card_thorns_of_the_briar_queen_2'
f2.cardInspiredName = 'card_thorns_of_the_briar_queen_2_inspired'
f2.descriptionInspired = 'Этот боец расположен смежно с вражеским бойцом в начале вашей активации'
f2.healthPoints = 4

f2.defenceStyle = 'evasion'

f2.movementDistance = 3
f2.defenceValue = 2

f2.nameInspired = 'Варклав Вдохновленный'
f2.movementDistanceInspired = 4
f2.defenceValueInspired = 2

fighters.push(f2)


//Fighter - The Ever-Hanged
var f3 = {}
f3.name = 'Вечный Висельник'
f3.iconName = 'ic_warband_thorns_of_the_briar_queen_3'
f3.cardName = 'card_thorns_of_the_briar_queen_3'
f3.cardInspiredName = 'card_thorns_of_the_briar_queen_3_inspired'
f3.descriptionInspired = 'Этот боец расположен смежно с вражеским бойцом в начале вашей активации'
f3.healthPoints = 3

f3.defenceStyle = 'evasion'

f3.movementDistance = 4
f3.defenceValue = 1

f3.nameInspired = 'Вечный Висельник Вдохновленный'
f3.movementDistanceInspired = 4
f3.defenceValueInspired = 2

fighters.push(f3)


//Fighter - Chainrasp 1
var f4 = {}
f4.name = 'Скрежет Цепей'
f4.iconName = 'ic_warband_thorns_of_the_briar_queen_4'
f4.cardName = 'card_thorns_of_the_briar_queen_4'
f4.cardInspiredName = 'card_thorns_of_the_briar_queen_4_inspired'
f4.descriptionInspired = 'Этот боец расположен смежно с вражеским бойцом в начале вашей активации'
f4.healthPoints = 2

f4.defenceStyle = 'evasion'

f4.movementDistance = 3
f4.defenceValue = 1

f4.nameInspired = 'Скрежет Цепей Вдохновленный'
f4.movementDistanceInspired = 4
f4.defenceValueInspired = 2

fighters.push(f4)


//Fighter - Chainrasp 2
var f5 = {}
f5.name = 'Скрежет Цепей'
f5.iconName = 'ic_warband_thorns_of_the_briar_queen_5'
f5.cardName = 'card_thorns_of_the_briar_queen_5'
f5.cardInspiredName = 'card_thorns_of_the_briar_queen_5_inspired'
f5.descriptionInspired = 'Этот боец расположен смежно с вражеским бойцом в начале вашей активации'
f5.healthPoints = 2

f5.defenceStyle = 'evasion'

f5.movementDistance = 3
f5.defenceValue = 1

f5.nameInspired = 'Скрежет Цепей Вдохновленный'
f5.movementDistanceInspired = 4
f5.defenceValueInspired = 2

fighters.push(f5)


//Fighter - Chainrasp 3
var f6 = {}
f6.name = 'Скрежет Цепей'
f6.iconName = 'ic_warband_thorns_of_the_briar_queen_6'
f6.cardName = 'card_thorns_of_the_briar_queen_6'
f6.cardInspiredName = 'card_thorns_of_the_briar_queen_6_inspired'
f6.descriptionInspired = 'Этот боец расположен смежно с вражеским бойцом в начале вашей активации'
f6.healthPoints = 2

f6.defenceStyle = 'evasion'

f6.movementDistance = 3
f6.defenceValue = 1

f6.nameInspired = 'Скрежет Цепей Вдохновленный'
f6.movementDistanceInspired = 4
f6.defenceValueInspired = 2

fighters.push(f6)


//Fighter - Chainrasp 4
var f7 = {}
f7.name = 'Скрежет Цепей'
f7.iconName = 'ic_warband_thorns_of_the_briar_queen_7'
f7.cardName = 'card_thorns_of_the_briar_queen_7'
f7.cardInspiredName = 'card_thorns_of_the_briar_queen_7_inspired'
f7.descriptionInspired = 'Этот боец расположен смежно с вражеским бойцом в начале вашей активации'
f7.healthPoints = 2

f7.defenceStyle = 'evasion'

f7.movementDistance = 3
f7.defenceValue = 1

f7.nameInspired = 'Скрежет Цепей Вдохновленный'
f7.movementDistanceInspired = 4
f7.defenceValueInspired = 2

fighters.push(f7)


//Fighter - Fjul-Grimnir
var f1 = {}
f1.leadership = true
f1.name = 'Фьюл-Гримнир'
f1.iconName = 'ic_warband_the_chosen_axes_1'
f1.cardName = 'card_the_chosen_axes_1'
f1.cardInspiredName = 'card_the_chosen_axes_1_inspired'
f1.descriptionInspired = 'Этот боец удерживает цель в конце фазы действия'
f1.healthPoints = 4

f1.defenceStyle = 'block'

f1.movementDistance = 2
f1.defenceValue = 1

f1.nameInspired = 'Фьюл-Гримнир Вдохновленный'
f1.healthInspired = 5
f1.movementDistanceInspired = 3
f1.defenceValueInspired = 1

fighters.push(f1)


//Fighter - Tefk Flamebearer
var f2 = {}
f2.name = 'Тэфк-Огненосец'
f2.iconName = 'ic_warband_the_chosen_axes_2'
f2.cardName = 'card_the_chosen_axes_2'
f2.cardInspiredName = 'card_the_chosen_axes_2_inspired'
f2.descriptionInspired = 'Этот боец удерживает цель в конце фазы действия'
f2.healthPoints = 3

f2.defenceStyle = 'block'

f2.movementDistance = 2
f2.defenceValue = 1

f2.nameInspired = 'Тэфк Вдохновленный'
f2.healthInspired = 4
f2.movementDistanceInspired = 3
f2.defenceValueInspired = 1

fighters.push(f2)


//Fighter - Mad Maegrim
var f3 = {}
f3.name = 'Безумный Маэгрим'
f3.iconName = 'ic_warband_the_chosen_axes_3'
f3.cardName = 'card_the_chosen_axes_3'
f3.cardInspiredName = 'card_the_chosen_axes_3_inspired'
f3.descriptionInspired = 'Этот боец удерживает цель в конце фазы действия'
f3.healthPoints = 3

f3.defenceStyle = 'block'

f3.movementDistance = 2
f3.defenceValue = 1

f3.nameInspired = 'Маэгрим Вдохновленный'
f3.healthInspired = 4
f3.movementDistanceInspired = 3
f3.defenceValueInspired = 1

fighters.push(f3)


//Fighter - Vol Orrukbane
var f4 = {}
f4.name = 'Вол Орручья Погибель'
f4.iconName = 'ic_warband_the_chosen_axes_4'
f4.cardName = 'card_the_chosen_axes_4'
f4.cardInspiredName = 'card_the_chosen_axes_4_inspired'
f4.descriptionInspired = 'Этот боец удерживает цель в конце фазы действия'
f4.healthPoints = 3

f4.defenceStyle = 'block'

f4.movementDistance = 2
f4.defenceValue = 1

f4.nameInspired = 'Вол Вдохновленный'
f4.healthInspired = 4
f4.movementDistanceInspired = 3
f4.defenceValueInspired = 1

fighters.push(f4)


//Fighter - Skritch Spiteclaw
var f1 = {}
f1.leadership = true
f1.name = 'Скритч Злой Коготь'
f1.iconName = 'ic_warband_spiteclaws_swarm_1'
f1.cardName = 'card_spiteclaws_swarm_1'
f1.cardInspiredName = 'card_spiteclaws_swarm_1_inspired'
f1.descriptionInspired = 'Игрок выбирает этого бойца, когда использует уловку'
f1.healthPoints = 4

f1.defenceStyle = 'evasion'

f1.movementDistance = 5
f1.defenceValue = 1

f1.nameInspired = 'Скритч Вдохновленный'
f1.movementDistanceInspired = 5
f1.defenceValueInspired = 2

fighters.push(f1)


//Fighter - Krrk the Almost-trusted
var f2 = {}
f2.name = 'Кррк Почти-честный'
f2.iconName = 'ic_warband_spiteclaws_swarm_2'
f2.cardName = 'card_spiteclaws_swarm_2'
f2.cardInspiredName = 'card_spiteclaws_swarm_2_inspired'
f2.descriptionInspired = 'Игрок выбирает этого бойца, когда использует уловку'
f2.healthPoints = 3

f2.defenceStyle = 'block'

f2.movementDistance = 5
f2.defenceValue = 1

f2.nameInspired = 'Кррк Вдохновленный'
f2.movementDistanceInspired = 5
f2.defenceValueInspired = 2

fighters.push(f2)


//Fighter - Lurking Skaven
var f3 = {}
f3.name = 'Затаившийся Скавен'
f3.iconName = 'ic_warband_spiteclaws_swarm_3'
f3.cardName = 'card_spiteclaws_swarm_3'
f3.cardInspiredName = 'card_spiteclaws_swarm_3_inspired'
f3.descriptionInspired = 'Игрок выбирает этого бойца, когда использует уловку'
f3.healthPoints = 2

f3.defenceStyle = 'evasion'

f3.movementDistance = 5
f3.defenceValue = 2

f3.nameInspired = 'Затаившийся Скавен Вдохновленный'
f3.movementDistanceInspired = 5
f3.defenceValueInspired = 2

fighters.push(f3)


//Fighter - Hungering Skaven
var f4 = {}
f4.name = 'Голодный Скавен'
f4.iconName = 'ic_warband_spiteclaws_swarm_4'
f4.cardName = 'card_spiteclaws_swarm_4'
f4.cardInspiredName = 'card_spiteclaws_swarm_4_inspired'
f4.descriptionInspired = 'Игрок выбирает этого бойца, когда использует уловку'
f4.healthPoints = 2

f4.defenceStyle = 'evasion'

f4.movementDistance = 5
f4.defenceValue = 1

f4.nameInspired = 'Голодный Скавен Вдохновленный'
f4.movementDistanceInspired = 5
f4.defenceValueInspired = 2

fighters.push(f4)


//Fighter - Festering Skaven
var f5 = {}
f5.name = 'Гнойный Скавен'
f5.iconName = 'ic_warband_spiteclaws_swarm_5'
f5.cardName = 'card_spiteclaws_swarm_5'
f5.cardInspiredName = 'card_spiteclaws_swarm_5_inspired'
f5.descriptionInspired = 'Игрок выбирает этого бойца, когда использует уловку'
f5.healthPoints = 2

f5.defenceStyle = 'evasion'

f5.movementDistance = 5
f5.defenceValue = 1

f5.nameInspired = 'Гнойный Скавен Вдохновленный'
f5.movementDistanceInspired = 5
f5.defenceValueInspired = 2

fighters.push(f5)


//Fighter - Gurzag Ironskull
var f1 = {}
f1.leadership = true
f1.name = 'Гурзаг Железный Череп'
f1.iconName = 'ic_warband_ironskulls_boyz_1'
f1.cardName = 'card_ironskulls_boyz_1'
f1.cardInspiredName = 'card_ironskulls_boyz_1_inspired'
f1.descriptionInspired = 'Этому бойцу нанесен урон'
f1.healthPoints = 5

f1.defenceStyle = 'block'

f1.movementDistance = 3
f1.defenceValue = 1

f1.nameInspired = 'Гурзаг Вдохновленный'
f1.movementDistanceInspired = 3
f1.defenceValueInspired = 1

fighters.push(f1)


//Fighter - Bonekutta
var f2 = {}
f2.name = 'Костерез'
f2.iconName = 'ic_warband_ironskulls_boyz_2'
f2.cardName = 'card_ironskulls_boyz_2'
f2.cardInspiredName = 'card_ironskulls_boyz_2_inspired'
f2.descriptionInspired = 'Этому бойцу нанесен урон'
f2.healthPoints = 4

f2.defenceStyle = 'block'

f2.movementDistance = 3
f2.defenceValue = 1

f2.nameInspired = 'Костерез Вдохновленный'
f2.movementDistanceInspired = 3
f2.defenceValueInspired = 1

fighters.push(f2)


//Fighter - Basha
var f3 = {}
f3.name = 'Громила'
f3.iconName = 'ic_warband_ironskulls_boyz_3'
f3.cardName = 'card_ironskulls_boyz_3'
f3.cardInspiredName = 'card_ironskulls_boyz_3_inspired'
f3.descriptionInspired = 'Этому бойцу нанесен урон'
f3.healthPoints = 4

f3.defenceStyle = 'block'

f3.movementDistance = 3
f3.defenceValue = 1

f3.nameInspired = 'Громила Вдохновленный'
f3.movementDistanceInspired = 3
f3.defenceValueInspired = 1

fighters.push(f3)


//Fighter - Hakka
var f4 = {}
f4.name = 'Крошила'
f4.iconName = 'ic_warband_ironskulls_boyz_4'
f4.cardName = 'card_ironskulls_boyz_4'
f4.cardInspiredName = 'card_ironskulls_boyz_4_inspired'
f4.descriptionInspired = 'Этому бойцу нанесен урон'
f4.healthPoints = 4

f4.defenceStyle = 'block'

f4.movementDistance = 3
f4.defenceValue = 1

f4.nameInspired = 'Крошила Вдохновленный'
f4.movementDistanceInspired = 3
f4.defenceValueInspired = 1

fighters.push(f4)


//Fighter - Zarbag
var f1 = {}
f1.leadership = true
f1.name = 'Зарбаг'
f1.iconName = 'ic_warband_zarbags_gitz_1'
f1.cardName = 'card_zarbags_gitz_1'
f1.cardInspiredName = 'card_zarbags_gitz_1_inspired'
f1.descriptionInspired = 'У вас не менее 3 очков славы'
f1.healthPoints = 3

f1.defenceStyle = 'evasion'

f1.movementDistance = 3
f1.defenceValue = 2

f1.nameInspired = 'Зарбаг Вдохновленный'
f1.movementDistanceInspired = 4
f1.defenceValueInspired = 2

fighters.push(f1)


//Fighter - Drizgit da Squig Herder
var f2 = {}
f2.name = 'Дризгит Сквиговод'
f2.iconName = 'ic_warband_zarbags_gitz_2'
f2.cardName = 'card_zarbags_gitz_2'
f2.cardInspiredName = 'card_zarbags_gitz_2_inspired'
f2.descriptionInspired = 'У вас не менее 3 очков славы'
f2.healthPoints = 3

f2.defenceStyle = 'block'

f2.movementDistance = 3
f2.defenceValue = 1

f2.nameInspired = 'Дризгит Вдохновленный'
f2.movementDistanceInspired = 4
f2.defenceValueInspired = 1

fighters.push(f2)


//Fighter - Bonekrakka
var f3 = {}
f3.name = 'Костелом (Сквиг)'
f3.iconName = 'ic_warband_zarbags_gitz_3'
f3.cardName = 'card_zarbags_gitz_3'
f3.cardInspiredName = 'card_zarbags_gitz_3_inspired'
f3.descriptionInspired = 'Дружественный Дризгит вне игры'
f3.healthPoints = 2

f3.defenceStyle = 'evasion'

f3.movementDistance = 3
f3.defenceValue = 1

f3.nameInspired = 'Костелом Вдохновленный (Сквиг)'
f3.movementDistanceInspired = 3
f3.defenceValueInspired = 2

fighters.push(f3)


//Fighter - Gobbaluk
var f4 = {}
f4.name = 'Гоббалук (Сквиг)'
f4.iconName = 'ic_warband_zarbags_gitz_4'
f4.cardName = 'card_zarbags_gitz_4'
f4.cardInspiredName = 'card_zarbags_gitz_4_inspired'
f4.descriptionInspired = 'Дружественный Дризгит вне игры'
f4.healthPoints = 2

f4.defenceStyle = 'evasion'

f4.movementDistance = 3
f4.defenceValue = 1

f4.nameInspired = 'Гоббалук Вдохновленный (Сквиг)'
f4.movementDistanceInspired = 3
f4.defenceValueInspired = 2

fighters.push(f4)


//Fighter - Snirk Sourtongue
var f5 = {}
f5.name = 'Снирк Кислый Язык'
f5.iconName = 'ic_warband_zarbags_gitz_5'
f5.cardName = 'card_zarbags_gitz_5'
f5.cardInspiredName = 'card_zarbags_gitz_5_inspired'
f5.descriptionInspired = '-'
f5.healthPoints = 3

f5.defenceStyle = 'evasion'

f5.movementDistance = 2
f5.defenceValue = 1

f5.nameInspired = 'Кислый Язык Вдохновленный'
f5.movementDistanceInspired = 0
f5.defenceValueInspired = 3

fighters.push(f5)


//Fighter - Prog da Netter
var f6 = {}
f6.name = 'Прог-Сетевик'
f6.iconName = 'ic_warband_zarbags_gitz_6'
f6.cardName = 'card_zarbags_gitz_6'
f6.cardInspiredName = 'card_zarbags_gitz_6_inspired'
f6.descriptionInspired = 'У вас не менее 3 очков славы'
f6.healthPoints = 2

f6.defenceStyle = 'evasion'

f6.movementDistance = 3
f6.defenceValue = 1

f6.nameInspired = 'Прог Вдохновленный'
f6.movementDistanceInspired = 4
f6.defenceValueInspired = 2

fighters.push(f6)


//Fighter - Stikkit
var f7 = {}
f7.name = 'Стиккит'
f7.iconName = 'ic_warband_zarbags_gitz_7'
f7.cardName = 'card_zarbags_gitz_7'
f7.cardInspiredName = 'card_zarbags_gitz_7_inspired'
f7.descriptionInspired = 'У вас не менее 3 очков славы'
f7.healthPoints = 2

f7.defenceStyle = 'evasion'

f7.movementDistance = 3
f7.defenceValue = 1

f7.nameInspired = 'Стиккит Вдохновленный'
f7.movementDistanceInspired = 4
f7.defenceValueInspired = 2

fighters.push(f7)


//Fighter - Redkap
var f8 = {}
f8.name = 'Красный Колпак'
f8.iconName = 'ic_warband_zarbags_gitz_8'
f8.cardName = 'card_zarbags_gitz_8'
f8.cardInspiredName = 'card_zarbags_gitz_8_inspired'
f8.descriptionInspired = 'У вас не менее 3 очков славы'
f8.healthPoints = 2

f8.defenceStyle = 'evasion'

f8.movementDistance = 3
f8.defenceValue = 1

f8.nameInspired = 'Красный Колпак Вдохновленный'
f8.movementDistanceInspired = 4
f8.defenceValueInspired = 2

fighters.push(f8)


//Fighter - Dibbz
var f9 = {}
f9.name = 'Диббз'
f9.iconName = 'ic_warband_zarbags_gitz_9'
f9.cardName = 'card_zarbags_gitz_9'
f9.cardInspiredName = 'card_zarbags_gitz_9_inspired'
f9.descriptionInspired = 'У вас не менее 3 очков славы'
f9.healthPoints = 2

f9.defenceStyle = 'evasion'

f9.movementDistance = 3
f9.defenceValue = 1

f9.nameInspired = 'Диббз Вдохновленный'
f9.movementDistanceInspired = 4
f9.defenceValueInspired = 2

fighters.push(f9)


//Fighter - Vortemis the All-seeing
var f1 = {}
f1.leadership = true
f1.name = 'Вортемис Всевидящий'
f1.iconName = 'ic_warband_the_eyes_of_the_nine_1'
f1.cardName = 'card_the_eyes_of_the_nine_1'
f1.cardInspiredName = 'card_the_eyes_of_the_nine_1_inspired'
f1.descriptionInspired = 'Этот боец успешно выполняет действие «Атака» с Дальностью 3 или более'
f1.healthPoints = 4

f1.defenceStyle = 'evasion'

f1.movementDistance = 4
f1.defenceValue = 1

f1.nameInspired = 'Вортемис Вдохновленный'
f1.movementDistanceInspired = 4
f1.defenceValueInspired = 2

fighters.push(f1)


//Fighter - K’charik
var f2 = {}
f2.name = 'К’чарик'
f2.iconName = 'ic_warband_the_eyes_of_the_nine_2'
f2.cardName = 'card_the_eyes_of_the_nine_2'
f2.cardInspiredName = 'card_the_eyes_of_the_nine_2_inspired'
f2.descriptionInspired = 'Заклинание успешно сотворено смежным бойцом'
f2.healthPoints = 3

f2.defenceStyle = 'block'

f2.movementDistance = 4
f2.defenceValue = 1

f2.nameInspired = 'К’чарик Вдохновленный'
f2.movementDistanceInspired = 4
f2.defenceValueInspired = 1

fighters.push(f2)


//Fighter - Narvia
var f3 = {}
f3.name = 'Нарвия'
f3.iconName = 'ic_warband_the_eyes_of_the_nine_3'
f3.cardName = 'card_the_eyes_of_the_nine_3'
f3.cardInspiredName = 'card_the_eyes_of_the_nine_3_inspired'
f3.descriptionInspired = 'Этот боец успешно выполняет действие «Атака» с Дальностью 3 или более'
f3.healthPoints = 2

f3.defenceStyle = 'block'

f3.movementDistance = 4
f3.defenceValue = 1

f3.nameInspired = 'Нарвия Вдохновленная'
f3.movementDistanceInspired = 4
f3.defenceValueInspired = 1

fighters.push(f3)


//Fighter - Turosh
var f4 = {}
f4.name = 'Турош'
f4.iconName = 'ic_warband_the_eyes_of_the_nine_4'
f4.cardName = 'card_the_eyes_of_the_nine_4'
f4.cardInspiredName = 'card_the_eyes_of_the_nine_4_inspired'
f4.descriptionInspired = 'Этот боец успешно выполняет действие «Атака» с Дальностью 3 или более'
f4.healthPoints = 2

f4.defenceStyle = 'evasion'

f4.movementDistance = 4
f4.defenceValue = 1

f4.nameInspired = 'Турош Вдохновленный'
f4.movementDistanceInspired = 4
f4.defenceValueInspired = 1

fighters.push(f4)


//Fighter - Blue Horror
var f5 = {}
f5.name = 'Синий Ужас'
f5.iconName = 'ic_warband_the_eyes_of_the_nine_5'
f5.cardName = 'card_the_eyes_of_the_nine_5'
f5.cardInspiredName = 'none'
f5.descriptionInspired = 'none'
f5.healthPoints = 2

f5.defenceStyle = 'evasion'

f5.movementDistance = 3
f5.defenceValue = 1

f5.nameInspired = 'none'
f5.movementDistanceInspired = 0
f5.defenceValueInspired = 0

fighters.push(f5)


//Fighter - Brimstone Horrors
var f6 = {}
f6.name = 'Серные Ужасы'
f6.iconName = 'ic_warband_the_eyes_of_the_nine_6'
f6.cardName = 'card_the_eyes_of_the_nine_6'
f6.cardInspiredName = 'card_the_eyes_of_the_nine_6_inspired'
f6.descriptionInspired = 'none'
f6.healthPoints = 1

f6.defenceStyle = 'evasion'

f6.movementDistance = 3
f6.defenceValue = 1

f6.nameInspired = 'none'
f6.movementDistanceInspired = 0
f6.defenceValueInspired = 0

fighters.push(f6)


//Fighter - Mollog the Mighty
var f1 = {}
f1.leadership = true
f1.name = 'Могучий Моллог'
f1.iconName = 'ic_warband_mollogs_mob_1'
f1.cardName = 'card_mollogs_mob_1'
f1.cardInspiredName = 'card_mollogs_mob_1_inspired'
f1.descriptionInspired = 'На карте этого бойца лежат 3 или более жетона Ранений'
f1.healthPoints = 7

f1.defenceStyle = 'block'

f1.movementDistance = 3
f1.defenceValue = 1

f1.nameInspired = 'Моллог Вдохновленный'
f1.movementDistanceInspired = 3
f1.defenceValueInspired = 1

fighters.push(f1)


//Fighter - Bat Squig
var f2 = {}
f2.name = 'Летучий Сквиг'
f2.iconName = 'ic_warband_mollogs_mob_2'
f2.cardName = 'card_mollogs_mob_2'
f2.cardInspiredName = 'card_mollogs_mob_2_inspired'
f2.descriptionInspired = 'Имеются 3 или более жетонов Ранений на дружественной карте бойца Моллога.'
f2.healthPoints = 2

f2.defenceStyle = 'evasion'

f2.movementDistance = 4
f2.defenceValue = 2

f2.nameInspired = 'Летучий Сквиг Вдохновленный'
f2.movementDistanceInspired = 5
f2.defenceValueInspired = 3

fighters.push(f2)


//Fighter - Spiteshroom
var f3 = {}
f3.name = 'Злогриб'
f3.iconName = 'ic_warband_mollogs_mob_3'
f3.cardName = 'card_mollogs_mob_3'
f3.cardInspiredName = 'card_mollogs_mob_3_inspired'
f3.descriptionInspired = 'Имеются 3 или более жетонов Ранений на дружественной карте бойца Моллога.'
f3.healthPoints = 2

f3.defenceStyle = 'evasion'

f3.movementDistance = 2
f3.defenceValue = 1

f3.nameInspired = 'Злогриб Вдохновленный'
f3.movementDistanceInspired = 2
f3.defenceValueInspired = 2

fighters.push(f3)


//Fighter - Stalagsquig
var f4 = {}
f4.name = 'Сталагосквиг'
f4.iconName = 'ic_warband_mollogs_mob_4'
f4.cardName = 'card_mollogs_mob_4'
f4.cardInspiredName = 'card_mollogs_mob_4_inspired'
f4.descriptionInspired = 'Имеются 3 или более жетонов Ранений на дружественной карте бойца Моллога.'
f4.healthPoints = 2

f4.defenceStyle = 'block'

f4.movementDistance = 0
f4.defenceValue = 2

f4.nameInspired = 'Сталагосквиг Вдохновленный'
f4.movementDistanceInspired = 0
f4.defenceValueInspired = 2

fighters.push(f4)


//Fighter - Theddra Skull-scryer
var f1 = {}
f1.leadership = true
f1.name = 'Зеддра Череповидица'
f1.iconName = 'ic_warband_godsworn_hunt_1'
f1.cardName = 'card_godsworn_hunt_1'
f1.cardInspiredName = 'card_godsworn_hunt_1_inspired'
f1.descriptionInspired = 'Улучшение применяется к этому бойцу'
f1.healthPoints = 3

f1.defenceStyle = 'evasion'

f1.movementDistance = 4
f1.defenceValue = 1

f1.nameInspired = 'Зеддра Вдохновленная'
f1.movementDistanceInspired = 4
f1.defenceValueInspired = 1

fighters.push(f1)


//Fighter - Grawl
var f2 = {}
f2.name = 'Гроул'
f2.iconName = 'ic_warband_godsworn_hunt_2'
f2.cardName = 'card_godsworn_hunt_2'
f2.cardInspiredName = 'card_godsworn_hunt_2_inspired'
f2.descriptionInspired = 'Улучшение применяется к этому бойцу'
f2.healthPoints = 2

f2.defenceStyle = 'evasion'

f2.movementDistance = 4
f2.defenceValue = 1

f2.nameInspired = 'Гроул Воодушевленный'
f2.movementDistanceInspired = 5
f2.defenceValueInspired = 2

fighters.push(f2)


//Fighter - Grundann Blood-eye
var f3 = {}
f3.name = 'Грунданн Кровавый Глаз'
f3.iconName = 'ic_warband_godsworn_hunt_3'
f3.cardName = 'card_godsworn_hunt_3'
f3.cardInspiredName = 'card_godsworn_hunt_3_inspired'
f3.descriptionInspired = 'Улучшение применяется к этому бойцу'
f3.healthPoints = 3

f3.defenceStyle = 'evasion'

f3.movementDistance = 4
f3.defenceValue = 1

f3.nameInspired = 'Грунданн Вдохновленный'
f3.movementDistanceInspired = 5
f3.defenceValueInspired = 1

fighters.push(f3)


//Fighter - Jagathra
var f4 = {}
f4.name = 'Джагатра'
f4.iconName = 'ic_warband_godsworn_hunt_4'
f4.cardName = 'card_godsworn_hunt_4'
f4.cardInspiredName = 'card_godsworn_hunt_4_inspired'
f4.descriptionInspired = 'Улучшение применяется к этому бойцу'
f4.healthPoints = 2

f4.defenceStyle = 'evasion'

f4.movementDistance = 4
f4.defenceValue = 1

f4.nameInspired = 'Джагатра Вдохновленная'
f4.movementDistanceInspired = 5
f4.defenceValueInspired = 1

fighters.push(f4)


//Fighter - Ollo
var f5 = {}
f5.name = 'Олло'
f5.iconName = 'ic_warband_godsworn_hunt_5'
f5.cardName = 'card_godsworn_hunt_5'
f5.cardInspiredName = 'card_godsworn_hunt_5_inspired'
f5.descriptionInspired = 'Улучшение применяется к этому бойцу'
f5.healthPoints = 2

f5.defenceStyle = 'evasion'

f5.movementDistance = 4
f5.defenceValue = 1

f5.nameInspired = 'Олло Вдохновленный'
f5.movementDistanceInspired = 4
f5.defenceValueInspired = 2

fighters.push(f5)


//Fighter - Shond Head-claimer
var f6 = {}
f6.name = 'Шонд Головоруб'
f6.iconName = 'ic_warband_godsworn_hunt_6'
f6.cardName = 'card_godsworn_hunt_6'
f6.cardInspiredName = 'card_godsworn_hunt_6_inspired'
f6.descriptionInspired = 'Улучшение применяется к этому бойцу'
f6.healthPoints = 3

f6.defenceStyle = 'evasion'

f6.movementDistance = 4
f6.defenceValue = 1

f6.nameInspired = 'Шонд Вдохновленный'
f6.defenceStyleInspired = 'block'
f6.movementDistanceInspired = 4
f6.defenceValueInspired = 1

fighters.push(f6)


//Fighter - Ylthari
var f1 = {}
f1.leadership = true
f1.name = 'Ильтари'
f1.iconName = 'ic_warband_yltharis_guardians_1'
f1.cardName = 'card_yltharis_guardians_1'
f1.cardInspiredName = 'card_yltharis_guardians_1_inspired'
f1.descriptionInspired = 'Гамбит, улучшение, действие или реакция снимают один или более ' +
  'жетонов Ранений с этого бойца (даже если на нем не было таких жетонов).'
f1.healthPoints = 3

f1.defenceStyle = 'evasion'

f1.movementDistance = 4
f1.defenceValue = 2

f1.nameInspired = 'Вдохновленная Ильтари'
f1.movementDistanceInspired = 5
f1.defenceValueInspired = 2

fighters.push(f1)


//Fighter - Skhathael
var f2 = {}
f2.name = 'Схатаэль'
f2.iconName = 'ic_warband_yltharis_guardians_2'
f2.cardName = 'card_yltharis_guardians_2'
f2.cardInspiredName = 'card_yltharis_guardians_2_inspired'
f2.descriptionInspired = 'Гамбит, улучшение, действие или реакция снимают один или более ' +
  'жетонов Ранений с этого бойца (даже если на нем не было таких жетонов).'
f2.healthPoints = 3

f2.defenceStyle = 'block'

f2.movementDistance = 4
f2.defenceValue = 1

f2.nameInspired = 'Вдохновленный Схатаэль'
f2.movementDistanceInspired = 4
f2.defenceValueInspired = 1

fighters.push(f2)


//Fighter - Gallanghann of the Glade
var f3 = {}
f3.name = 'Галанган из Дубравы'
f3.iconName = 'ic_warband_yltharis_guardians_3'
f3.cardName = 'card_yltharis_guardians_3'
f3.cardInspiredName = 'card_yltharis_guardians_3_inspired'
f3.descriptionInspired = 'Гамбит, улучшение, действие или реакция снимают один или более ' +
  'жетонов Ранений с этого бойца (даже если на нем не было таких жетонов).'
f3.healthPoints = 4

f3.defenceStyle = 'block'

f3.movementDistance = 4
f3.defenceValue = 2

f3.nameInspired = 'Вдохновленный Галанган'
f3.movementDistanceInspired = 4
f3.defenceValueInspired = 2

fighters.push(f3)


//Fighter - Ahnslaine Revenant Archer
var f4 = {}
f4.name = 'Эйнслейн, Призрачная Лучница'
f4.iconName = 'ic_warband_yltharis_guardians_4'
f4.cardName = 'card_yltharis_guardians_4'
f4.cardInspiredName = 'card_yltharis_guardians_4_inspired'
f4.descriptionInspired = 'Гамбит, улучшение, действие или реакция снимают один или более ' +
  'жетонов Ранений с этого бойца (даже если на нем не было таких жетонов).'
f4.healthPoints = 3

f4.defenceStyle = 'evasion'

f4.movementDistance = 4
f4.defenceValue = 1

f4.nameInspired = 'Вдохновленная Эйнслейн'
f4.movementDistanceInspired = 4
f4.defenceValueInspired = 2

fighters.push(f4)


//Fighter - Bjorgen Thundrik
var f1 = {}
f1.leadership = true
f1.name = 'Бьорген Тандрик'
f1.iconName = 'ic_warband_thundriks_profiteers_1'
f1.cardName = 'card_thundriks_profiteers_1'
f1.cardInspiredName = 'card_thundriks_profiteers_1_inspired'
f1.descriptionInspired = 'none'
f1.healthPoints = 4

f1.defenceStyle = 'block'

f1.movementDistance = 2
f1.defenceValue = 1

f1.nameInspired = 'Вдохновленный Тандрик'
f1.healthInspired = 5
f1.movementDistanceInspired = 3
f1.defenceValueInspired = 2

fighters.push(f1)


//Fighter - Khazgan Drakkskewer
var f2 = {}
f2.name = 'Хазган Драккскевер'
f2.iconName = 'ic_warband_thundriks_profiteers_2'
f2.cardName = 'card_thundriks_profiteers_2'
f2.cardInspiredName = 'card_thundriks_profiteers_2_inspired'
f2.descriptionInspired = 'none'
f2.healthPoints = 3

f2.defenceStyle = 'block'

f2.movementDistance = 4
f2.defenceValue = 1

f2.nameInspired = 'Вдохновленный Драккскевер'
f2.healthInspired = 4
f2.movementDistanceInspired = 4
f2.defenceValueInspired = 1

fighters.push(f2)


//Fighter - Dead-Eye Lund
var f3 = {}
f3.name = 'Лунд Верный Глаз'
f3.iconName = 'ic_warband_thundriks_profiteers_3'
f3.cardName = 'card_thundriks_profiteers_3'
f3.cardInspiredName = 'card_thundriks_profiteers_3_inspired'
f3.descriptionInspired = 'none'
f3.healthPoints = 3

f3.defenceStyle = 'block'

f3.movementDistance = 2
f3.defenceValue = 1

f3.nameInspired = 'Вдохновленный Лунд'
f3.healthInspired = 4
f3.movementDistanceInspired = 3
f3.defenceValueInspired = 1

fighters.push(f3)


//Fighter - Endrik Ironhail
var f4 = {}
f4.name = 'Энрик Железный Град'
f4.iconName = 'ic_warband_thundriks_profiteers_4'
f4.cardName = 'card_thundriks_profiteers_4'
f4.cardInspiredName = 'card_thundriks_profiteers_4_inspired'
f4.descriptionInspired = 'none'
f4.healthPoints = 2

f4.defenceStyle = 'evasion'

f4.movementDistance = 2
f4.defenceValue = 1

f4.nameInspired = 'Вдохновленный Энрик'
f4.healthInspired = 3
f4.movementDistanceInspired = 3
f4.defenceValueInspired = 1

fighters.push(f4)


//Fighter - Garodd Alensen
var f5 = {}
f5.name = 'Гародд Аленсен'
f5.iconName = 'ic_warband_thundriks_profiteers_5'
f5.cardName = 'card_thundriks_profiteers_5'
f5.cardInspiredName = 'card_thundriks_profiteers_5_inspired'
f5.descriptionInspired = 'none'
f5.healthPoints = 2

f5.defenceStyle = 'evasion'

f5.movementDistance = 2
f5.defenceValue = 1

f5.nameInspired = 'Вдохновленный Аленсен'
f5.healthInspired = 3
f5.defenceStyleInspired = 'block'
f5.movementDistanceInspired = 3
f5.defenceValueInspired = 1

fighters.push(f5)


//Fighter - Grashrak Fellhoof
var f1 = {}
f1.leadership = true
f1.name = 'Грашрак Проклятое Копыто'
f1.iconName = 'ic_warband_grashraks_despoilers_1'
f1.cardName = 'card_grashraks_despoilers_1'
f1.cardInspiredName = 'card_grashraks_despoilers_1_inspired'
f1.descriptionInspired = 'Два вражеских бойца или более выводятся из игры'
f1.healthPoints = 4

f1.defenceStyle = 'evasion'

f1.movementDistance = 4
f1.defenceValue = 1

f1.nameInspired = 'Вдохновленный Проклятое Копыто'
f1.movementDistanceInspired = 4
f1.defenceValueInspired = 1

fighters.push(f1)


//Fighter - Korsh 'the sneak'
var f2 = {}
f2.name = 'Корш «Плут»'
f2.iconName = 'ic_warband_grashraks_despoilers_2'
f2.cardName = 'card_grashraks_despoilers_2'
f2.cardInspiredName = 'card_grashraks_despoilers_2_inspired'
f2.descriptionInspired = 'Два вражеских бойца или более выводятся из игры'
f2.healthPoints = 2

f2.defenceStyle = 'evasion'

f2.movementDistance = 4
f2.defenceValue = 1

f2.nameInspired = 'Вдохновленный Корш'
f2.movementDistanceInspired = 4
f2.defenceValueInspired = 2

fighters.push(f2)


//Fighter - Murghoth Half-horn
var f3 = {}
f3.name = 'Мургот Полурогий'
f3.iconName = 'ic_warband_grashraks_despoilers_3'
f3.cardName = 'card_grashraks_despoilers_3'
f3.cardInspiredName = 'card_grashraks_despoilers_3_inspired'
f3.descriptionInspired = 'Два вражеских бойца или более выводятся из игры'
f3.healthPoints = 3

f3.defenceStyle = 'evasion'

f3.movementDistance = 4
f3.defenceValue = 1

f3.nameInspired = 'Вдохновленный Мургот'
f3.movementDistanceInspired = 4
f3.defenceValueInspired = 1

fighters.push(f3)


//Fighter - Ushkor
var f4 = {}
f4.name = 'Ушкор'
f4.iconName = 'ic_warband_grashraks_despoilers_4'
f4.cardName = 'card_grashraks_despoilers_4'
f4.cardInspiredName = 'card_grashraks_despoilers_4_inspired'
f4.descriptionInspired = 'Два вражеских бойца или более выводятся из игры'
f4.healthPoints = 2

f4.defenceStyle = 'evasion'

f4.movementDistance = 4
f4.defenceValue = 1

f4.nameInspired = 'Вдохновленный Ушкор'
f4.movementDistanceInspired = 4
f4.defenceValueInspired = 1

fighters.push(f4)


//Fighter - Draknar
var f5 = {}
f5.name = 'Дракнар'
f5.iconName = 'ic_warband_grashraks_despoilers_5'
f5.cardName = 'card_grashraks_despoilers_5'
f5.cardInspiredName = 'card_grashraks_despoilers_5_inspired'
f5.descriptionInspired = 'Два вражеских бойца или более выводятся из игры'
f5.healthPoints = 3

f5.defenceStyle = 'block'

f5.movementDistance = 4
f5.defenceValue = 1

f5.nameInspired = 'Вдохновленный Дракнар'
f5.movementDistanceInspired = 4
f5.defenceValueInspired = 1

fighters.push(f5)


//Fighter - Gnarl
var f6 = {}
f6.name = 'Гнарл'
f6.iconName = 'ic_warband_grashraks_despoilers_6'
f6.cardName = 'card_grashraks_despoilers_6'
f6.cardInspiredName = 'card_grashraks_despoilers_6_inspired'
f6.descriptionInspired = 'Два вражеских бойца или более выводятся из игры'
f6.healthPoints = 2

f6.defenceStyle = 'evasion'

f6.movementDistance = 4
f6.defenceValue = 1

f6.nameInspired = 'Вдохновленный Гнарл'
f6.movementDistanceInspired = 4
f6.defenceValueInspired = 1

fighters.push(f6)


//Fighter - Skaeth The Huntsman
var f1 = {}
f1.leadership = true
f1.name = 'Скит Охотник'
f1.iconName = 'ic_warband_skaeths_wild_hunt_1'
f1.cardName = 'card_skaeths_wild_hunt_1'
f1.cardInspiredName = 'card_skaeths_wild_hunt_1_inspired'
f1.descriptionInspired = 'У этого бойца в конце фазы есть жетон нападения'
f1.healthPoints = 4

f1.defenceStyle = 'block'

f1.movementDistance = 5
f1.defenceValue = 1

f1.nameInspired = 'Вдохновленный Скит'
f1.movementDistanceInspired = 5
f1.defenceValueInspired = 2

fighters.push(f1)


//Fighter - Althaen, Kurnothi Tracker
var f2 = {}
f2.name = 'Алтаэн, Следопыт Курнотхи'
f2.iconName = 'ic_warband_skaeths_wild_hunt_2'
f2.cardName = 'card_skaeths_wild_hunt_2'
f2.cardInspiredName = 'card_skaeths_wild_hunt_2_inspired'
f2.descriptionInspired = 'У этого бойца в конце фазы есть жетон нападения'
f2.healthPoints = 3

f2.defenceStyle = 'evasion'

f2.movementDistance = 4
f2.defenceValue = 1

f2.nameInspired = 'Вдохновленная Алтаэн'
f2.movementDistanceInspired = 5
f2.defenceValueInspired = 1

fighters.push(f2)


//Fighter - Karthaen, Huntcaller
var f3 = {}
f3.name = 'Картаэн, Глашатай Охоты'
f3.iconName = 'ic_warband_skaeths_wild_hunt_3'
f3.cardName = 'card_skaeths_wild_hunt_3'
f3.cardInspiredName = 'card_skaeths_wild_hunt_3_inspired'
f3.descriptionInspired = 'У этого бойца в конце фазы есть жетон нападения'
f3.healthPoints = 3

f3.defenceStyle = 'evasion'

f3.movementDistance = 4
f3.defenceValue = 2

f3.nameInspired = 'Вдохновленный Картаэн'
f3.movementDistanceInspired = 5
f3.defenceValueInspired = 2

fighters.push(f3)


//Fighter - Lighaen, Malkyn
var f4 = {}
f4.name = 'Лайиэн, Малкин'
f4.iconName = 'ic_warband_skaeths_wild_hunt_4'
f4.cardName = 'card_skaeths_wild_hunt_4'
f4.cardInspiredName = 'card_skaeths_wild_hunt_4_inspired'
f4.descriptionInspired = 'У этого бойца в конце фазы есть жетон нападения'
f4.healthPoints = 2

f4.defenceStyle = 'evasion'

f4.movementDistance = 5
f4.defenceValue = 1

f4.nameInspired = 'Вдохновленный Лайиэн'
f4.movementDistanceInspired = 5
f4.defenceValueInspired = 2

fighters.push(f4)


//Fighter - Sheoch, Kurnothi Tracker
var f5 = {}
f5.name = 'Шеоч, Следопыт Курнотхи'
f5.iconName = 'ic_warband_skaeths_wild_hunt_5'
f5.cardName = 'card_skaeths_wild_hunt_5'
f5.cardInspiredName = 'card_skaeths_wild_hunt_5_inspired'
f5.descriptionInspired = 'У этого бойца в конце фазы есть жетон нападения'
f5.healthPoints = 3

f5.defenceStyle = 'evasion'

f5.movementDistance = 4
f5.defenceValue = 1

f5.nameInspired = 'Вдохновленный Шеоч'
f5.movementDistanceInspired = 5
f5.defenceValueInspired = 1

fighters.push(f5)


//Fighter - Duke Crakmarrow
var f1 = {}
f1.leadership = true
f1.name = 'Герцог Кракмозг'
f1.iconName = 'ic_warband_the_grymwatch_1'
f1.cardName = 'card_the_grymwatch_1'
f1.cardInspiredName = 'card_the_grymwatch_1_inspired'
f1.descriptionInspired = 'Нет'
f1.healthPoints = 4

f1.defenceStyle = 'evasion'

f1.movementDistance = 4
f1.defenceValue = 1

f1.nameInspired = 'Вдохновленный Кракмозг'
f1.movementDistanceInspired = 5
f1.defenceValueInspired = 2

fighters.push(f1)


//Fighter - Gristlewel, Greatsword
var f2 = {}
f2.name = 'Хрящелом Великий Меч'
f2.iconName = 'ic_warband_the_grymwatch_2'
f2.cardName = 'card_the_grymwatch_2'
f2.cardInspiredName = 'card_the_grymwatch_2_inspired'
f2.descriptionInspired = 'Нет'
f2.healthPoints = 3

f2.defenceStyle = 'evasion'

f2.movementDistance = 4
f2.defenceValue = 1

f2.nameInspired = 'Вдохновленный Хрящелом'
f2.movementDistanceInspired = 5
f2.defenceValueInspired = 1

fighters.push(f2)


//Fighter - Master Talon
var f3 = {}
f3.name = 'Мастер Коготь'
f3.iconName = 'ic_warband_the_grymwatch_3'
f3.cardName = 'card_the_grymwatch_3'
f3.cardInspiredName = 'card_the_grymwatch_3_inspired'
f3.descriptionInspired = 'Нет'
f3.healthPoints = 2

f3.defenceStyle = 'evasion'

f3.movementDistance = 4
f3.defenceValue = 1

f3.nameInspired = 'Вдохновленный Коготь'
f3.movementDistanceInspired = 5
f3.defenceValueInspired = 1

fighters.push(f3)


//Fighter - Night's Herald
var f4 = {}
f4.name = 'Герольд Ночи'
f4.iconName = 'ic_warband_the_grymwatch_4'
f4.cardName = 'card_the_grymwatch_4'
f4.cardInspiredName = 'card_the_grymwatch_4_inspired'
f4.descriptionInspired = 'Нет'
f4.healthPoints = 2

f4.defenceStyle = 'evasion'

f4.movementDistance = 4
f4.defenceValue = 1

f4.nameInspired = 'Вдохновленный Герольд'
f4.movementDistanceInspired = 5
f4.defenceValueInspired = 1

fighters.push(f4)


//Fighter - Night's Herald
var f5 = {}
f5.name = 'Королевский Мясник'
f5.iconName = 'ic_warband_the_grymwatch_5'
f5.cardName = 'card_the_grymwatch_5'
f5.cardInspiredName = 'card_the_grymwatch_5_inspired'
f5.descriptionInspired = 'Нет'
f5.healthPoints = 2

f5.defenceStyle = 'evasion'

f5.movementDistance = 4
f5.defenceValue = 1

f5.nameInspired = 'Вдохновленный Мясник'
f5.movementDistanceInspired = 5
f5.defenceValueInspired = 1

fighters.push(f5)


//Fighter - Valreek the Tracker
var f6 = {}
f6.name = 'Валрик Ищейка'
f6.iconName = 'ic_warband_the_grymwatch_6'
f6.cardName = 'card_the_grymwatch_6'
f6.cardInspiredName = 'card_the_grymwatch_6_inspired'
f6.descriptionInspired = 'Нет'
f6.healthPoints = 3

f6.defenceStyle = 'evasion'

f6.movementDistance = 4
f6.defenceValue = 1

f6.nameInspired = 'Вдохновленная Валрик'
f6.movementDistanceInspired = 5
f6.defenceValueInspired = 2

fighters.push(f6)


//Fighter - Duke's Harriers
var f7 = {}
f7.name = 'Гончие Герцога'
f7.iconName = 'ic_warband_the_grymwatch_7'
f7.cardName = 'card_the_grymwatch_7'
f7.cardInspiredName = 'card_the_grymwatch_7_inspired'
f7.descriptionInspired = 'Нет'
f7.healthPoints = 3

f7.defenceStyle = 'evasion'

f7.movementDistance = 5
f7.defenceValue = 1

f7.nameInspired = 'Вдохновленные Гончие'
f7.movementDistanceInspired = 6
f7.defenceValueInspired = 2

fighters.push(f7)


//Fighter - Rippa Narkbad
var f1 = {}
f1.leadership = true
f1.name = 'Риппа Плохиш'
f1.iconName = 'ic_warband_rippas_snarlfangs_1'
f1.cardName = 'card_rippas_snarlfangs_1'
f1.cardInspiredName = 'card_rippas_snarlfangs_1_inspired'
f1.descriptionInspired = 'Нет'
f1.healthPoints = 4

f1.defenceStyle = 'block'

f1.movementDistance = 4
f1.defenceValue = 1

f1.nameInspired = 'Вдохновленный Риппа'
f1.movementDistanceInspired = 5
f1.defenceValueInspired = 2

fighters.push(f1)


//Fighter - Mean-Eye
var f2 = {}
f2.name = 'Подлоглаз'
f2.iconName = 'ic_warband_rippas_snarlfangs_2'
f2.cardName = 'card_rippas_snarlfangs_2'
f2.cardInspiredName = 'card_rippas_snarlfangs_2_inspired'
f2.descriptionInspired = 'Нет'
f2.healthPoints = 4

f2.defenceStyle = 'block'

f2.movementDistance = 4
f2.defenceValue = 1

f2.nameInspired = 'Вдохновленный Подлоглаз'
f2.movementDistanceInspired = 5
f2.defenceValueInspired = 2

fighters.push(f2)


//Fighter - Stabbit
var f3 = {}
f3.name = 'Пронзака'
f3.iconName = 'ic_warband_rippas_snarlfangs_3'
f3.cardName = 'card_rippas_snarlfangs_3'
f3.cardInspiredName = 'card_rippas_snarlfangs_3_inspired'
f3.descriptionInspired = 'Нет'
f3.healthPoints = 4

f3.defenceStyle = 'block'

f3.movementDistance = 4
f3.defenceValue = 1

f3.nameInspired = 'Вдохновленный Пронзака'
f3.movementDistanceInspired = 5
f3.defenceValueInspired = 2

fighters.push(f3)


//Fighter - Lady Harrow
var f1 = {}
f1.leadership = true
f1.name = 'Леди Харроу'
f1.iconName = 'ic_warband_lady_harrows_mournflight_1'
f1.cardName = 'card_lady_harrows_mournflight_1'
f1.cardInspiredName = 'card_lady_harrows_mournflight_1_inspired'
f1.descriptionInspired = 'Нет'
f1.healthPoints = 4

f1.defenceStyle = 'evasion'

f1.movementDistance = 4
f1.defenceValue = 2

f1.nameInspired = 'Вдохновленная Леди Харроу'
f1.movementDistanceInspired = 5
f1.defenceValueInspired = 2

fighters.push(f1)


//Fighter - The Anguished One
var f2 = {}
f2.name = 'Страждущая'
f2.iconName = 'ic_warband_lady_harrows_mournflight_2'
f2.cardName = 'card_lady_harrows_mournflight_2'
f2.cardInspiredName = 'card_lady_harrows_mournflight_2_inspired'
f2.descriptionInspired = 'Нет'
f2.healthPoints = 3

f2.defenceStyle = 'evasion'

f2.movementDistance = 4
f2.defenceValue = 2

f2.nameInspired = 'Вдохновленная Страждущая'
f2.healthInspired = 4
f2.movementDistanceInspired = 5
f2.defenceValueInspired = 2

fighters.push(f2)


//Fighter - The Screaming Maiden
var f3 = {}
f3.name = 'Кричащая Дева'
f3.iconName = 'ic_warband_lady_harrows_mournflight_3'
f3.cardName = 'card_lady_harrows_mournflight_3'
f3.cardInspiredName = 'card_lady_harrows_mournflight_3_inspired'
f3.descriptionInspired = 'Нет'
f3.healthPoints = 3

f3.defenceStyle = 'evasion'

f3.movementDistance = 4
f3.defenceValue = 2

f3.nameInspired = 'Вдохновленная Дева'
f3.movementDistanceInspired = 5
f3.defenceValueInspired = 2

fighters.push(f3)


//Fighter - Widow Caitha
var f4 = {}
f4.name = 'Вдова Кайта'
f4.iconName = 'ic_warband_lady_harrows_mournflight_4'
f4.cardName = 'card_lady_harrows_mournflight_4'
f4.cardInspiredName = 'card_lady_harrows_mournflight_4_inspired'
f4.descriptionInspired = 'Нет'
f4.healthPoints = 2

f4.defenceStyle = 'evasion'

f4.movementDistance = 4
f4.defenceValue = 2

f4.nameInspired = 'Вдохновленная Вдова Кайта'
f4.healthInspired = 3
f4.movementDistanceInspired = 5
f4.defenceValueInspired = 2

fighters.push(f4)


//Fighter - Gwynne Ironsoul
var f1 = {}
f1.leadership = true
f1.name = 'Гвинн Железная Душа'
f1.iconName = 'ic_warband_ironsouls_condemnors_1'
f1.cardName = 'card_ironsouls_condemnors_1'
f1.cardInspiredName = 'card_ironsouls_condemnors_1_inspired'
f1.descriptionInspired = 'Нет'
f1.healthPoints = 4

f1.defenceStyle = 'block'

f1.movementDistance = 3
f1.defenceValue = 1

f1.nameInspired = 'Вдохновленная Железная Душа'
f1.movementDistanceInspired = 3
f1.defenceValueInspired = 2

fighters.push(f1)


//Fighter - Brodus Blightbane
var f2 = {}
f2.name = 'Бродус Блайтбэйн'
f2.iconName = 'ic_warband_ironsouls_condemnors_2'
f2.cardName = 'card_ironsouls_condemnors_2'
f2.cardInspiredName = 'card_ironsouls_condemnors_2_inspired'
f2.descriptionInspired = 'Нет'
f2.healthPoints = 4

f2.defenceStyle = 'block'

f2.movementDistance = 3
f2.defenceValue = 1

f2.nameInspired = 'Вдохновленный Блайтбэйн'
f2.movementDistanceInspired = 4
f2.defenceValueInspired = 2

fighters.push(f2)


//Fighter - Tavian of Sarnassus
var f3 = {}
f3.name = 'Тавиан из Сарнасуса'
f3.iconName = 'ic_warband_ironsouls_condemnors_3'
f3.cardName = 'card_ironsouls_condemnors_3'
f3.cardInspiredName = 'card_ironsouls_condemnors_3_inspired'
f3.descriptionInspired = 'Нет'
f3.healthPoints = 4

f3.defenceStyle = 'block'

f3.movementDistance = 3
f3.defenceValue = 1

f3.nameInspired = 'Вдохновленный Тавиан'
f3.movementDistanceInspired = 3
f3.defenceValueInspired = 2

fighters.push(f3)


//Fighter - Fecula Flyblown
var f1 = {}
f1.leadership = true
f1.name = 'Фекула Замаранная'
f1.iconName = 'ic_warband_the_wurmspat_1'
f1.cardName = 'card_the_wurmspat_1'
f1.cardInspiredName = 'card_the_wurmspat_1_inspired'
f1.descriptionInspired = 'Нет'
f1.healthPoints = 4

f1.defenceStyle = 'block'

f1.movementDistance = 3
f1.defenceValue = 1

f1.nameInspired = 'Вдохновленная Фекула'
f1.movementDistanceInspired = 3
f1.defenceValueInspired = 1

fighters.push(f1)


//Fighter - Ghulgoch the Butcher
var f2 = {}
f2.name = 'Гхалгоч Мясник'
f2.iconName = 'ic_warband_the_wurmspat_2'
f2.cardName = 'card_the_wurmspat_2'
f2.cardInspiredName = 'card_the_wurmspat_2_inspired'
f2.descriptionInspired = 'Нет'
f2.healthPoints = 4

f2.defenceStyle = 'block'

f2.movementDistance = 3
f2.defenceValue = 1

f2.nameInspired = 'Вдохновленный Гхалгоч'
f2.movementDistanceInspired = 3
f2.defenceValueInspired = 2

fighters.push(f2)


//Fighter - Sepsimus, Plaguesworn
var f3 = {}
f3.name = 'Сепсимус, Чумоносец'
f3.iconName = 'ic_warband_the_wurmspat_3'
f3.cardName = 'card_the_wurmspat_3'
f3.cardInspiredName = 'card_the_wurmspat_3_inspired'
f3.descriptionInspired = 'Нет'
f3.healthPoints = 4

f3.defenceStyle = 'block'

f3.movementDistance = 3
f3.defenceValue = 1

f3.nameInspired = 'Вдохновленный Сепсимус'
f3.movementDistanceInspired = 3
f3.defenceValueInspired = 2

fighters.push(f3)


//Fighter - Hrothgorn Mantrapper
var f1 = {}
f1.leadership = true
f1.name = 'Хротгорн Охотник'
f1.iconName = 'ic_warband_hrothgorns_mantrappers_1'
f1.cardName = 'card_hrothgorns_mantrappers_1'
f1.cardInspiredName = 'card_hrothgorns_mantrappers_1_inspired'
f1.descriptionInspired = 'Нет'
f1.healthPoints = 6

f1.defenceStyle = 'block'

f1.movementDistance = 4
f1.defenceValue = 1

f1.nameInspired = 'Вдохновленный Хротгорн'
f1.movementDistanceInspired = 4
f1.defenceValueInspired = 2

fighters.push(f1)


//Fighter - Thrafnir
var f2 = {}
f2.name = 'Трафнир'
f2.iconName = 'ic_warband_hrothgorns_mantrappers_2'
f2.cardName = 'card_hrothgorns_mantrappers_2'
f2.cardInspiredName = 'card_hrothgorns_mantrappers_2_inspired'
f2.descriptionInspired = 'Нет'
f2.healthPoints = 3

f2.defenceStyle = 'evasion'

f2.movementDistance = 5
f2.defenceValue = 2

f2.nameInspired = 'Вдохновленный Трафнир'
f2.movementDistanceInspired = 5
f2.defenceValueInspired = 2

fighters.push(f2)


//Fighter - Luggit and Thwak
var f3 = {}
f3.name = 'Лаггит и Твак'
f3.iconName = 'ic_warband_hrothgorns_mantrappers_3'
f3.cardName = 'card_hrothgorns_mantrappers_3'
f3.cardInspiredName = 'card_hrothgorns_mantrappers_3_inspired'
f3.descriptionInspired = 'Нет'
f3.healthPoints = 3

f3.defenceStyle = 'evasion'

f3.movementDistance = 3
f3.defenceValue = 1

f3.nameInspired = 'Вдохновленные Лаггит и Твак'
f3.movementDistanceInspired = 4
f3.defenceValueInspired = 1

fighters.push(f3)


//Fighter - Quiv
var f4 = {}
f4.name = 'Куив'
f4.iconName = 'ic_warband_hrothgorns_mantrappers_4'
f4.cardName = 'card_hrothgorns_mantrappers_4'
f4.cardInspiredName = 'card_hrothgorns_mantrappers_4_inspired'
f4.descriptionInspired = 'Нет'
f4.healthPoints = 2

f4.defenceStyle = 'evasion'

f4.movementDistance = 3
f4.defenceValue = 1

f4.nameInspired = 'Вдохновленный Куив'
f4.movementDistanceInspired = 4
f4.defenceValueInspired = 2

fighters.push(f4)


//Fighter - Bushwakka
var f5 = {}
f5.name = 'Бушвакка'
f5.iconName = 'ic_warband_hrothgorns_mantrappers_5'
f5.cardName = 'card_hrothgorns_mantrappers_5'
f5.cardInspiredName = 'card_hrothgorns_mantrappers_5_inspired'
f5.descriptionInspired = 'Нет'
f5.healthPoints = 2

f5.defenceStyle = 'evasion'

f5.movementDistance = 3
f5.defenceValue = 1

f5.nameInspired = 'Вдохновленный Бушвакка'
f5.movementDistanceInspired = 4
f5.defenceValueInspired = 2

fighters.push(f5)


//Fighter - Morgok
var f1 = {}
f1.leadership = true
f1.name = 'Моргок'
f1.iconName = 'ic_warband_mogrok_1'
f1.cardName = 'card_mogrok_1'
f1.cardInspiredName = 'card_mogrok_1_inspired'
f1.descriptionInspired = 'Нет'
f1.healthPoints = 5

f1.defenceStyle = 'block'

f1.movementDistance = 3
f1.defenceValue = 1

f1.nameInspired = 'Вдохновленный Моргок'
f1.movementDistanceInspired = 4
f1.defenceValueInspired = 1

fighters.push(f1)


//Fighter - 'Ardskull
var f2 = {}
f2.name = 'Твёрдочереп'
f2.iconName = 'ic_warband_mogrok_2'
f2.cardName = 'card_mogrok_2'
f2.cardInspiredName = 'card_mogrok_2_inspired'
f2.descriptionInspired = 'Нет'
f2.healthPoints = 5

f2.defenceStyle = 'block'

f2.movementDistance = 3
f2.defenceValue = 1

f2.nameInspired = 'Вдохновленный Твёрдочереп'
f2.movementDistanceInspired = 4
f2.defenceValueInspired = 1

fighters.push(f2)


//Fighter - Tavian of Sarnassus
var f3 = {}
f3.name = 'Зугг'
f3.iconName = 'ic_warband_mogrok_3'
f3.cardName = 'card_mogrok_3'
f3.cardInspiredName = 'card_mogrok_3_inspired'
f3.descriptionInspired = 'Нет'
f3.healthPoints = 5

f3.defenceStyle = 'block'

f3.movementDistance = 3
f3.defenceValue = 1

f3.nameInspired = 'Вдохновленный Зугг'
f3.movementDistanceInspired = 4
f3.defenceValueInspired = 1

fighters.push(f3)


//Fighter - Моргвейн
var f1 = {}
f1.leadership = true
f1.name = 'Моргвейт Окровавленная'
f1.iconName = 'ic_warband_coven_1'
f1.cardName = 'card_coven_1'
f1.cardInspiredName = 'card_coven_1_inspired'
f1.descriptionInspired = 'none'
f1.healthPoints = 4

f1.defenceStyle = 'evasion'

f1.movementDistance = 4
f1.defenceValue = 2

f1.nameInspired = 'Вдохновленная Моргвейт'
f1.movementDistanceInspired = 5
f1.defenceValueInspired = 2

fighters.push(f1)


//Fighter - Кирия
var f2 = {}
f2.name = 'Кирия'
f2.iconName = 'ic_warband_coven_2'
f2.cardName = 'card_coven_2'
f2.cardInspiredName = 'card_coven_2_inspired'
f2.descriptionInspired = 'none'
f2.healthPoints = 3

f2.defenceStyle = 'evasion'

f2.movementDistance = 5
f2.defenceValue = 2

f2.nameInspired = 'Вдохновленная Кирия'
f2.movementDistanceInspired = 5
f2.defenceValueInspired = 2

fighters.push(f2)


//Fighter - Летир
var f3 = {}
f3.name = 'Летир'
f3.iconName = 'ic_warband_coven_3'
f3.cardName = 'card_coven_3'
f3.cardInspiredName = 'card_coven_3_inspired'
f3.descriptionInspired = 'none'
f3.healthPoints = 2

f3.defenceStyle = 'evasion'

f3.movementDistance = 4
f3.defenceValue = 1

f3.nameInspired = 'Вдохновленная Летир'
f3.movementDistanceInspired = 5
f3.defenceValueInspired = 2

fighters.push(f3)


//Fighter - Кирсса
var f4 = {}
f4.name = 'Кирсса'
f4.iconName = 'ic_warband_coven_4'
f4.cardName = 'card_coven_4'
f4.cardInspiredName = 'card_coven_4_inspired'
f4.descriptionInspired = 'none'
f4.healthPoints = 2

f4.defenceStyle = 'evasion'

f4.movementDistance = 4
f4.defenceValue = 1

f4.nameInspired = 'Вдохновленная Кирсса'
f4.movementDistanceInspired = 5
f4.defenceValueInspired = 2

fighters.push(f4)


//Fighter - Кхамисс
var f5 = {}
f5.name = 'Кхамисс'
f5.iconName = 'ic_warband_coven_5'
f5.cardName = 'card_coven_5'
f5.cardInspiredName = 'card_coven_5_inspired'
f5.descriptionInspired = 'none'
f5.healthPoints = 2

f5.defenceStyle = 'evasion'

f5.movementDistance = 4
f5.defenceValue = 1

f5.nameInspired = 'Вдохновленная Кхамисс'
f5.movementDistanceInspired = 5
f5.defenceValueInspired = 2

fighters.push(f5)

for (let i = 0; i < fighters.length; i++) {
  fighters[i].id = i;
}

saveGameDataFile("fighters","ru", fighters);
saveGameDataFile("fighters","en", fighters);