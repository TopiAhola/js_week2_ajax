'use strict';
let moduuli = "AJAX";
let tehtava = "Assignment 2";
let tehtavananto = `
POST Method. Practice making a POST request using the Fetch API with async/await and handling the response.
Make a POST request to the URL https://reqres.in/api/users with a JSON payload containing user information ( e.g., name and job).
Log the response data to the console.
3p
`

//main
const url = "https://reqres.in/api/users/register";

const user = {
    id	: 50,
    email : "Mail@mail.fi",
    usernamr : "testi",
    first_name : "Aas",
    last_name :	"Sukunimi",
    avatar :	""
}


postStuff();


async function postStuff() {
    try {
        let response = await fetch(url, {
            method : "POST",
            headers: {
                'x-api-key': 'reqres-free-v1',
            },
            body : JSON.stringify(user)
        });
        console.log(response);
        let responseJson = await response.json();
        console.log(responseJson);

        const tuloste = 'Response in console. <br>'
            +'Created at: '+responseJson['createdAt'] +'<br>'
        +'id '+responseJson['id'];

        //Tulostetaan moduuli, tehtävän numero ja tuloste sivulle:
        document.querySelector(`#moduuli`).innerHTML = moduuli;
        document.querySelector('#tehtava').innerHTML = tehtava;
        document.querySelector('#tehtavananto').innerHTML = tehtavananto;
        document.querySelector('#tuloste').innerHTML = tuloste;

    } catch (error) {
        console.log(error);
    }
}