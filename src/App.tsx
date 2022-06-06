import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/nav/Navbar';
import Home from './pages/Home';
import Search from './pages/Search';

const App = () => {
  return (
    <div className="App flex flex-col h-screen justify-betwee bg-primary-gray">
      <Navbar />
      <div className="mb-auto p-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
