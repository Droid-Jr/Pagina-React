import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import ProtecRout from "./components/ProtecRout";
import ComponentesReact from "./pages/ComponentesReact";
import UsestateReact from "./pages/UsestateReact";
import DomVirtual from "./pages/DomVirtual";
import CicloDeVida from "./pages/CicloDeVida";
import Efect from "./pages/Efect";
import PeticionAxios from "./pages/PeticionAxios";
import RenderCon from "./pages/RenderCon";
import ListaKey from "./pages/ListaKey";
import InputControl from "./pages/InputControl";
import HookForms from "./pages/HookForms";
import RouterDoms from "./pages/RouterDoms";
import Reduxs from "./pages/Reduxs";
import Snipess from "./pages/Snipess";
import NavBard from "./components/ui/NavBard";
import { useSelector } from "react-redux";



function App() {

  const users = useSelector(state => state.user)


  return (
    <HashRouter>
      {
        users !== '' && <NavBard />
      }
      
      <Routes>
        <Route path="/" element={<Login />} />

        <Route element={<ProtecRout />}>
          <Route path="/conpos" element={<ComponentesReact />} />
          <Route path="/usetate" element={<UsestateReact />} />
          <Route path="/domvirtual" element={<DomVirtual />} />
          <Route path="/siclo" element={<CicloDeVida />} />
          <Route path="/efect" element={<Efect />} />
          <Route path="/axios" element={<PeticionAxios />} />
          <Route path="/render" element={<RenderCon />} />
          <Route path="/key" element={<ListaKey />} />
          <Route path="/inputs" element={<InputControl />} />
          <Route path="/hookForm" element={<HookForms />} />
          <Route path="/router" element={<RouterDoms />} />
          <Route path="/redux" element={<Reduxs />} />
          <Route path="/snipes" element={<Snipess />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
