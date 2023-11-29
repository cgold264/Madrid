export const addUserLocation = (location) => ({
    type: 'SET_LOCATION',
    payload: location
  });

  export const setLoginUser = (location) => ({
    type: 'SET_USER',
    payload: location
  });

export const falseLoginPopup = () => ({
    type: 'FALSE_LOGIN_POPUP'
})

export const trueLoginPopup = () => ({
    type: 'TRUE_LOGIN_POPUP'
})