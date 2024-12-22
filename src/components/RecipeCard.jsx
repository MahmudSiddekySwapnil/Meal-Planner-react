function RecipeCard({ recipe }) {
    return (
        <div className="recipe-card">
            <img src={recipe.recipe.image} alt={recipe.recipe.label} />
            <h3>{recipe.recipe.label}</h3>
            <a href={recipe.recipe.url} target="_blank" rel="noopener noreferrer">
                View Recipe
            </a>
        </div>
    );
}

export default RecipeCard;
