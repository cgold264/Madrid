import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import AOS from 'aos';
import {allBars} from '../../services/tableDataService';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function createData(name, drink, price) {
  return { name, drink, price};
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0),
  createData('Ice cream sandwich', 237, 9.0),
  createData('Eclair', 262, 16.0),
  createData('Cupcake', 305, 3.7),
  createData('Gingerbread', 356, 16.0),
];




export default function RestaurantTable() {
    useEffect(() => {
        AOS.init();
        allBars().then(data => {
          console.log("data", data)
          setBarRows(data)
        })
      }, []);

     const [barRows, setBarRows] = useState()
     
  return (
    <section id="RestaurantTable">
        <div data-aos="fade-up">
        <Container maxWidth="md" component="main" >
          <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
              <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Drink</TableCell>
                  <TableCell align="right">Price</TableCell>
              </TableRow>
              </TableHead>
              <TableBody>
              {barRows?.map((row) => (
                  <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                  <TableCell component="th" scope="row">
                      {row.name}
                  </TableCell>
                  <TableCell align="right">{row.drink}</TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                  </TableRow>
              ))}
              {console.log("component", barRows)}

              </TableBody>
          </Table>
          </TableContainer>
      </Container>
    </div>
    </section>
  );
}