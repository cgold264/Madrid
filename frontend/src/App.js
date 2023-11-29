import React, { useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import MainNav from './components/mainNav/MainNav';
import RestaurantPage from'./components/RestaurantPage/RestaurantPage';
import RestaurantPopup from'./components/RestaurantPopup/RestaurantPopup';
import LoginPopup from'./components/LoginPopup/LoginPopup';
import Footer from './components/footer/Footer';
import {addUserLocation} from './actions/userActions';
import {useSelector, useDispatch } from 'react-redux';
import {allBars} from './services/tableDataService';
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
  const {inputRestaurant} = useSelector((state) => state.popups)
  const {loginPopup} = useSelector((state) => state.popups)

  useEffect(() => {
    allBars().then(data => {
    })
   }, []);

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
    
    <div className='bg-dark'>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      {inputRestaurant ? 
          <RestaurantPopup />
      : null}
      {loginPopup ? 
          <LoginPopup />
      : null}
      <MainNav />
      {/* Restaurant Page */}
      
      <RestaurantPage />
      {/* End Restaurant Page */}
      {/* Footer */}
      <Footer />
    </ThemeProvider>
    </div>
  );
}

export default App;
