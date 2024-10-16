import { createContext } from "react";
import { InputData } from "./Match.tsx";

export const InputContext = createContext<InputData | null>(null);
