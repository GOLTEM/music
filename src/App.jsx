import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/home_page/Home';
import HomaPage from './pages/home_page/HomaPage';

function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route exact path='/explore' element={<Home />} />
        <Route exact path='/' element={<HomaPage />} />
      </Routes >
    </BrowserRouter>
  );
}

export default App;
