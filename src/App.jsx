import { useEffect } from "react";
import { useSelector } from "react-redux";
import Index from "./routes/Index";

export default function App() {
  const root = window.document.documentElement;
  const theme = useSelector((state) => state.theme.theme);
  const selectedItems = useSelector((state) => state.nav.side);
  console.log(selectedItems);

  useEffect(() => {
    if (localStorage.getItem("side") === "") {
      localStorage.setItem("side", "top");
    }
  }, []);

  useEffect(() => {
    theme === "dark"
      ? root.classList.add("dark")
      : root.classList.remove("dark");
  }, [theme]);

  return (
    <div className="pl-[5%] md:pl-[15%] pr-[5%] md:pr-[15%]">
      {<Index/>}
    </div>
  );
}
