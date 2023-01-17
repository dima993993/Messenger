import { createContext, useMemo, useState } from "react";
import { createTheme } from "@mui/material";

export const tokens = (mode: string) => ({
    ...(mode === 'dark' ? {
        purple: {
            DEFAULT: '#000000',
            50: '#000000',
            100: '#15021B',
            200: '#3F064F',
            300: '#680A83',
            400: '#860DA9',
            500: '#A410CF',
            600: '#BE1AEE',
            700: '#C940F0',
            800: '#CE53F2',
            900: '#680A83',
          },
          whiteBlue: {
            DEFAULT: '#5761AB',
            50: '#7D84BE',
            100: '#A2A7D1',
            200: '#C8CBE3',
            300: '#EDEEF6',
            400: '#FFFFFF',
            500: '#FFFFFF',
            600: '#FFFFFF',
            700: '#FFFFFF',
            800: '#FFFFFF',
            900: '#EDEEF6'
          },
          hitPink: {
            DEFAULT: '#963700',
            50: '#CE4C00',
            100: '#FF6207',
            200: '#FF863F',
            300: '#FFA977',
            400: '#FFC3A0',
            500: '#FFDDC9',
            600: '#FFF6F1',
            700: '#FFFFFF',
            800: '#FFFFFF',
            900: '#FFA977'
          },
          white: {
            DEFAULT: '#8F8F8F',
            50: '#ABABAB',
            100: '#C7C7C7',
            200: '#E3E3E3',
            300: '#FFFFFF',
            400: '#FFFFFF',
            500: '#FFFFFF',
            600: '#FFFFFF',
            700: '#FFFFFF',
            800: '#FFFFFF',
            900: '#FFFFFF'
          },
          shark: {
            DEFAULT: '#000000',
            50: '#000000',
            100: '#000000',
            200: '#08090A',
            300: '#212529',
            400: '#333940',
            500: '#454E56',
            600: '#58626D',
            700: '#6A7783',
            800: '#73818E',
            900: '#212529'
          },
    } : {
        purple: {
            DEFAULT: '#680A83',
            50: '#CE53F2',
            100: '#C940F0',
            200: '#BE1AEE',
            300: '#A410CF',
            400: '#860DA9',
            500: '#680A83',
            600: '#3F064F',
            700: '#15021B',
            800: '#000000',
            900: '#000000'
          },
          whiteBlue: {
            DEFAULT: '#EDEEF6',
            50: '#FFFFFF',
            100: '#FFFFFF',
            200: '#FFFFFF',
            300: '#FFFFFF',
            400: '#FFFFFF',
            500: '#EDEEF6',
            600: '#C8CBE3',
            700: '#A2A7D1',
            800: '#7D84BE',
            900: '#5761AB'
          },
          hitPink: {
            DEFAULT: '#FFA977',
            50: '#FFFFFF',
            100: '#FFFFFF',
            200: '#FFF6F1',
            300: '#FFDDC9',
            400: '#FFC3A0',
            500: '#FFA977',
            600: '#FF863F',
            700: '#FF6207',
            800: '#CE4C00',
            900: '#963700'
          },
          white: {
            DEFAULT: '#FFFFFF',
            50: '#FFFFFF',
            100: '#FFFFFF',
            200: '#FFFFFF',
            300: '#FFFFFF',
            400: '#FFFFFF',
            500: '#FFFFFF',
            600: '#E3E3E3',
            700: '#C7C7C7',
            800: '#ABABAB',
            900: '#8F8F8F'
          },
          shark: {
            DEFAULT: '#212529',
            50: '#73818E',
            100: '#6A7783',
            200: '#58626D',
            300: '#454E56',
            400: '#333940',
            500: '#212529',
            600: '#08090A',
            700: '#000000',
            800: '#000000',
            900: '#000000'
          },
    })
})

export const settingsTheme: any = (mode: string) => {
    const colors = tokens(mode)
    return {
        palette: {
            mode: mode,
            ...(mode === "dark" ? {
                primary: {
                    main: colors.shark.DEFAULT
                },
                secondary: {
                    main: colors.white[900]
                }
            } : {
              primary: {
                main: colors.white.DEFAULT
            },
            secondary: {
                main: colors.shark[900]
            }
            })
        },
        typography: {
          fontFamily: ['Roboto', 'sans-serif'].join(','),
          fontSize: 14,
          p: {
            fontFamily: ['Roboto', 'sans-serif'].join(','),
          fontSize: 12,
          fontWeight: 400,
          }
        }
    }
}

export const ColorModeContext: any = createContext({
  toggleColorMode: () => {}
})

export const useMode = () => {
  const [mode, setMode] = useState('dark');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => setMode((prev) => (prev === 'light' ? 'dark' : 'light'))
    }), []
  )
  const theme: any = useMemo(() => createTheme(settingsTheme(mode)), [mode]);
  return [colorMode, theme]
}

