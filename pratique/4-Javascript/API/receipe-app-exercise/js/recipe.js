const urlParams = new URLSearchParams(window.location.search);
const recipeCategoryParam = urlParams.get('id');




const recipeBox = document.querySelector("#recipe-box")

let recipeBoxTemplate = ''



const getRecipe = async () => {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeCategoryParam}`)
        const data = await response.json();
        meals = data.meals
        console.log(data)
    } catch (error) {
        console.log(error);
    }
    
    let tabInstructions = meals[0].strInstructions.split("\r\n");

    
    let textTemplate = ''

    tabInstructions.forEach(instruction => {
        textTemplate += `
        <p>${instruction}</p><br />
        `

    });
    
        recipeBox.innerHTML = `
        <article class="meal-recipe" data-id="${meals[0].idMeal}">
            <img class="recipe-img" src="${meals[0].strMealThumb}">
            <section class="recipe-text">
                <h1 class="recipe-title">${meals[0].strMeal}</h1>
                    <p class="recipe-info">A <a href="http://127.0.0.1:5500/receipe-app-exercise/category.html?area=${meals[0].strArea}">${meals[0].strArea}</a> ${meals[0].strCategory} recipe</p>
                <div class="recipe-instructions">${textTemplate}</div>
           </section>
        </article>
        `
}

getRecipe()


