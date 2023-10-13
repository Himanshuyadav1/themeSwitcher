import { createContext, useContext } from "react";

const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {}  
});

export const ThemeContextProvider = ThemeContext.Provider;

export default function useTheme() {
    return useContext(ThemeContext);
} 