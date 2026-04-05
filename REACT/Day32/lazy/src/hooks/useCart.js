import { useContext } from "react";
import { CardContex } from "../context/CardContex";

export const useCart = () => useContext(CardContex);