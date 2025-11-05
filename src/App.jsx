import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/index.jsx";
import { Login } from "./pages/Login/index.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />     
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
