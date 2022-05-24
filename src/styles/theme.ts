import {extendTheme, theme as ChakraTheme } from '@chakra-ui/react'


export const theme = extendTheme({
    colors:{
       purple:{
           500:"#8615DF",
           600: "#570E91",
           700: "#38085C",
           800: "#190429"
       },
       gray:{
           50:"#f6f6f7",
           100: "#9E9EA7",
           400: "#666665",
           600: "#0E0E0F"
       },
       red:{
           500:"#DF1545"

       },
       green:{
           500:"#168821"
       }

    },
    fonts:{
        heading:"Inter",
        body:"Inter"
    },
    fontSizes:{
        xs: "0.8rem",
        sm:"0.9rem",
        md:"1.0rem",
        tg:"1.1rem",
        xl:"1.3rem",
        '2xl': "1.5rem",
        '3xl': "1.8rem",
        '4xl':'2rem',
        '5xl':"2.5rem",
        '6xl':"3rem",
        '7x':"4.2rem",
        '8xl':"5rem",
        '9xl':"6.8rem",
        '10xl':'8rem'
    },
    styles:{
        global:{
            bg:'white',
            color:"gray.900"
        }
    }
}) 