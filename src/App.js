import Labs from './Labs';
import HelloWorld from './Labs/a3/HelloWorld';
import Kanbas from './Kanbas';
import { HashRouter } from 'react-router-dom';
import { Routes, Route, Navigate } from 'react-router';

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          {/* Default route */}
          <Route path="/" element={<Navigate to="/hello" />} />
          {/* Route: http://localhost:3000/#/hello */}
          <Route path="/hello" element={<HelloWorld />} />
          {/* Route: http://localhost:3000/#/Labs */}
          <Route path="/Labs/*" element={<Labs />} />
          {/* http://localhost:3000/#/Kanbas */}
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
