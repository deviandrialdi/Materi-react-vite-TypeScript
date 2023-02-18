import React, { createContext } from "react";

interface ThemeType {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}
const theme: ThemeType = {
  theme: "",
  setTheme: () => {},
};

export const ThemeContext = createContext(theme);

// ThemeContext adalah sebuah nama yang mana wadah untuk menyimpan data themanya

// taruh wadah context tersebut lalu bungkus ke dalam component tree. Komponent tree yang paling tinggi adalah root (file index.tsx)
