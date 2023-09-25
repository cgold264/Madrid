import React, { useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import imageUrl from './plaza_mayor.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const BingMapsKey = 'AmXWvfcsOa3d9hKybGtO0alCJkK41JP3fefPZc0p1aoVT2qixWMPwCcfMy2x_JIU';

function RestaurantList(props) {

  useEffect(() => {
    AOS.init();
  }, []);

    return <section id="restaurantList">
      <div data-aos="fade-up" className="bg-dark">
                <Container
            maxWidth="md"
            sx={{
            borderTop: (theme) => `1px solid ${theme.palette.divider}`,
            py: [6, 6],
            }}
        > 
        <Grid container spacing={4}>
            {props.items?.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image={card.latitude ? 
                          `https://dev.virtualearth.net/REST/v1/Imagery/Map/AerialWithLabels/${card.latitude},${card.longitude}/15?mapSize=400,200&pp=${card.latitude},${card.longitude};;${card.name}&key=${BingMapsKey}` 
                          : imageUrl}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h4" component="h2">
                      {card.name}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h2">
                      ${card.price}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    {/* <Button size="small">Edit</Button> */}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        </div>
      </section>
}

export default RestaurantList;