import { createContext, useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import { recipeServiceFactory } from "../services/recipeService";

export const RecipeContext = createContext();
export const RecipeProvider = ({
    children
}) => {
    const navigate = useNavigate();
    const [recipes, setRecipes] = useState([]);
    const [matches, setMatch] = useState([]);
    const recipeService = recipeServiceFactory();

    useEffect(()=>{
        recipeService.getAll()
            .then(data => {
                setRecipes(data)
            });
    },[])

    const onSearchSubmit = (data) => {
        console.log(data.search);
        if(!data.search){
        return {};
        }
        setMatch(recipes.filter(recipe => recipe.title.match(data.search)));
    
        navigate("/search");
        
    };


    const onCreateSubmit = async (data) => {
        if( data.title =="" || data.category=="" || data.timePreparation=="" || data.preparation == "" || data.ingredients == ""){
            return alert("You have missed to fill one filed!")
        }
        const newRecipe = await recipeService.create(data)

        //setRecipes(state => [...state, newRecipe]);
        navigate('/recipes');
    };


    const onEditSubmit = async (values) => {
        if( values.title =="" || values.category=="" || values.timePreparation=="" || values.preparation == "" || values.ingredients == ""){
            return alert("You have missed to fill one filed!")
        }
        await recipeService.edit(values._id, values);
        //change state
        navigate(`recipes/${values.category}/`);//${values._id}
    }
    const contextValues = {
        matches,
        onCreateSubmit,
        onEditSubmit,
        onSearchSubmit

    }
    return (
        <RecipeContext.Provider value={contextValues}>
            {children}
        </RecipeContext.Provider>
    )
}