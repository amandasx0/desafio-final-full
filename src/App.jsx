import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Donates from "./pages/Donates";
import Voluntary from "./pages/Voluntary";
import Events from "./pages/Events";
import Mentoring from "./pages/Mentoring";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RegisterAction from "./pages/RegisterAction";
import AccountSettings from "./pages/AccountSettings";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doacao" element={<Donates />} />
        <Route path="/voluntarios" element={<Voluntary />} />
        <Route path="/eventos-e-palestras" element={<Events />} />
        <Route path="/mentoria" element={<Mentoring />} />
        <Route path="/entrar" element={<Login />} />
        <Route path="/cadastrar" element={<Register />} />
        <Route path="/participar-acao" element={<RegisterAction />} />
        <Route path="/configurar-conta" element={<AccountSettings />} />
      </Routes>
  );
};

export default App;
