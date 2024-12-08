import { createContext } from "react";

type Localisation = "fr" | "en";

export const LocalisationContext = createContext<{
  language: Localisation;
  setLanguage: (language: Localisation) => void;
}>({
  language: "en",
  setLanguage: (language: Localisation) => language,
});
