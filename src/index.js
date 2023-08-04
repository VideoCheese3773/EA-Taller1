console.log("cyka blyat");

let APIData = null;

async function loadAPI () {
    const url = "https://swapi.dev/api/people/";
    const response = await fetch(url);
    APIData = await response.json()
    console.log("APIData",APIData)
    showAPI()
}

function showAPI () {
    console.log("loading data...")
}

loadAPI()