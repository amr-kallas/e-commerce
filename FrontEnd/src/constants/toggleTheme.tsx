import { PaletteMode, ThemeProvider, createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
import  { useContext, useMemo, useState } from "react";
import { ColorModeContext } from "../contexts/ThemeContext";
import storage from "../utils/storage";

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
        // palette values for light mode
        
        info:{
          main:"#F6F9FC",
          light:"#F6F6F6"
        },
        text: {
          primary: "#2B3445",
        },
        neutral: {
          main: "#64748B",
        },

        favColor: {
          main: grey[300],
        },
      }
    : {
        // palette values for dark mode
        neutral: {
          main: "#64748B",
        },

        favColor: {
          main: grey[800],
        },
        info:{
          main:"#252b32",
          light:"#1D2021"

        },
        text: {
          primary: "#fff",
        },
      }),
},
});
type child={
  children:React.ReactNode
}
const ColorModes = ({children}:child) => {
  const [mode, setMode] = useState<PaletteMode>(storage.getMode()=='light'?"light":"dark");
  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );

};
// eslint-disable-next-line react-refresh/only-export-components
export const useColorMode=()=>{
  return useContext(ColorModeContext)
}
export default ColorModes