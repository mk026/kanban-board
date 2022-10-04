import { createContext, FC, PropsWithChildren } from "react";
import { RootStore, store } from "../store";

export const StoreContext = createContext({} as RootStore);

const StoreProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;
