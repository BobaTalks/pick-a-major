import {styled,Button,Container, createTheme} from '@mui/material';

export const CustomTheme = createTheme({
    palette: {
        BTMilkTea: {
            main:'#F2DAC4'
        },
        Lychee: {
            main:'#F6A794'
        },
        ThaiTea: {
            main:'#E0A878'
        },
        Matcha: {
            main:'#73956F'
        },
        RedBean: {
            main:'#732C2C'
        },
        BobaHighlight: {
            main:'#616587'
        },
        InactiveGrey: {
            main:'#5B5D6C'
        },
        Boba: {
            main:'#1B1D2E'
        },
    },
    typography: {
        CustomTitle: {
            fontFamily: 'Poppins',
            fontWeight: 700,
            fontSize: '64px',
            lineHeight: '96px'
        },
        CustomHeading1: {
            fontFamily: 'Poppins',
            fontWeight: 700,
            fontSize: '36px',
            lineHeight: '54px'
        },
        CustomHeading2: {
            fontFamily: 'Poppins',
            fontWeight: 700,
            fontSize: '32px',
            lineHeight: '48px'
        },
        CustomHeading3: {
            fontFamily: 'Poppins',
            fontWeight: 700,
            fontSize: '24px',
            lineHeight: '36px'
        },
        CustomSubHeading: {
            fontFamily: 'Poppins',
            fontWeight: 600,
            fontSize: '20px',
            lineHeight: '30px'
        },
        CustomBody: {
            fontFamily: 'Poppins',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '24px'
        },
        CustomOverline: {
            fontFamily: 'Poppins',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '24px'
        }
    }
})

export const PrimaryBtn = styled(Button)({
    color: '#FFFFFF',
    backgroundColor: '#73956F',
    borderRadius: '8px',
    border: 0,
    padding: '1rem 5rem',
    '&:hover':{
        backgroundColor: '#732C2C'
    }
});

export const FlexContainer = styled(Container)({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth:'100%'
});

