// write your code here!
// This variable has the data you're working with

// console.log(data);

// FUNCTIONS

// CREAT A SINGLE CARD
function createCard(pokemon){
    
    // CREATE A CARD WITHIN CARDS
    let cards = document.querySelector('.cards')
    let card = document.createElement('article')
    card.setAttribute('class','card')
    cards.append(card)
    
    // CREATE H2
    let h2 = document.createElement('h2')
    h2.setAttribute('class','card--title')
    h2.innerText = pokemon.name
    card.append(h2)
    
    // CREATE IMAGE
    let image = document.createElement('img')
    image.setAttribute("class", "card--img")
    image.setAttribute("width", "256")
    image.setAttribute("src",pokemon.sprites.other["official-artwork"].front_default)
    card.append(image)

    // CREATE A DIV TO CONTAIN THE CARDS STATS
    let statsContainer = document.createElement('div')
    statsContainer.setAttribute('class','card--text')
    card.append(statsContainer)

    // CREATE 5 PARAGRAPHS FOR CARD STATS TEXT
    for (let i = 0; i < 6; i++){
        let stat = document.createElement('p')
        stat.innerText = pokemon.stats[i].stat.name.toUpperCase() + ": " + pokemon.stats[i].base_stat
        statsContainer.append(stat)
    }
}


// MAIN CODE

// CREATE & DISPLAY EVERY CARD IN THE ARRAY
for (let i = 0; i < data.length; i++)
    createCard(data[i])


