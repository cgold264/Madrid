import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/StarBorder';
import Grid from '@mui/material/Grid';
import ItemPopup from '../itemPopup/ItemPopup';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Leaders(props) {
  const tiers = props.restaurants ? [{...props.restaurants[1], place: "second"}, {...props.restaurants[0], place: "first"}, {...props.restaurants[2], place:"third"}] : null;
  useEffect(() => {
    AOS.init();
  }, []);

  const[itemOpen, setItemOpen] = useState({open: false})

    return <section id="Leaders">
      {itemOpen.open ? 
        <ItemPopup item={itemOpen.data} onClose={() => {setItemOpen(false)}}/>
      : null}
      <div data-aos="fade-up">
            <Grid container spacing={5} alignItems="flex-end">

              {tiers?.map((tier) => (

                // Enterprise card is full width at sm breakpoint
                <Grid
                    item
                    key={tier.name}
                    xs={12}
                    sm={12}
                    md={4}
                  >
                  <Card>
                      {tier.place === 'first' ? <div className="row bg-warning text-end p-2">
                      
                          <div className="col-2">
                            <StarIcon /> 
                          </div>
                      </div>
                      : null}
                      <div className="row m-0">
                        <div className="col-12 text-center mt-2">
                          <h1><b>{tier.establishment?.name}</b></h1>
                        </div>
                      </div>
                      <div className='row m-0'>
                      <div className="col-12 text-center mt-2">
                          <h5 className="text-secondary">
                            {tier.establishment?.description}
                          </h5>
                        </div>
                      </div>
                      {tier.place === 'first' ? 
                        <div className="row text-center m-0 p-0 border-dark">
                        <h5 className="text-warning"><i>Current Winner </i></h5>
                      </div> : null}
                      
                      <CardContent
                      sx={{
                        backgroundColor: "transparent"
                      }}
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'baseline',
                
                          }}
                        >
                          <Typography component="h2" variant="h3" color="text.primary">
                            ${tier.price}
                          </Typography>
                          <Typography variant="h6" color="text.secondary">
                            /{tier.item ? tier.item : tier.drink}
                          </Typography>
                        </Box>
                        <ul>
                          <div className="m-1">
                          <Typography
                                component="li"
                                variant="subtitle1"
                                align="center"
                              >
                                {tier.description}
                            </Typography>
                            </div>
                        </ul>
                      </CardContent>
                      <CardActions>
                        <button 
                          className={`btn w-100 btn-${tier.place !== 'first' ?'outline-secondary' : 'warning'}`}
                          onClick={() => {
                            setItemOpen({open: true, data: tier})
                          }}>
                          {"info"}
                        </button>
                      </CardActions>
                    </Card>
                  </Grid>
              ))}
            </Grid>
          </div>
        </section>
}

export default Leaders;