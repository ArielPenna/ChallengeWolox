import './css/styles.css';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Woloxers from './components/Woloxers';
import Beneficts from './components/Beneficts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <Woloxers />
      <Beneficts />
      <Footer />
    </div>
  );
}

export default App;
