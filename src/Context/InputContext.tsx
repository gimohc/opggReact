import { createContext } from "react";
import { InputData } from "../Components/Match.tsx";

export const InputContext = createContext<InputData | null>(null);
