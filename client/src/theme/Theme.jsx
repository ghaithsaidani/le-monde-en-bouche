import { createTheme } from "@mui/material";

export const Theme = (palette) =>createTheme(
    {
        palette:{...palette},
        spacing: (factor) => `${factor}px`,
        breakpoints: {
            values: {
              xs: 0,
              sm: 450,
              md: 850,
              lg: 1200,
              xl: 1536,
            },
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: (theme) => ({
                    "header": {
                        background: theme.palette.background.default,
                        /*"a": {
                            color: theme.palette.text.primary
                        }*/
                    },
                }),
            },
        }
    }
)