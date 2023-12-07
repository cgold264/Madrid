import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import { useSelector, useDispatch } from 'react-redux';
import Popup from 'reactjs-popup';
import TableBody from '@mui/material/TableBody';
import DeleteIcon from '@mui/icons-material/Delete';
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
  const {userName} = useSelector((state) => state.user)
  const contentStyle = { width: '300px' };


  useEffect(() => {
    AOS.init();
  }, []);

  const[itemOpen, setItemOpen] = useState({open: false})
  const [deletePopup, setDeletePopup] = useState(false);

  return (
    <section id="RestaurantTable" className="bg-dark">
      {deletePopup ? (
        <Popup
          open={deletePopup}
          position="center"
          onClose={() => {
            setDeletePopup(false);
          }}
          {...{
            contentStyle,
          }}
        >
          <button
            className="close"
            onClick={() => {
              setDeletePopup(false);
            }}
          >
            &times;
          </button>
          <div className="row text-center ">
            <h3>Delete Establishment?</h3>
          </div>
          <div className="row m-3 text-center">
            <div className="col-6">
              <button className="btn btn-warning">Delete</button>
            </div>
            <div className="col-6">
              <button className="btn btn-outline-warning" 
              onClick={() => {
                setDeletePopup(false);
              }}>Cancel</button>
            </div>
          </div>
        </Popup>
      ) : null}
      {itemOpen.open ? (
        <ItemPopup
          item={itemOpen.item}
          onClose={() => {
            setItemOpen(false);
          }}
        />
      ) : null}
      <div data-aos="fade-up">
        <Container maxWidth="md" component="main" sx={{}}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  {props.rows?.map((row) => (
                    <TableCell align="center">
                      <b>{row}</b>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {props.data?.map((row) => (
                  <>
                    <TableRow
                      key={row?.establishment.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="center">
                        <button
                          type="button"
                          class="btn btn-outline-secondary"
                          onClick={() => setItemOpen({ open: true, item: row })}
                        >
                          {row?.establishment.name}
                        </button>
                      </TableCell>
                      <TableCell align="center">
                        {row.drink ? row.drink : row.item}
                      </TableCell>
                      {row?.establishment.submitter.userName !== userName ? (
                        <TableCell align="center">
                          {row?.establishment.submitter.userName}
                        </TableCell>
                      ) : (
                        <TableCell align="center">
                          <button
                            className="btn"
                            onClick={() => {
                              setDeletePopup(true);
                            }}
                          >
                            <DeleteIcon data-testid="DeleteIcon"></DeleteIcon>
                          </button>
                        </TableCell>
                      )}
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