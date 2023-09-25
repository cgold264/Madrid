import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import StarIcon from '@mui/icons-material/StarBorder';
import Grid from '@mui/material/Grid';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Leaders(props) {
  const tiers = props.restaurants ? [{...props.restaurants[0], place: "first"}, {...props.restaurants[1], place: "second"}, {...props.restaurants[2], place:"third"}] : null;
  useEffect(() => {
    AOS.init();
  }, []);
    return <section id="Leaders">
      <div data-aos="fade-up">
      <Container maxWidth="md" component="main" >
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
                  <Card
                  >
                    <CardHeader
                      title={tier.name}
                      subheader={tier.place === 'first' ? 'Current Winner' : null}
                      titleTypographyProps={{ align: 'center' }}
                      action={tier.place === 'first' ? <StarIcon /> : null}
                      subheaderTypographyProps={{
                        align: 'center',
                      }}
                      sx={{
                        backgroundColor: (theme) =>
                          theme.palette.mode === 'light'
                            ? theme.palette.grey[200]
                            : theme.palette.grey[700],
                      }}
                    />
                    <CardContent>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'baseline',
                          mb: 2,
                        }}
                      >
                        <Typography component="h2" variant="h3" color="text.primary">
                          ${tier.price}
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                          /{tier.item}
                        </Typography>
                      </Box>
                      <ul>
                      <Typography
                            component="li"
                            variant="subtitle1"
                            align="center"
                          >
                            Lorem5
                          </Typography>

                      </ul>
                    </CardContent>
                    <CardActions>
                      <Button fullWidth variant={'outlined'}>
                        {"info"}
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
            </Container>
            </div>
        </section>
}

export default Leaders;