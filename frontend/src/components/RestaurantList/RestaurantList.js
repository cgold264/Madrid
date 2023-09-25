import React, { useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import AOS from 'aos';
import 'aos/dist/aos.css';

const cards = [1, 2, 3, 4, 5, 6];

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
                    image={card.x_cord ? "../../../public/logo192.jpg" : "../../../public/madrid_header.jpg"}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the
                      content.
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