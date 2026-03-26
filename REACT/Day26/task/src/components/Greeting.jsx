import { useApp } from "../context/AppContext";

export default function Greeting() {
  const { lang } = useApp();

  return <h2>{lang === "en" ? "Hello" : "Vanakkam"}</h2>;
}