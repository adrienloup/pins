import { useContext } from "react";
import { DataContext } from "./DataProvider";

export function useData() {
  return useContext(DataContext);
}
