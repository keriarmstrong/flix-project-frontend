import './App.css';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//Pages
import Edit from './pages/Edit';
import Index from './pages/Index';
import Landing from './pages/Landing';
import New from './pages/New';
import Display from './pages/Display';
import 'bootstrap/dist/css/bootstrap.min.css'

//Component
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes> 
        <Route path="/shows/:id/edit" element={<Edit />}/>
        <Route path="/shows" element={<Index />}/>
        <Route path="/" element={<Landing />} />
        <Route path="/shows/new" element={<New />} />
        <Route path="/shows/:id" element={<Display />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
