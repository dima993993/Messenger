import { Routes, Route } from "react-router-dom";
import ContentPage from "./pages/ContentPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ContentPage />} />
        <Route path="/authorization" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
      </Routes>
    </div>
  );
};
export default App;
