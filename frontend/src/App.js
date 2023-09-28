import React, { useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import MainNav from './components/mainNav/MainNav';
import RestaurantPage from'./components/RestaurantPage/RestaurantPage';
import {allBars} from './services/tableDataService';
import './App.scss';






function Copyright(props) {
  return (
    <Typography variant="body2" color="text.light" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const footers = [
  {
    title: 'Restaurants',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: [
      'Cool stuff',
      'Random feature',
      'Team feature',
      'Developer stuff',
      'Another one',
    ],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme({
  palette: {
    dark: {
    },
  },
});

function App() {



  useEffect(() => {
    allBars().then(data => {
      console.log("data", data)
    })
   }, []);


  return (
    <div className='bg-dark'>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <MainNav />
      {/* Restaurant Page */}
      <RestaurantPage />
      
      {/* End Restaurant Page */}
      {/* Footer */}
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: `1px solid `,
          borderColor: 'text.primary',
          py: [3, 6],
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <h6 className="text-light">
              {footer.title}
              </h6>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <a href="3" className="text-light">
                    {item}
                    </a>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Container>
      {/* End footer */}
    </ThemeProvider>
    </div>
  );
}

export default App;
