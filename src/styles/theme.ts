const color = {
  // grayscale
  white: '#FFFFFF',
  black: '#222224',
  lightGray: '#F7F7F9',
  background1: '#F4F7F8',
  background2: '#F0F0F3',
  border: '#ECECEF',
  lowLightGray: '#D1D1D4',
  mediumGray: '#77777A',
  darkgray: '#444446',

  // Main
  mainBlue: '#282183',
  mainPink: '#FF7A7A',
} as const;

const title = {
  large: {
    fontSize: '26px',
    lineHeight: '31px',
  },
  medium: {
    fontSize: '20px',
    lineHeight: '24px',
  },
  small: {
    fontSize: '18px',
    lineHeight: '21px',
  },
} as const;

const text = {
  large: {
    fontSize: '16px',
    lineHeight: '19px',
  },
  medium: {
    fontSize: '14px',
    lineHeight: '17px',
  },
  small: {
    fontSize: '12px',
    lineHeight: '14px',
  },
  writing: {
    // 줄글인 경우
    fontSize: '14px',
    lineHeight: '22px',
  },
} as const;

const borderRadius = {
  large: '20px',
  medium: '15px',
  small: '8px',
} as const;

export const Theme = {
  color,
  title,
  text,
  borderRadius,
  // spacing
};
