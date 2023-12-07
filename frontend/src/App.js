import React, { useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import MainNav from './components/mainNav/MainNav';
import RestaurantPage from'./components/RestaurantPage/RestaurantPage';
import SubmitPopup from'./components/Popups/SubmitPopup/SubmitPopup';
import LoginPopup from'./components/Popups/LoginPopup/LoginPopup';
import Footer from './components/Footer/Footer';
import {addUserLocation} from './actions/userActions';
import {useSelector, useDispatch } from 'react-redux';
import BarPage from './components/BarPage/BarPage';
import ExcursionsPage from './components/ExcursionsPage/ExcursionsPage';
import './App.scss';





// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme({
  palette: {
    dark: {
    },
  },
});

function App() {
  const dispatch = useDispatch();
  const { inputPopup } = useSelector((state) => state.popups);
  const {
    homePage,
    restaurantsPage,
    barsPage,
    profilePage,
    excursionsPage
  } = useSelector((state) => state.currentPage)
  const {loginPopup} = useSelector((state) => state.popups)

   useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
          dispatch(addUserLocation({latitude: position.coords.latitude, longitude: position.coords.longitude}))
      });
    } else { 
        console.log("Geolocation is not supported by this browser.");
    }
   }, [dispatch])


  return (
    <div className="bg-dark">
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles
          styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }}
        />
        <CssBaseline />

        {inputPopup ? <SubmitPopup /> : null}

        {loginPopup ? <LoginPopup /> : null}

        {/* main navBar */}
        <MainNav />

        {/* Home Page */}
        {homePage ? <RestaurantPage /> : null}

        {/* restaurant page */}
        {restaurantsPage ? <RestaurantPage /> : null}

        {/* bars page */}
        {barsPage ? <BarPage /> : null}

        {/* profile page */}
        {excursionsPage ? <ExcursionsPage /> : null}

        {/* Footer */}
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
