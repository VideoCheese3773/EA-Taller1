console.log("Initializing API Fetch");

let APIData = null;

async function loadAPI () {
    const url = "https://swapi.dev/api/people/";
    const response = await fetch(url);
    APIData = await response.json()
    console.log("APIData",APIData)
    showLocalStorage()
    showAPI()
}

function showAPI () {
    console.log("loading data...")
    let cardHolder = document.getElementById("cardHolder")
    let cardInfo = "";
    APIData.results.forEach(e => {
        const cardStuff = this.document.createElement('h3');
        cardStuff.classList.add("cardStyle")
        cardInfo = `Name: ${e.name} Height: ${e.height}cm Weight: ${e.mass}Kg`
        const cardButton = this.document.createElement('button');
        cardButton.classList.add("buttonStyle")
        cardButton.innerText='Add';
        cardButton.addEventListener("click", addToLS)
        console.log(cardInfo)
        cardStuff.append(cardInfo)
        cardStuff.append(cardButton)
        cardHolder.appendChild(cardStuff)
    });
}

function showLocalStorage () {
    if ((localStorage.getItem("SWCard")) === null) {
        console.log("loading LocalStorage...")
    } else {
        console.log("Nothing in LocalStorage...")
    }
}

function addToLS () {
    console.log("Button Works")
}

loadAPI()