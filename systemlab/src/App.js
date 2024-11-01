import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import RegisterLabScreen from "./pages/RegisterLabScreen";
import ViewLabScreen from "./pages/ViewLabScreen";
import "./theme.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/cadastrarlaboratorios" element={<RegisterLabScreen />} />
        <Route path="/visualizarlaboratorios" element={<ViewLabScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
