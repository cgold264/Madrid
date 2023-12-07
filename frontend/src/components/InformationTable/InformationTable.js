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
import ItemPopup from '../Popups/itemPopup/ItemPopup';
import DeletePopup from '../Popups/DeletePopup/DeletePopup';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  trueDeletePopup,
} from '../../actions/itemActions';


export default function InformationTable(props) {
  const {userName} = useSelector((state) => state.user)
  const { deletePopup } = useSelector((state) => state.popups);
    const dispatch = useDispatch();

  const contentStyle = { width: '300px' };


  useEffect(() => {
    AOS.init();
  }, []);

  const[itemOpen, setItemOpen] = useState({open: false})
  const [deleteItem, setDeleteItem] = useState(null)

  return (
    <section id="RestaurantTable" className="bg-dark">
      {deletePopup ? <DeletePopup item={deleteItem} /> : null}
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
                              setDeleteItem(row);
                              console.log("Call", deleteItem)
                              dispatch(trueDeletePopup());
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