const levelNames = [
  'ic_bronze5',
  'ic_bronze4',
  'ic_bronze3',
  'ic_bronze2',
  'ic_bronze1',

  'ic_silver5',
  'ic_silver4',
  'ic_silver3',
  'ic_silver2',
  'ic_silver1',

  'ic_gold5',
  'ic_gold4',
  'ic_gold3',
  'ic_gold2',
  'ic_gold1',

  'ic_platinum5',
  'ic_platinum4',
  'ic_platinum3',
  'ic_platinum2',
  'ic_platinum1',

  'ic_diamond5',
  'ic_diamond4',
  'ic_diamond3',
  'ic_diamond2',
  'ic_diamond1',

  'ic_ruby5',
  'ic_ruby4',
  'ic_ruby3',
  'ic_ruby2',
  'ic_ruby1',

  'ic_master',
];

export const importLevelSVG = async (level: number) => {
  const fileName = levelNames[level];
  const svg = await import(`@/assets/svgs/level/${fileName}.svg`);
  return svg.default;
};
