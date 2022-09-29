import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

export const useStore = () => {
  const store = useContext(StoreContext);

  return store;
};
