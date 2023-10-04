import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import { useSelector, useDispatch } from 'react-redux';
import { ReactBingmaps } from 'react-bingmaps';

function degrees_to_radians(degrees)
{
  var pi = Math.PI;
  return degrees * (pi/180);
}

function calcDistanceInKM(lat1, lon1, lat2, lon2) {
     var R = 6371; 
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

    const BingMapsKey = 'AmXWvfcsOa3d9hKybGtO0alCJkK41JP3fefPZc0p1aoVT2qixWMPwCcfMy2x_JIU';
    
    const {userLatitude, userLongitude} = useSelector((state) => state.user)

    var mapLocationUrl = `maps.apple.com/?ll=${item.latitude},${item.longitude}`;
    var ref = window.open(encodeURI(mapLocationUrl), '_system', 'location=no');


    return <div style={{width: "100%"}}>
      <Popup 
            open={true} 
            position="center" 
            onClose={onClose}
            >
         <div className="px-3 py-2">
             <button className="close" onClick={onClose}>&times;</button>
             <h3 className="text-center">{item?.name}</h3>
             <div className="row text-center">
              <div className="map-one">
                  <ReactBingmaps 
                    id = "one"
                    bingmapKey = {BingMapsKey} 
                    center = {[item?.latitude, item?.longitude]}
                      pushPins = {
                        [
                          {
                            "location":[item?.latitude, item?.longitude], "option":{ color: 'red' }, "addHandler": {"type" : "click", callback: () => {ref} }
                          },
                          {
                            "location":[userLatitude, userLongitude], "option":{ color: 'blue' }, "addHandler": {"type" : "click", callback: () => {console.log("click")} }
                          },
                        ]
                      }
                    zoom = {18}
                    className = "customClass"
                  > 
                </ReactBingmaps>
              </div>
             </div>
             <div className="row">
                <h5 className="text-secondary text-center">{`${calcDistanceInKM(item?.latitude, item?.longitude, userLatitude, userLongitude).toFixed(2)} KM from your location`}</h5>
             </div>
         </div>
        </Popup> 
        </div>
}
