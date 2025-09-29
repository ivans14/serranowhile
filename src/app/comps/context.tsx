"use client";
import { createContext, useState, ReactNode } from "react";

export type Language = "ES" | "CAT" | "ENG";

export const LanguageContext = createContext<{
  language: string;
  setLanguage: (lang: Language) => void;
}>({
  language: "ES",
  setLanguage: () => {},
});

type Props = {
  children: ReactNode;
};

const ContextProvider = ({ children }: Props) => {
  const [language, setLanguage] = useState("ES");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default ContextProvider;
