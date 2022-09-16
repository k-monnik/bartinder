//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM.


fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin')
    .then((response) => response.json()) //parse response as JSON
    .then(data => {
        console.log(data.drinks[0])
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

