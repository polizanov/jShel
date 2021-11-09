import './App.css';
import Header from './components/root/Header/Header';
import Footer from './components/root/Footer/Footer';

import GuestHome from './components/home/GuestHome/GuestHome';
import Details from './components/hotels/Details/Details';
import Login from './components/auth/Login/Login';
import Register from './components/auth/Register/Register';

import Hotels from './components/hotels/Hotels/Hotels';
import NoData from './components/hotels/NoData/NoData';

function App() {
  return (
    <div className="App">
      <Header />
        <main>
          <Register />
        </main>
      <Footer />
    </div>
  );
}

export default App;
