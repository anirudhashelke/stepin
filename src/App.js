import './App.css'
import './responsive.css'
import Navbar from './navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './Home';
import { Work } from './components/work/Work';
import { Route, Routes } from 'react-router-dom';
import { AboutPage } from './components/about/AboutPage';
function App() {
  
  return (
    <>
    <Navbar />
    {/* <Home /> */}
   <Routes >
    <Route path='/' element={ <Home /> } />
      <Route path='/About' element={ <AboutPage />} />
      <Route path='/Work' element={<Work />} />
      </Routes>
    <Footer />
    </>
  );
}

export default App;
