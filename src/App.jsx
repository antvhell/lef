import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Coem from "./pages/Coem";
import CorpusLinguisticoOral from "./pages/CorpusLinguisticoOral";
import CorpusSociolinguistico from "./pages/CorpusSociolinguistico";
import FormasSonoras from "./pages/FormasSonoras";
import Inicio from "./pages/Inicio";
import PatronesFonicos from "./pages/PatronesFonicos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/investigaciones" element={<Layout />}>
          <Route index element={<PatronesFonicos />} />
          <Route path="patrones-fonicos" element={<PatronesFonicos />} />
          <Route path="huasteco" element={<FormasSonoras />} />
          <Route
            path="corpus-sociolinguistico"
            element={<CorpusSociolinguistico />}
          />
          <Route path="coem" element={<Coem />} />
          <Route
            path="corpus-linguistico-oral"
            element={<CorpusLinguisticoOral />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
