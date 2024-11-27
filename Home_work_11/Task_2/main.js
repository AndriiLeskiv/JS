//- взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти.
// Інгредієнти повинні бути список під час відображення.
fetch('https://dummyjson.com/recipes')
    .then(value => value.json())
    .then(res => {
        let {recipes} = res;
        let recipesBox = document.createElement('div');
        recipesBox.classList.add('recipes');

        for (let recipe of recipes) {
            let recipeItem  = document.createElement('div');
            recipeItem.classList.add('recipe-item');
            recipeItem.innerHTML = `
                <h3>Recipes ID: ${recipe.id}</h3>
                <h2>Recipes Name: ${recipe.name}</h2>
                <img src="${recipe.image}" alt="${recipe.title}">
            `;

            let ingredientUl = document.createElement('ul');
            ingredientUl.classList.add('ingredients-list');
            ingredientUl.innerHTML = `<h3>Ingredients:</h3>`;

            for (let ingredient of recipe.ingredients) {
                let ingredientLi = document.createElement('li');
                ingredientLi.textContent = ingredient;
                ingredientUl.appendChild(ingredientLi);
            }

            let instructionsUl = document.createElement('ol');
            instructionsUl.classList.add('instructions-list');
            instructionsUl.innerHTML = `<h3>Instructions:</h3>`;

            for (let instruction of recipe.instructions) {
                let instructionLi = document.createElement('li');
                instructionLi.textContent = instruction;
                instructionsUl.appendChild(instructionLi);
            }

            let otherInformation  = document.createElement('div');
            otherInformation.classList.add('other-info');
            otherInformation.innerHTML = `
                <p>Prep Time Minutes: ${recipe.prepTimeMinutes}</p>
                <p>Cook Time Minutes: ${recipe.cookTimeMinutes}</p>
                <p>Servings: ${recipe.servings}</p>
                <p>Difficulty: ${recipe.difficulty}</p>
                <p>Calories Per Serving: ${recipe.caloriesPerServing}</p>
                <p>User Id: ${recipe.userId}</p>
                <p>Rating: ${recipe.rating}</p>
                <p>Review Count: ${recipe.reviewCount}</p>
            `;

            let recipeTags = document.createElement('ul');
            recipeTags.classList.add('recipe-tags');
            recipeTags.innerHTML = `<h3>Recipe Tags:</h3>`;

            for (let tag of recipe.tags) {
                let tagLi = document.createElement('li');
                tagLi.textContent = tag;
                recipeTags.appendChild(tagLi);
            }

            let mealType = document.createElement('ol');
            mealType.classList.add('meal-type');
            mealType.innerHTML = `<h3>Meal Type:</h3>`;

            for (let type of recipe.mealType) {
                let typeLi = document.createElement('li');
                typeLi.textContent = type;
                mealType.appendChild(typeLi);
            }

            recipeItem.append(ingredientUl, instructionsUl, otherInformation, recipeTags, mealType);
            recipesBox.appendChild(recipeItem);
        }
        document.body.appendChild(recipesBox);
    });