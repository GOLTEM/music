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
import RecentPosts from './pages/recent_posts/RecentPosts';
import Trending from './pages/trending/Trending';
import Dashboard from './dashboard/pages/Dashboard';
import ManageAlbums from './dashboard/pages/ManageAlbums/ManageAlbums';
import ManageSingles from './dashboard/pages/ManageSingles/ManageSingles';
import ManageEps from './dashboard/pages/ManageEps/ManageEps';
import DashboardLogin from './dashboard/pages/auth/DashboardLogin';
import AddAlbum from './pages/AddAlbum/AddAlbum';

function App() {
  return (
    <BrowserRouter>
      <Routes >

        {/* dashboard routes */}
        <Route path="/dashboard/home" element={<Dashboard />} />
        <Route path="/manage-albums" element={<ManageAlbums />} />
        <Route path="/manage-singles" element={<ManageSingles />} />
        <Route path="/manage-eps" element={<ManageEps />} />
        <Route path="/login" element={<DashboardLogin />} />
        <Route path="/add-album" element={<AddAlbum />} />

        {/* // other routes */}
        <Route path="/singles" element={<Singles />} />
        <Route path="/videos" element={<Vidoes />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/eps" element={<Eps />} />
        <Route path="/news" element={<News />} />
        <Route path='/explore' element={<Home />} />
        <Route path='/recent' element={<RecentPosts />} />
        <Route path='/trending' element={<Trending />} />
        <Route exact path='/' element={<HomaPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes >
    </BrowserRouter>
  );
}

export default App;
