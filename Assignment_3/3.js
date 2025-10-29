'use strict';
let moduuli = "AJAX";
let tehtava = "Assignment 3";
let tehtavananto = `
Attempt to make a GET request to a non-existent URL (e.g., https://reqres.in/api/unknown/23).
Handle the error using try/catch blocks.
Also try other methods (POST, PUT, DELETE)
Log an error message to the console in case of an error.
4p
`
//Tulostetaan moduuli, tehtävän numero ja tuloste sivulle:
document.querySelector(`#moduuli`).innerHTML = moduuli;
document.querySelector('#tehtava').innerHTML = tehtava;
document.querySelector('#tehtavananto').innerHTML = tehtavananto;
let tuloste = document.querySelector('#tuloste');


const url = "https://reqres.in/api/unknown/23";

const user = {
    id	: 50,
    email : "Mail@mail.fi",
    usernamr : "testi",
    first_name : "Aas",
    last_name :	"Sukunimi",
    avatar :	""
}

doStuff("GET");
doStuff("POST");
doStuff("PUT");
doStuff("DELETE");


async function doStuff(HTTPSmethod) {
    try {
        let response = await fetch(url, {
            method : HTTPSmethod,
            headers: {
                'x-api-key': 'reqres-free-v1',
            },
            //body : JSON.stringify(user)
        });
        console.log(response);
        if (!response.ok) {
            throw new Error('Some fetch error!',{cause : response.status})
        }

        let newResponse = document.createElement('p');
        newResponse.innerHTML = 'Response in console. <br> Status: '+response.status;
        tuloste.appendChild(newResponse);


    } catch (error) {
        console.log('Name: '+error.name +' Message: '+error.message +' Cause: '+error.cause);

        let newResponse = document.createElement('p');
        newResponse.innerHTML = 'Error: ' + error.message +'<br> in console.';
        tuloste.appendChild(newResponse);

    }
}
