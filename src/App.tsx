import "./styles/global.scss";
import useLocalStorage from "use-local-storage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // Checks and stores the value of `matches` property on the MediaQueryList object, which is true or false depending on the property passed into the `window.matchMedia()` function.

  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <BrowserRouter>
      {/* Header component here */}
      <Routes>{/* <Route path="/" element={<HomePage />}></Route> */}</Routes>
      {/* Footer component here */}
    </BrowserRouter>
  );
}

export default App;

// <div className="app" data-theme={theme}>
//   <h1>A Test of the Theme</h1>
//   <button onClick={switchTheme}>
//     Switch to {theme === "light" ? "dark" : "light"} theme
//   </button>
// </div>
