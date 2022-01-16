import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/home_page/Home';
import HomaPage from './pages/home_page/HomaPage';
import NotFound from './pages/not_found/NotFound';
import Albums from './pages/albums/Albums';
import Singles from './pages/singles/Singles';
import Vidoes from './pages/videos/Vidoes';
import Eps from './pages/eps/Eps';
import News from './pages/news/News';

function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/singles" element={<Singles />} />
        <Route path="/videos" element={<Vidoes />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/eps" element={<Eps />} />
        <Route path="/news" element={<News />} />
        <Route path='/explore' element={<Home />} />
        <Route exact path='/' element={<HomaPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes >
    </BrowserRouter>
  );
}

export default App;
