import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

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
      description: ['List', 'Add'   ],
    },
    {
      title: 'Bars',
      description: [
        'Cool stuff',
        'Random feature',
        'Team feature',
        'Developer stuff',
        'Another one',
      ],
    },
    {
      title: 'Beers',
      description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
    },
  ];


export default function Footer(){
    return (<>
    <footer class="text-center text-white mt-3">
  <div class="container p-4">
    <section class="">
      <div class="row">
        <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
          <div
            class="bg-image hover-overlay ripple shadow-1-strong rounded"
            data-ripple-color="light"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp"
              class="w-100"
              alt="test"
            />
            <a href="#!">
              <div
                class="mask"
              ></div>
            </a>
          </div>
        </div>
        <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
          <div
            class="bg-image hover-overlay ripple shadow-1-strong rounded"
            data-ripple-color="light"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/fluid/city/111.webp"
              class="w-100"
              alt="test"
            />
            <a href="#!">
              <div
                class="mask"
              ></div>
            </a>
          </div>
        </div>
        <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
          <div
            class="bg-image hover-overlay ripple shadow-1-strong rounded"
            data-ripple-color="light"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/fluid/city/112.webp"
              class="w-100"
              alt="test"
            />
            <a href="#!">
              <div
                class="mask"
              ></div>
            </a>
          </div>
        </div>
        <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
          <div
            class="bg-image hover-overlay ripple shadow-1-strong rounded"
            data-ripple-color="light"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/fluid/city/114.webp"
              class="w-100"
              alt="test"
            />
            <a href="#!">
              <div
                class="mask"
              ></div>
            </a>
          </div>
        </div>
        <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
          <div
            class="bg-image hover-overlay ripple shadow-1-strong rounded"
            data-ripple-color="light"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/fluid/city/115.webp"
              class="w-100"
              alt="test"
            />
            <a href="#!">
              <div
                class="mask"
              ></div>
            </a>
          </div>
        </div>
        <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
          <div
            class="bg-image hover-overlay ripple shadow-1-strong rounded"
            data-ripple-color="light"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/fluid/city/116.webp"
              class="w-100"
              alt="test"
            />
            <a href="#!">
              <div
                class="mask"
              ></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>

  <div class="text-center p-3">
    © 2020 Copyright:
    <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
</footer>
    </>);
}