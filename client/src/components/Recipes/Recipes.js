import styles from './Recipes.module.css';
import { useEffect, useState } from 'react';
import { CategoryList } from '../CategoryList/CategoryList';

const baseUrl = 'http://localhost:3030/jsonstore/recipes'
export const Recipes = () => {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        fetch(baseUrl)
            .then(res => res.json())
            .then(data => {
                setCategory(Object.values(data));
                
            })

    }, []);
    
    return (
        <section className={styles.recipes}>
            <h2>Recipes</h2>
            <ul>
                {category.map(x => <CategoryList key={x.name} {...x}/>)}
            </ul>
        </section>

    )
}