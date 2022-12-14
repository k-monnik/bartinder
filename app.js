//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM.

document.querySelector('button').addEventListener('click', getDrink)

function getDrink() {
    let drink = document.querySelector('input').value

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
        .then((response) => response.json()) //parse response as JSON
        .then(data => {
            console.log(data.drinks[3])
            // .map(cocktail => {
            //     return `
            //     <p><img src="${data.drinks.strDrinkThumb}" alt="${data.drinks.strDrink}"/></p>
            //     <p>${data.drinks.strDrink}</p>
            //     <p>Recipe: ${data.drinks.strInstructions}</p>
            //     `
            //if (document.querySelector('img').src = null) {
            //     document.querySelector('img').src = {placeholder}
            // }
            // })
            document.querySelector('h2').innerText = data.drinks[3].strDrink
            document.querySelector('img').src = data.drinks[3].strDrinkThumb
            document.querySelector('h4').innerText = data.drinks[3].strInstructions
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}




