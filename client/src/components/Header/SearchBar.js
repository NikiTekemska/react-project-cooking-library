import { useContext } from "react";
import { useForm } from "../../hooks/useForm";
import styles from './SearchBar.module.css';
import { RecipeContext } from "../../contexts/RecipesContext";

export const SearchBar = () => {
    const { onSearchSubmit } = useContext(RecipeContext);
    const { values, changeHandler, onSubmit } = useForm({
        search: '',

    }, onSearchSubmit)
    return (
        <form className={styles.Search} onSubmit={onSubmit}>
            <input name="search" type="text" placeholder="Search.." value={values.search} onChange={changeHandler}/>
            <button><i className='fa fa-search' onClick={onSearchSubmit}></i></button>
        </form>
    )
}