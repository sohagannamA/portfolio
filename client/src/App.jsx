import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Index from "./routes/Index";
import { useLocation } from "react-router-dom";
import { toggleham } from "./features/nav/NavSlice";

export default function App() {
  const root = window.document.documentElement;
  const theme = useSelector((state) => state.theme.theme);
  const setHam = useSelector((state) => state.nav.resnav);

  console.log(setHam);

  const dispatch = useDispatch();

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

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) {
        dispatch(toggleham(false));
      }
    });
    return () => {
      window.removeEventListener("resize", () => {});
    };
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
