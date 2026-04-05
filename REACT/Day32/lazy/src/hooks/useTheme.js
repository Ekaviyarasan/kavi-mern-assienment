import { useContext } from "react";
import { TheamContext } from "../context/TheamContext";

export const useTheme = () => useContext(TheamContext);