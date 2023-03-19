import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
       <Header />
       <LandingPage />
       <Footer />
    </div>
  );
}

export default App;
