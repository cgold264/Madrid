import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import { useSelector, useDispatch } from 'react-redux';
import { falseInputPopup} from '../../../actions/itemActions';
import {addRestaurant} from '../../../services/tableDataService';

export default function SubmitPopup(){

    const {userLatitude, userLongitude} = useSelector((state) => state.user)
    const {inputRestaurant} = useSelector((state) => state.popups)

    const[restaurantInput, setRestaurantInput] = useState({latitude: userLatitude, longitude: userLongitude})
    const[inputError, setInputError] = useState(true)
    const dispatch = useDispatch();

    return (
      <Popup
        open={inputRestaurant}
        position="center"
        onClose={() => dispatch(falseInputPopup())}
      >
        <div className="px-3">
          <button
            className="close"
            onClick={() => {
              dispatch(falseInputPopup());
            }}
          >
            &times;
          </button>
          <h3 className="text-center">Submit a New Restaurant</h3>
          <form>
            <label for="restaurantNameInput" className="text-right">
              Restaurant Name
            </label>
            <div class="input-group mb-3">
              <input
                type="text"
                className={`form-control ${
                  restaurantInput?.name ? `is-valid` : `is-invalid`
                }`}
                id="restaurantNameInput"
                placeholder="Name"
                onChange={(input) => {
                  setInputError(false);
                  setRestaurantInput({
                    ...restaurantInput,
                    name: input.target.value,
                  });
                }}
                required
              ></input>
              <div class="invalid-feedback">Please input Restaurant Name.</div>
            </div>
            <label for="restaurantItemInput">Item</label>
            <div class="input-group mb-3">
              <input
                type="text"
                id="restaurantItemInput"
                placeholder="Item"
                className={`form-control ${
                  restaurantInput?.item ? `is-valid` : `is-invalid`
                }`}
                onChange={(input) => {
                  setRestaurantInput({
                    ...restaurantInput,
                    item: input.target.value,
                  });
                }}
                required
              ></input>
              <div class="invalid-feedback">Please input item.</div>
            </div>
            <label for="restaurantCostInput">Cost</label>
            <div class="input-group mb-3">
              <input
                type="number"
                id="restaurantCostInput"
                placeholder="Cost"
                className={`form-control ${
                  restaurantInput?.price ? `is-valid` : `is-invalid`
                }`}
                onChange={(input) => {
                  setRestaurantInput({
                    ...restaurantInput,
                    price: input.target.value,
                  });
                }}
                required
              ></input>
              <div class="invalid-feedback">Please input item cost.</div>
            </div>
            <div className="form-group">
              <label for="restaurantDescription">Description</label>
              <textarea
                className="form-control"
                id="restaurantDescription"
                rows="3"
                onChange={(input) =>
                  setRestaurantInput({
                    ...restaurantInput,
                    description: input.target.value,
                  })
                }
              ></textarea>
            </div>
            <div className="col-12 my-3">
              <button
                className="btn btn-primary"
                type="submit"
                onClick={() => {
                  if (!inputError) {
                    dispatch(addRestaurant(restaurantInput));
                    dispatch(falseInputPopup());
                  }
                }}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </Popup>
    ); 
}
