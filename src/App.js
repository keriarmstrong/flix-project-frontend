import './App.css';
import { Route, Routes } from 'react-router-dom';
//Pages
import Edit from './pages/Edit';
import Index from './pages/Index';
import Landing from './pages/Landing';
import New from './pages/New';
import Show from './components/Show';

//Component
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes> 
        <Route path="/shows/:id/edit" element={<Edit />}/>
        <Route path="/shows" element={<Index />}/>
        <Route path="/" element={<Landing />} />
        <Route path="/shows/new" element={<New />} />
        <Route path="/shows/:id" element={<Show />} />
      </Routes>
    </div>
  );
}

export default App;
