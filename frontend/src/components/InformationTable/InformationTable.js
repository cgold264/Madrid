import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import ItemPopup from '../itemPopup/ItemPopup';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function InformationTable(props) {
  useEffect(() => {
    AOS.init();
  }, []);

  const[itemOpen, setItemOpen] = useState({open: false})

  return (
    <section id="RestaurantTable" className='bg-dark'>
      {itemOpen.open ? 
          <ItemPopup item={itemOpen.item} onClose={() => {setItemOpen(false)}}/>
        : null}
        <div data-aos="fade-up">
        <Container maxWidth="md" component="main"
          sx={{
          }}
         >
          <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead >
              <TableRow>
                {props.rows?.map((row) => (
                  <TableCell align="center"><b>{row}</b></TableCell>
                ))}
              </TableRow>
              </TableHead>
              <TableBody>
              {props.data?.map((row) => (<>

                  <TableRow
                  key={row?.establishment.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                  <TableCell align="center">
                    <button type="button" class="btn btn-outline-secondary" onClick={() => setItemOpen({open:true, item: row})}>{row?.establishment.name}</button>
                  </TableCell>
                    {() => {
                      switch(row){

                      }
                    }
                    }
                      <TableCell align="center">{row?.establishment.submitter.userName}</TableCell>

                    
                  </TableRow>
              </>
              ))}

              </TableBody>
          </Table>
          </TableContainer>
      </Container>
    </div>
    </section>
  );
}