import { useContext } from "react";
import { LocalisationContext } from "./LocalisationContext";

export function useLocalisation() {
  return useContext(LocalisationContext);
}
