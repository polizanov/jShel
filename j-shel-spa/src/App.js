import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/root/Header/Header';
import Footer from './components/root/Footer/Footer';


import GuestHome from './components/home/GuestHome/GuestHome';
import Details from './components/hotels/Details/Details';
import Login from './components/auth/Login/Login';
import Register from './components/auth/Register/Register';

import Loading from './components/error/Loading/Loading';


const AuthenticatedHome = lazy(() => import('./components/home/AuthenticatedHome/AuthenticatedHome'));
const CreateHotel = lazy(() => import('./components/hotels/CreateHotel/CreateHotel'));
const EditHotel = lazy(() => import('./components/hotels/EditHotel/EditHotel'));
const Profile = lazy(() => import('./components/auth/Profile/Profile'));
const FavouriteHotels = lazy(() => import('./components/hotels/FavouriteHotels/FavouriteHotels'));


function App() {

  return (
    <div className="App">
      <Header />
      <main>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" exact element={<GuestHome />} />
            <Route path="/home" exac element={<AuthenticatedHome />} />
            <Route path="/details/:hotelId" exact element={<Details />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/register" exact element={<Register />} />
            <Route path="/create" exact element={<CreateHotel />} />
            <Route path="/edit/:hotelId" exact element={<EditHotel />} />
            <Route path="/my-profile" exact element={<Profile />} />
            <Route path="/my-favourite" exact element={<FavouriteHotels />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
