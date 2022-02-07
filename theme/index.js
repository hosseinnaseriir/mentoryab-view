import {
    createTheme
} from "@mui/material";

const theme = {
    colors: {
        gray: ['#bdbdbd', '#828282'],
        dark: '#4F4F4F',
        black: '#333333',
        white: '#fafafa',
        primary: '#004CBF',
        secondary:'#65FFB5',
        brand: '#0E6FFF',
        danger: '#EA3131',
    },
    typography: {
        h1: '4.8rem',
        h2: '4rem',
        h3: '3.2rem',
        h4: '2.4rem',
        h5: '1.8rem',
        h6: '1.6rem',
        caption: '1.4rem',
        mini: '1.2rem'
    },
    spacing: ['.4rem', '.8rem', '1.2rem', '1.6rem', '2.4rem', '3.2rem', '4rem', '4.8rem'],
    rounded: ['.4rem', '.8rem', '1rem', '1.2rem']
};

export default theme;


export const muiTheme = createTheme({
    direction: 'rtl',
    typography: {
        // fontSize: '1rem',
        htmlFontSize: 10,
    },
});