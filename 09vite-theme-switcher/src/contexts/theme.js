import { createContext, useContext } from "react";

export const ThemeContext  = createContext({
    themeMode: "light",
    darkTheme: ()=>{},
    lightTheme: ()=>{},
});

// ThemeContext ko provide krwata hai.. jaha hm ne use krna ho, waha py wrape krna hai in k sath 
export const ThemeProvider = ThemeContext.Provider;

// jb hm ne kahi use krna ho ThemeContext toh hm is fun ko call kr k access ke lain gy
export default function useTheme(){
    return useContext(ThemeContext)
};




