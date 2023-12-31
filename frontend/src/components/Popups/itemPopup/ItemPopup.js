import React from 'react';
import Popup from 'reactjs-popup';
import { useSelector } from 'react-redux';
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
    return d.toFixed(2);
}

export default function RestaurantPopup({item, onClose}){

  const contentStyle = { maxWidth: '500px' };

    const BingMapsKey = 'AmXWvfcsOa3d9hKybGtO0alCJkK41JP3fefPZc0p1aoVT2qixWMPwCcfMy2x_JIU';
    
    const {userLatitude, userLongitude} = useSelector((state) => state.user)

    var appleMapsUrl = `https://maps.apple.com/?daddr=${item.establishment.latitude},${item.establishment.longitude}`;


// Check if link can be opened with Google Maps.

    return (
      <div style={{ width: '100%', maxHeight: '75%' }}>
        <Popup
          open={true}
          position="center"
          onClose={onClose}
          {...{
            contentStyle,
          }}
        >
          <div className="px-3 py-2">
            <button className="close" onClick={onClose}>
              &times;
            </button>
            <h3 className="text-center">{item?.name}</h3>
            <div className="row text-center">
              <div className="map-one">
                <ReactBingmaps
                  id="one"
                  bingmapKey={BingMapsKey}
                  center={[
                    item?.establishment.latitude,
                    item?.establishment.longitude,
                  ]}
                  pushPins={[
                    {
                      location: [
                        item?.establishment.latitude,
                        item?.establishment.longitude,
                      ],
                      option: { color: 'red' },
                      addHandler: {
                        type: 'click',
                        callback: () => {
                          window.open(appleMapsUrl);
                        },
                      },
                    },
                    {
                      location: [userLatitude, userLongitude],
                      option: { color: 'blue' },
                      addHandler: {
                        type: 'click',
                        callback: () => {
                          console.log('click');
                        },
                      },
                    },
                  ]}
                  zoom={18}
                  className="customClass"
                ></ReactBingmaps>
              </div>
            </div>
            <div className="container overflow-auto">
              <div className="row text-center">
                <h1>
                  <b>{item?.establishment.name}</b>
                </h1>
              </div>
              {userLatitude ? (
                <div className="row">
                  <h5 className="text-secondary text-center">{`${calcDistanceInKM(
                    item?.establishment.latitude,
                    item?.establishment.longitude,
                    userLatitude,
                    userLongitude
                  )} KM from your location`}</h5>
                </div>
              ) : null}
            </div>
          </div>
        </Popup>
      </div>
    );
}
