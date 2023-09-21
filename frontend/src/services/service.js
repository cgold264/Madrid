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
            console.log(data)
            return data
        })
        .catch(error => {
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
    return fetch(apiUrl + '/restaurants/add?name=' + payload.name +'&item=' + payload.item + '&price=' + payload.price)
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
