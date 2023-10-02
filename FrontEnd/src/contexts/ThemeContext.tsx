import { createContext } from "react";
type colorMode = {
  toggleColorMode: () => void;
};
export const ColorModeContext = createContext<colorMode>({
  toggleColorMode: function (): void {
    throw new Error("Function not implemented.");
  },
});
