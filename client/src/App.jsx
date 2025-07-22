import { useEffect } from "react";
import { useSelector } from "react-redux";
import Index from "./routes/Index";
import { useLocation } from "react-router-dom";

export default function App() {
  const root = window.document.documentElement;
  const theme = useSelector((state) => state.theme.theme);
  const selectedItems = useSelector((state) => state.nav.side);
  console.log(selectedItems);

  const location = useLocation();
  

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

  useEffect(() => {
    if (location.pathname.startsWith("/admin")) {
      root.classList.add("dark");
    }
  }, []);

  return (
    <div
      className={
        location.pathname.startsWith("/admin")
          ? ""
          : "pl-[5%] md:pl-[15%] pr-[5%] md:pr-[15%]"
      }
    >
      {<Index />}
    </div>
  );
}
