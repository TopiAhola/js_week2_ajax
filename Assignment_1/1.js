'use strict';
let moduuli = "AJAX";
let tehtava = "Assignment 1";
let tehtavananto = `
GET Method. Practice using the Fetch API with async/await to make a GET request and log the response.
Utilize the Fetch API with async/await to make a GET request to the URL https://reqres.in/api/users/1.
Log the response data to the console.
2p
`

//main
const url = "https://reqres.in/api/users/1";
fetchStuff();


async function fetchStuff() {
    try {
        let response = await fetch(url, {
            headers: {
                'x-api-key': 'reqres-free-v1',
            },
        });
        console.log(response);
        let responseJson = await response.json();
        console.log(responseJson);

        const tuloste = 'Response in console. <br>' +'Test: '+responseJson.data.email ;

        //Tulostetaan moduuli, tehtävän numero ja tuloste sivulle:
        document.querySelector(`#moduuli`).innerHTML = moduuli;
        document.querySelector('#tehtava').innerHTML = tehtava;
        document.querySelector('#tehtavananto').innerHTML = tehtavananto;
        document.querySelector('#tuloste').innerHTML = tuloste;

    } catch (error) {
        console.log(error);
    }
}


