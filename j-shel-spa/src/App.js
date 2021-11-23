import './App.css';
import { useState } from 'react';
import Header from './components/root/Header/Header';
import Footer from './components/root/Footer/Footer';

import { Route, Routes, Link, Redirect } from 'react-router-dom';


import GuestHome from './components/home/GuestHome/GuestHome';
import AuthenticatedHome from './components/home/AuthenticatedHome/AuthenticatedHome';
import Details from './components/hotels/Details/Details';
import Login from './components/auth/Login/Login';
import Register from './components/auth/Register/Register';
import CreateHotel from './components/hotels/CreateHotel/CreateHotel';
import EditHotel from './components/hotels/EditHotel/EditHotel';
import Profile from './components/auth/Profile/Profile';
import FavouriteHotels from './components/hotels/FavouriteHotels/FavouriteHotels';

import { getAuthUsername } from './services/authService'

function App() {
  let user = getAuthUsername()
  const [username, setUsername] = useState(user);


  return (
    <div className="App">
      <Header username={username} setUsername={setUsername} />
      <main>
        <Routes>
          <Route path="/" exact element={<GuestHome />} />
          <Route path="/home" exac element={<AuthenticatedHome />} />
          <Route path="/details/:hotelId" exact element={<Details />} />
          <Route path="/login" exact element={<Login setUsername={setUsername} />} />
          <Route path="/register" exact element={<Register setUsername={setUsername} />} />
          <Route path="/create" exact element={<CreateHotel />} />
          <Route path="/edit/:hotelId" exact element={<EditHotel />} />
          <Route path="/my-profile" exact element={<Profile />} />
          <Route path="/my-favourite" exact element={<FavouriteHotels />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
