import { useState } from "react";
import { fetchRecipes } from "./api/recipeApi";
import SearchBar from "./components/SearchBar";
import RecipeCard from "./components/RecipeCard";

function App() {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSearch = async (query) => {
        setLoading(true);
        setError("");
        try {
            const recipeData = await fetchRecipes(query);
            setRecipes(recipeData);
        } catch (err) {
            setError("Failed to fetch recipes. Please try again.");
        }
        setLoading(false);
    };

    return (
        <div className="App">
            <h1>Recipe Search App</h1>
            <SearchBar onSearch={handleSearch} />
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            <div className="recipe-grid">
                {recipes.map((item, index) => (
                    <RecipeCard key={index} recipe={item} />
                ))}
            </div>
        </div>
    );
}

export default App;
