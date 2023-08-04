console.log("Initializing API Fetch");

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
    let cardHolder = document.getElementById("cardHolder")
    let cardInfo = "";
    APIData.results.forEach(e => {
        const cardStuff = this.document.createElement('h3');
        cardInfo = `Name: ${e.name} Height: ${e.height}cm Weight: ${e.mass}Kg`
        console.log(cardInfo)
        cardStuff.append(cardInfo)
        cardHolder.appendChild(cardStuff)
    });
}

loadAPI()