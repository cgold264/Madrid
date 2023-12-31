import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Popup from 'reactjs-popup';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import DeleteIcon from '@mui/icons-material/Delete';
import CardActions from '@mui/material/CardActions';
import ItemPopup from '../Popups/itemPopup/ItemPopup';
import DeletePopup from '../Popups/DeletePopup/DeletePopup';
import {
  falseDeletePopup,
  trueDeletePopup,
} from '../../actions/itemActions';

import imageUrl from './plaza_mayor.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const BingMapsKey = 'AmXWvfcsOa3d9hKybGtO0alCJkK41JP3fefPZc0p1aoVT2qixWMPwCcfMy2x_JIU';

function RestaurantList(props) {
  const { userName } = useSelector((state) => state.user);
  const { deletePopup } = useSelector((state) => state.user);
    const dispatch = useDispatch();

  
  useEffect(() => {
    AOS.init();
  }, []);

  const[itemOpen, setItemOpen] = useState({open: false, data: {}})
  const [deleteItem, setDeleteItem] = useState(null);



    return (
      <section id="restaurantList">
        {deletePopup ? (
          <DeletePopup item={deleteItem} />
        ) : null}
        {itemOpen.open ? (
          <ItemPopup
            item={itemOpen.data}
            onClose={() => {
              setItemOpen(false);
            }}
          />
        ) : null}
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
                <>
                  <Grid item key={card} xs={12} sm={6} md={4}>
                    <Card
                      sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      <CardMedia
                        component="div"
                        sx={{
                          // 16:9
                          pt: '56.25%',
                        }}
                        image={
                          card.establishment.latitude
                            ? `https://dev.virtualearth.net/REST/v1/Imagery/Map/AerialWithLabels/${card.establishment.latitude},${card.establishment.longitude}/15?mapSize=400,200&pp=${card.establishment.latitude},${card.establishment.longitude};;&key=${BingMapsKey}`
                            : imageUrl
                        }
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h4" component="h2">
                          {card.establishment.name}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="h2">
                          ${card.price}
                        </Typography>
                        <Typography>
                          {card.establishment.description}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <div className="row justify-content-end">
                          <div className="col-auto">
                            <button
                              className="btn btn-outline-secondary btn-small"
                              onClick={() => {
                                setItemOpen({ open: true, data: card });
                              }}
                            >
                              View
                            </button>
                          </div>
                          {card.establishment.submitter.userName === userName ? (
                            <div className="col-auto">
                              <button
                                className="btn"
                                onClick={() => {
                                  setDeleteItem(card);
                                  dispatch(trueDeletePopup());
                                }}
                              >
                                <DeleteIcon data-testid="DeleteIcon"></DeleteIcon>
                              </button>
                            </div>
                          ) : null}
                        </div>

                        {/* <Button size="small">Edit</Button> */}
                      </CardActions>
                    </Card>
                  </Grid>
                </>
              ))}
            </Grid>
          </Container>
        </div>
      </section>
    );
}

export default RestaurantList;