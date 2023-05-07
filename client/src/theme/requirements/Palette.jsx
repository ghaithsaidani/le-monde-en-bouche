const colors = {
    primary:"#EC833E",
    white: "#FFFFFF",
    black: "#090E16",
}

export const LightPalette=({
    mode:"light",
    primary:{
        main:colors.primary
    },
    background:{
        default:colors.white,
    },
    /* text:{
        primary:colors.black,
        secondary:colors.grey.light,
        disabled:colors.grey.dark
    },
    common:{
        white:colors.white,
        black:colors.black
        
    } */
})


export const DarkPalette=({
        mode:"dark",
        primary:{
            main:colors.primary
        },
        background:{
            default:colors.black,
        },
        /* text:{
            primary:colors.white,
            secondary:colors.grey.light,
            disabled:colors.grey.dark
        } */
})