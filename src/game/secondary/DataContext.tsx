import { createContext } from "react";
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
