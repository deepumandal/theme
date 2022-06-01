import logo from "./logo.svg";
import "./App.css";
import Theme from "./component/Theme";
import { useContext } from "react";
import { ThemeProvider } from "./context/Themecontext";
import { themeContext } from "./context/Themecontext";
function App() {

  return (
    <ThemeProvider>
      <div className="App"  >
        <Theme />
      </div>
    </ThemeProvider>
  );
}

export default App;
