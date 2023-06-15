import {createTheme} from "@mui/material";
import {TypographyStyle} from "./requirements/TypographyStyle.jsx";
import {colors} from "./requirements/Palette.jsx";

export const Theme = (palette) => createTheme(
    {
        palette: {...palette},
        typography: {...TypographyStyle},
        spacing: (factor) => `${factor}px`,
        breakpoints: {
            values: {
                xs: 0,
                sm: 650,
                md: 750,
                lg: 1200,
                xl: 1536,
            },
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: (theme) => ({
                        'header':{
                            backgroundColor:palette.background.default
                        }
                    }
                ),
            },
            MuiButton: {
                variants: [
                    {
                        props: {variant: 'contained', color: 'secondary'},
                        style: {
                            color: "#EC833E",
                            fontsize: "0.8rem",
                            borderRadius: "20px",
                            boxShadow: "none",
                            width: "fit-content",
                            ":hover": {
                                boxShadow: "none",
                                backgroundColor: "#EDEFEE"
                            }

                        }
                    },
                    {
                        props: {variant: 'contained', color: 'primary'},
                        style: {
                            padding: "0.6em 1.5em",
                            borderRadius: "1.5em",
                            color: colors.light,
                            boxShadow: "none",

                            ":hover": {
                                background: "linear-gradient(50deg, rgba(255, 255, 255, 0.8) -31.53%, #F54748 400%)",
                                outline: `2px solid ${palette.primary.main}`,
                                color: palette.primary.main,
                                transition: "background .5s,color .5s"
                            }

                        }
                    }
                ]
            },
            MuiChip: {
                styleOverrides: {
                    colorPrimary: {
                        backgroundColor: 'rgba(245,71,72,0.1)',
                    },
                    label: {
                        fontFamily:"Sofia Pro Light",
                        color: palette.text.primary,
                        fontSize: "1.1rem"
                    }
                }
            }
        }
    }
)