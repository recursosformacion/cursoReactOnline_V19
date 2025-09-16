import {createContext} from "react";

export const ThemeContext = createContext('dark');
export const AuthContext = createContext("");
export const Documentacion = createContext(
    { doc: 0, 
      titulo: "" }
);
