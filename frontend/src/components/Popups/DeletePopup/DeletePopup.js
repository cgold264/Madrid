import React from 'react';
import Popup from 'reactjs-popup';
import { useSelector, useDispatch } from 'react-redux';
import {
  falseDeletePopup,
  trueDeletePopup,
} from '../../../actions/itemActions';

import { deleteEstablishment } from '../../../services/tableDataService';





export default function DeletePopup(props) {
    const { deletePopup } = useSelector((state) => state.popups);
    const dispatch = useDispatch();
  const contentStyle = { width: '300px' };



  return (
    <Popup
      open={deletePopup}
      position="center"
      onClose={() => {
        dispatch(falseDeletePopup());
      }}
      {...{
        contentStyle,
      }}
    >
      {console.log("Delte popup", props)}

      <button
        className="close"
        onClick={() => {
          dispatch(falseDeletePopup());
        }}
      >
        &times;
      </button>
      <div className="row text-center ">
        <h3>Delete Establishment?</h3>
      </div>
      <div className="row m-3 text-center">
        <div className="col-6">
          <button
            className="btn btn-warning"
            onClick={() => {
              dispatch(deleteEstablishment(props?.item));
              dispatch(falseDeletePopup());
            }}
          >
            Delete
          </button>
        </div>
        <div className="col-6">
          <button
            className="btn btn-outline-warning"
            onClick={() => {
              dispatch(falseDeletePopup());
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </Popup>
  );
}
