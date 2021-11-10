import './App.css';
import Header from './components/root/Header/Header';
import Footer from './components/root/Footer/Footer';

import { Route, Routes, Link, Redirect} from 'react-router-dom';


import GuestHome from './components/home/GuestHome/GuestHome';
import Details from './components/hotels/Details/Details';
import Login from './components/auth/Login/Login';
import Register from './components/auth/Register/Register';
import CreateHotel from './components/hotels/CreateHotel/CreateHotel';
import EditHotel from './components/hotels/EditHotel/EditHotel';
import ProfilePage from './components/auth/ProfilePage/ProfilePage';

import Hotels from './components/hotels/Hotels/Hotels';
import NoData from './components/hotels/NoData/NoData';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
          <Routes>
            <Route path="/" exact element={<GuestHome/>}/>
            <Route path="/login" exact element={<Login/>} />
            <Route path="/register" exact element={<Register/>}/>
            <Route path="/create" exact element={<CreateHotel/>}/>
            <Route path="/edit/:hotelId" exact element={<EditHotel/>}/>
          </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
