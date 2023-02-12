import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Topbar from './components/topbar';
import Leftbar from './components/leftbar';

import Accueil from './pages/Accueil';
import Profil from './pages/Profil';
import Reglage from './pages/Reglage';
import Communaute from './pages/Communaute';
import Erreur from './pages/Erreur';

function App() {

  return (
    <Router>
      <Topbar />
      <main>
      <Leftbar />
      <Routes>
      
      <Route exact path="/" element={<Accueil/>}></Route>
      <Route path="/user/:id" element={<Profil/>}></Route>
          <Route path="/parameters" element={<Reglage/>}></Route>
          <Route path="/community" element={<Communaute/>}></Route>
          <Route path="*" element={<Erreur/>}></Route>
        </Routes>
      {/* <main> */}
        {/* <Leftbar /> */}
      </main>
    </Router>
  );
}

export default App;
