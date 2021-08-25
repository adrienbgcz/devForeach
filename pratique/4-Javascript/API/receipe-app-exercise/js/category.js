const urlParams = new URLSearchParams(window.location.search);
const mealCategoryParam = urlParams.get('category');
const recipesByArea = urlParams.get('area');
console.log(mealCategoryParam)


const mealsBox = document.querySelector("#meals-box")

let meals = []
let mealsBoxTemplate = ''



const getMeals = async () => {
    let param = ''
    let pointer = ""
    if (mealCategoryParam) {
        param = mealCategoryParam;
        pointer = "c"
        console.log(param)
    }

    if (recipesByArea) {
        param = recipesByArea
        pointer = "a"
        console.log(param)

    }
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?${pointer}=${param}`)
        const data = await response.json();
        meals = data.meals
        console.log(data)
    } catch (error) {
        console.log(error);
    }
    meals.forEach(meal => {
        mealsBoxTemplate += `
        <article class="meal-card" data-id="${meal.idMeal}">
            <img class = category-img src="${meal.strMealThumb}">
            <p class="category-title">${meal.strMeal}</p>
            <a href="http://127.0.0.1:5500/receipe-app-exercise/recipe.html?id=${meal.idMeal}" class="know-more">Know more</a>
        </article>
        `
        mealsBox.innerHTML = mealsBoxTemplate
    })
}
getMeals()







// if (mealCategoryParam) {

//     const getMeals = async () => {
//         try {
//             const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${mealCategoryParam}`)
//             const data = await response.json();
//             meals = data.meals
//             console.log(data)
//         } catch (error) {
//             console.log(error);
//         }
//         meals.forEach(meal => {
//             mealsBoxTemplate += `
//         <article class="meal-card" data-id="${meal.idMeal}">
//             <img class = category-img src="${meal.strMealThumb}">
//             <p class="category-title">${meal.strMeal}</p>
//             <a href="http://127.0.0.1:5500/receipe-app-exercise/recipe.html?id=${meal.idMeal}" class="know-more">Know more</a>
//         </article>
//         `
//             mealsBox.innerHTML = mealsBoxTemplate
//         })
//     }
//     getMeals()
// }

// if (recipesByArea) {
//     const getMealsByArea = async () => {
//         try {
//             const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${recipesByArea}`)
//             const data = await response.json();
//             meals = data.meals
//             console.log(data)
//         } catch (error) {
//             console.log(error);
//         }
//         meals.forEach(meal => {
//             mealsBoxTemplate += `
//             <article class="meal-card" data-id="${meal.idMeal}">
//                 <img class = category-img src="${meal.strMealThumb}">
//                 <p class="category-title">${meal.strMeal}</p>
//                 <a href="http://127.0.0.1:5500/receipe-app-exercise/recipe.html?id=${meal.idMeal}" class="know-more">Know more</a>
//             </article>
//             `
//             mealsBox.innerHTML = mealsBoxTemplate
//         })
//     }


//     getMealsByArea()

// }


