# l'application de cuisine

Vous avez déniché une api de recettes de cuisine sur internet.
Grâce à cette api, vous décidez de vous construire une application de recettes


# fonctionnalités

Cette application doit : 
- permettre l'affichage de toutes les catégories de plats 
- permettre l'affichage de tous les plats d'une catégorie depuis la page qui afficvhe toutes les catégories
- permettre l'affichage de la recette d'un plat depuis la page d'affichage de tous les plats


# modèles html

Article pour la page index et la page category

      <article class="meal-card" data-id="${idCategory}">
            <img class = category-img src="${strCategoryThumb}">
            <p class="category-title">${strCategory}</p>
            <p class="category-desc">${strCategoryDescription}</p>
            <a href="http://127.0.0.1:5500/category.html?category=${strCategory}" class="know-more">Know more</a>
        </article>

---

Recette

        <article class="meal-recipe" data-id="${idMeal}">
            <img class="recipe-img" src="${strMealThumb}">
            <section class="recipe-text">
                <h1 class="recipe-title">${strMeal}</h1>
                    <p class="recipe-info">A ${strArea} ${strCategory} recipe</p>
                <div class="recipe-instructions">${textTemplate}</div>
           </section>
        </article>


   


    


