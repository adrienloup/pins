import { createContext } from "react";
import { useLocalStorage } from "../../generic/hooks/useLocalStorage";
import { Children } from "../../generic/types/Children";
import { Data } from "./Data";

const initialValue: Data = {
  pins: 0,
};

export const DataContext = createContext<{
  data: Data;
  setData: (data: Data) => void;
}>({
  data: initialValue,
  setData: (data: Data) => data,
});

export function DataProvider({ children }: { children: Children }) {
  const [data, setData] = useLocalStorage("_pins_1mm2_3_data", initialValue);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
}
