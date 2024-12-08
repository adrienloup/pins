import { useContext } from "react";
import { LocalisationContext } from "./LocalisationProvider";

export function useLocalisation() {
  return useContext(LocalisationContext);
}
