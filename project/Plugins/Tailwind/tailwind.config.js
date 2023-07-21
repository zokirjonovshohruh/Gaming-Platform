tailwind.config = {
  theme: {
    extend: {
      borderRadius: {
        'none': '0',
        'xs': '5px',
        'sm': '6px',
        'extra-lg': '10px',
        'xl': '15px',
        'large': '20px',
      },
      screens: {
        'xs': '480px',
      },
    },
    container: {
      padding: {
        DEFAULT: '0.8rem',
        sm: '0.9rem',
        lg: '1rem',
        xl: '1.2rem'
      },
      center: 'true',
    },
    colors: {
       white: '#ffffff',
       currentBlack: '#020100',
       currentOrange: '#DC7000',
       cardBg: '#1C140F',
       footerBg: '#070707',  
       bgGrey: '#F8F8F8',
       lightGrey: '#E8E8E8',
       inputText:'#898989',
       lightPink:'#FFECEC',
       darkBlack:'#0F0901',
       currentGrey:'#DDE0E4',
       navButton: '#FA9021',
       breadcrumbText: '#E47500',
       currentBlue: '#2351F5',
       topBg: '#000',
       bottomBg: '#4A2800',
    },
    lineHeight: {
      'none': '1',
      'normal': '1.5  ',
      'lose': '187.5%',
      'thin-lose': '180.5%',
      'relaxed': '155.2%',
      'extra-lose': '202.5%',
      'too-lose': '208.5%',
    },
  },
};
