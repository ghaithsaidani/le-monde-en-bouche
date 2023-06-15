export const colors = {
    primary: "#F54748",
    light: "#FFFFFF",
    dark: "#191919",
    secondary: "#FDC55E"
}

export const LightPalette = ({
    mode: "light",
    primary: {
        main: colors.primary
    },
    secondary: {
        main: colors.secondary
    },
    background: {
        default: colors.light,
    },
    text: {
        primary: colors.dark,
        /*secondary:colors.grey.light,
        disabled:colors.grey.dark*/
    },
    /*common:{
        light:colors.light,
        dark:colors.dark
        
    }*/
})


export const DarkPalette = ({
    mode: "dark",
    primary: {
        main: colors.primary
    },
    secondary: {
        main: colors.secondary
    },
    background: {
        default: colors.dark,
    },
    text:{
        primary:colors.light,
        /*secondary:colors.grey.light,
        disabled:colors.grey.dark*/
    }
})