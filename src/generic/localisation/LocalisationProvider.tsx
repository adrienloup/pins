import { createContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Children } from "../types/Children";

type Localisation = "fr" | "en";

export const LocalisationContext = createContext<{
  language: Localisation;
  setLanguage: (language: Localisation) => void;
}>({
  language: "en",
  setLanguage: (language: Localisation) => language,
});

export function LocalisationProvider({ children }: { children: Children }) {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useLocalStorage<Localisation>(
    "_pins_1mm2_3_localisation",
    "en"
  );

  useEffect(() => {
    i18n.changeLanguage(language);
    document.documentElement.lang = i18n.language;
  }, [language]);

  return (
    <LocalisationContext.Provider value={{ language, setLanguage }}>
      {children}
    </LocalisationContext.Provider>
  );
}
