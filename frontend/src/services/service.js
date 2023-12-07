const apiUrl = 'http://localhost:8080';

export function fetchBars() {
    return fetch(apiUrl + "/bars/all")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // returnVal = data
            // console.log("service", data);
            return data
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

export function fetchExcursions() {
  return fetch(apiUrl + '/excursions/all')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      // returnVal = data
      // console.log("service", data);
      return data;
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}

export function fetchEstablishment() {
    return fetch(apiUrl + "/establishment/all")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            return data
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

export function fetchEstablishmentUser(userName) {
  return fetch(apiUrl + '/establishment/getAllUser')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}

export function fetchRestaurants() {
    return fetch(apiUrl + "/restaurants/all")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            return data
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

export function addNewRestaurant(payload) {
    return fetch(apiUrl + '/restaurants/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // Set the appropriate content type
        },
        
        body: JSON.stringify(payload), // Convert the payload to a URL-encoded string
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

export function validateUserLogin(payload) {
  return fetch(apiUrl + '/users/validUser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // Set the appropriate content type
    },

    body: JSON.stringify(payload), // Convert the payload to a URL-encoded string
  })
    .then((response) => {
      console.log("Service Response", response)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return true;
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}

export function addNewUser(payload) {
  return fetch(apiUrl + '/users/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // Set the appropriate content type
    },

    body: JSON.stringify(payload), // Convert the payload to a URL-encoded string
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}

export function fetchUsers() {
    return fetch(apiUrl + "/users/all")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            return data
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
