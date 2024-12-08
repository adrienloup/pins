import { useLocalStorage } from "../../generic/hooks/useLocalStorage";
import { Children } from "../../generic/types/Children";
import { DataContext } from "./DataContext";
import { Data } from "./Data";

const initialValue: Data = {
  pins: 0,
};

export function DataProvider({ children }: { children: Children }) {
  const [data, setData] = useLocalStorage("_pins_1mm2_3_data", initialValue);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
}
