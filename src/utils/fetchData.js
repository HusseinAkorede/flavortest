export const fetchRandomHeroRecipe = async() => {
    const response = await fetch('https://api.spoonacular.com/recipes/random?apiKey=446e10a7aee1474482a506a1cfd0f632')
    const data = await response.json()

    return data.recipes[0]
}