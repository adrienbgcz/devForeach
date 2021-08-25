const categoriesBox = document.querySelector("#categories-box")

let categories = []
let boxTemplate = ''


const getCategories = async() => {
    try {
        const response = await fetch ("https://www.themealdb.com/api/json/v1/1/categories.php")
        const data = await response.json();
        categories = data.categories
        console.log(categories)
    } catch (error) {
        console.log(error);
    }
    categories.forEach(category => {
        boxTemplate += `
        <article class="meal-card" data-id="${category.idCategory}">
            <img class = category-img src="${category.strCategoryThumb}">
            <p class="category-title">${category.strCategory}</p>
            <p class="category-desc">${category.strCategoryDescription}</p>
            <a href="http://127.0.0.1:5500/receipe-app-exercise/category.html?category=${category.strCategory}" class="know-more">Know more</a>
        </article>
        `
        
    });

    categoriesBox.innerHTML = boxTemplate;
}

getCategories()

