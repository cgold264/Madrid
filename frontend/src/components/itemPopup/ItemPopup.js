import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import { useSelector, useDispatch } from 'react-redux';
import {falseItemPopup} from '../../actions/itemActions';

function degrees_to_radians(degrees)
{
  var pi = Math.PI;
  return degrees * (pi/180);
}

function calcDistanceInKM(lat1, lon1, lat2, lon2) {
     var R = 6371; // km 
     //has a problem with the .toRad() method below.
     var x1 = lat2-lat1;

     var dLat = degrees_to_radians(x1); 
     var x2 = lon2-lon1;
     var dLon = degrees_to_radians(x2); 
     var a = Math.sin(dLat/2) * Math.sin(dLat/2) + 
                     Math.cos(degrees_to_radians(lat1)) * Math.cos(degrees_to_radians(lat2)) * 
                     Math.sin(dLon/2) * Math.sin(dLon/2);  
     var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
     var d = R * c; 
    return d;
}

export default function RestaurantPopup({item, onClose}){

    const {userLatitude, userLongitude} = useSelector((state) => state.user)

    return <Popup 
            open={true} 
            position="center" 
            onClose={onClose}
            >
         <div className="px-3 py-2">
             <button className="close" onClick={onClose}>&times;</button>
             <h3 className="text-center">{item?.name}</h3>
             <h5 className="text-secondary text-center">{`${calcDistanceInKM(item?.latitude, item?.longitude, userLatitude, userLongitude).toFixed(2)} KM from your location`}</h5>
         </div>
        </Popup> 
}
