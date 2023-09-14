import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function Hero() {

    const[addRestaurant, setAddRestaurant] = useState()

    return <>
        {addRestaurant ? 
        <Popup open={addRestaurant} position="center" onClose={() => {setAddRestaurant(false)}}>
                <div className="row text-center">
                    <button className="close" onClick={() => {setAddRestaurant(false)}}>          &times;        </button>
                    <div>Popup content here !!</div>
                    <div class="input-group input-group-sm mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-sm">Name</span>
                        </div>
                        <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"></input>
                    </div>
                    <div class="input-group input-group-sm mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-sm">Item</span>
                        </div>
                        <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"></input>
                    </div>
                    <div class="input-group input-group-sm mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-sm">Cost</span>
                        </div>
                        <input type="number" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"></input>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-primary" onClick={() => {setAddRestaurant(false)}}>Save</button>
                    </div>
                </div>
        </Popup> : null}
        <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
            <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
            >
            Pricing
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" component="p">
            Quickly build an effective pricing table for your potential customers with
            this layout. It&apos;s built with default MUI components with little
            customization.
            </Typography>
            <div className="text-center m-3">
            <button className="btn btn-primary" onClick={() => {setAddRestaurant(true)}}>Add a New Restaurant</button>
            </div>
        </Container>
  </>
}

export default Hero;