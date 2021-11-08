import './App.css';
import Header from './components/root/Header/Header';
import Footer from './components/root/Footer/Footer';
import Hotels from './components/hotels/Hotels/Hotels'

function App() {
  return (
    <div className="App">
      <Header />
      <Hotels header="Gold Area" type="gold" />
      <Footer />
    </div>
  );
}

export default App;
