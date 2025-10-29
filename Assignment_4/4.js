'use strict';
let moduuli = "AJAX";
let tehtava = "Assignment 4";
let tehtavananto = `
Generic Fetch Function. Create a reusable async function that abstracts the Fetch API usage and handles errors.
Define an async function named fetchData that takes two parameters: url and options.
Use the Fetch API with async/await to make a request to the specified url with the provided options.
If the response is not successful (status code other than 2xx), throw an error with an appropriate message.
Return the response as a JSON promise if successful.
When testing the function, call the fetchData function with the desired URL and options. Example:
`

//Tulostetaan moduuli, tehtävän numero ja tuloste sivulle:
document.querySelector(`#moduuli`).innerHTML = moduuli;
document.querySelector('#tehtava').innerHTML = tehtava;
document.querySelector('#tehtavananto').innerHTML = tehtavananto;

const tuloste = document.querySelector('#tuloste').innerHTML = 'Results in console';


const user = {
    id	: 50,
    email : "Mail@mail.fi",
    usernamr : "testi",
    first_name : "Aas",
    last_name :	"Sukunimi",
    avatar :	""
}

const goodUrl = "https://reqres.in/api/users/1";
const badUrl = "https://reqres.in/api/unknown/23";
let opt = {
    method : 'GET',
    headers: {
        'x-api-key': 'reqres-free-v1',
    },
};

let goodData;
let badData;

try {
    goodData = fetchData(goodUrl, opt);
    console.log("Good url: "+goodUrl);
    console.log(goodData);
} catch (error1) {
    console.log("Error1 in fetchData");
    console.log(error1.cause);
}

try {
    badData = fetchData(badUrl,opt);
    console.log("Bad url: "+badUrl);
    console.log(badData);
} catch (error2) {
    console.log("Error2 in fetchData");
    console.log(error2.cause);
}


async function fetchData(url, options) {
    try {
        let response = await fetch(url, options);
        console.log(response);

        if (!response.ok) {
            throw new Error("Response not ok!",
                { cause : 'response status '+response.status.toString()} );

        } else {
            let returnValue = await response.json();
            console.log(returnValue);
            return returnValue;
        }

    } catch (error) {
        console.log(error.name +'\nMessage: '+error.message +'\nCause: '+error.cause);
        return error;
    }
}


