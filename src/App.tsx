import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/nav/Navbar';
import CharacterInfo from './pages/CharacterInfo';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Search from './pages/Search';

const App = () => {
  return (
    <div className="App flex flex-col min-h-screen justify-betwee bg-primary-gray">
      <Navbar />
      <div className="mb-auto p-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/character">
            <Route path=":characterId" element={<CharacterInfo />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
