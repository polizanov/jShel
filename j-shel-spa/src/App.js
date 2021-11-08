import './App.css';
import Header from './components/root/Header/Header';
import Footer from './components/root/Footer/Footer';
import Hotels from './components/hotels/Hotels/Hotels';
import NoData from './components/hotels/NoData/NoData';

function App() {
  return (
    <div className="App">
      <Header />
      <Hotels header="Gold Area" type="gold" />
      <NoData header="Looks like no one has added a hotel yet!"
        content="Be the first!"
      />
      <Footer />
    </div>
  );
}

export default App;
