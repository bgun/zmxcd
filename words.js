const DICTIONARY = {
  en: {
    // Protein
    'BEEF'   : 'beef',
    'CHICKEN': 'chicken',
    'PORK'   : 'pork',
    'TOFU'   : 'tofu',
    // Style
    'STEAMED': 'steamed',
    'NOODLES': 'noodles',
    'FRIED'  : 'fried',
    // Flavor
    'HUNAN'  : 'Hunan',
    'SICHUAN': 'Sichuan',
    'GARLIC' : 'Garlic',
    // Spice
    'MILD'   : 'Mild',
    'SPICY'  : 'Spicy',
    'VERYHOT': 'Very Spicy'
  },
  zh: {
    // Protein
    'PORK'   : '猪',
    'BEEF'   : '牛',
    'CHICKEN': '鸡',
    'TOFU'   : '豆腐',
    // Styles
    'STEAMED': '盖',
    'NOODLES': '面',
    'FRIED'  : '炒',
    // Flavor
    'HUNAN'  : '湖南',
    'SICHUAN': '川',
    'GARLIC' : '糖蒜',
    // Spice
    'MILD'   : '温',
    'SPICY'  : '辣',
    'VERYHOT': '辛辣'
  }
}


module.exports = {

  get(lang, key) {
    return DICTIONARY[lang][key];
  }

}