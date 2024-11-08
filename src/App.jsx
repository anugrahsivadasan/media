import { Routes, Route, Navigate } from 'react-router-dom';  // Import Routes and Route
import './App.css';
import Dashboard from './Pages/Dashboard';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Auth from './Pages/Auth';


function App() {
  return (
    <>
   
    <Routes>
      <Route path='/' element={<Home />} />              {/* Home */}
      <Route path='/login' element={<Auth />} />        {/* Login */}
      <Route path='/register' element={<Auth register />} />  {/* Register */}
      <Route path='/dashboard' element={<Dashboard />} /> {/* Dashboard */}
      <Route path='/projects' element={<Projects />} />  {/* Projects */}
      <Route path='/*' element={<Navigate to={'/'}/>}/>
    </Routes>
    <Footer/> 
    </>
     );
}

export default App;
