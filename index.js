// write your code here!
// This variable has the data you're working with

// console.log(data);

// FUNCTIONS

// CAPITALISE THE FIRST LETTER OF A STRING
function capitaliseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

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
    h2.innerText = capitaliseFirstLetter(pokemon.name)
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

    // CREATE 6 PARAGRAPHS THAT CONTAIN TEXT FOR THE CARD STATS
    for (let i = 0; i < 6; i++){
        let stat = document.createElement('p')
        stat.innerText = pokemon.stats[i].stat.name.toUpperCase() + ": " + pokemon.stats[i].base_stat
        statsContainer.append(stat)
    }

    // CREATE A PARAGRAPH DETAILING CHARACTOR APPEARANCES    
    let appearances = document.createElement('p')
    let appearancesText = capitaliseFirstLetter(pokemon.name) + " has appeared in the following games:-\n\n"
    for (let i = 0; i < pokemon.game_indices.length; i++)
        appearancesText += capitaliseFirstLetter(pokemon.game_indices[i].version.name) + ", "
    appearances.innerText = appearancesText
    statsContainer.append(appearances)
   }


// MAIN CODE

// CREATE & DISPLAY EVERY CARD IN THE ARRAY
for (let i = 0; i < data.length; i++)
    createCard(data[i])


