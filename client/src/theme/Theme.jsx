import {createTheme} from "@mui/material";
import {TypographyStyle} from "./requirements/TypographyStyle.jsx";
import {colors} from "./requirements/Palette.jsx";
import theme from "tailwindcss/defaultTheme.js";

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
                        'header': {
                            backgroundColor: palette.background.default
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
                                //boxShadow: "none",
                                backgroundColor: "#EDEFEE"
                            }

                        }
                    },
                    {
                        props: {variant: 'contained', color: 'primary'},
                        style: {
                            padding: "0.6em 1.5em",
                            color: colors.light,
                            borderRadius: ".5rem",
                            border: "2px solid transparent",
                            boxShadow: "0px 7.5px 22.5px #F54748",
                            ":hover": {
                                background: "linear-gradient(50deg, rgba(255, 255, 255, 0.8) -31.53%, #F54748 400%)",
                                borderColor: palette.primary.main,
                                color: palette.primary.main,
                                boxShadow: "0px 7.5px 22.5px #F54748",
                                transition: "background .5s,color .5s,border-color .5s"
                            }

                        }
                    },

                    {
                        props: {variant: 'outlined', color: 'primary'},
                        style: {
                            border:`2px solid ${palette.primary.main}`,
                            borderRadius: ".5rem",
                            ":hover": {
                                background: palette.primary.main,
                                color: palette.background.default,
                                boxShadow: "0px 7.5px 22.5px #F54748",
                                transition: "background .5s,color .5s,box-shadow .5s"
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
                        fontFamily: "Sofia Pro Light",
                        color: palette.text.primary,
                        fontSize: "1.1rem"
                    }
                }
            }
        }
    }
)