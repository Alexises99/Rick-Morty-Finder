import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/nav/Navbar';
import Character from './pages/Character';
import Home from './pages/Home';
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
            <Route path=":characterId" element={<Character />} />
          </Route>
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
