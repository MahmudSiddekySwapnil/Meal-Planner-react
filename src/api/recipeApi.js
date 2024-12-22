import axios from "axios";

const APP_ID="e832f102";
const APP_KEY="ef4120ad0c28f42e3ebf65683f723201";
const BASE_URL="https://api.edamam.com/api/recipes/v2";

export const fetchRecipes = async (query) =>{
    try {
        const response = await axios.get(`${BASE_URL}`, {
            params: {
                type: "public",
                q: query,
                app_id: APP_ID,
                app_key: APP_KEY,
            },
        });
        return response.data.hits; // Recipe data is inside 'hits'.
    } catch (error) {
        console.error("Error fetching recipes:", error);
        throw error;
    }
};