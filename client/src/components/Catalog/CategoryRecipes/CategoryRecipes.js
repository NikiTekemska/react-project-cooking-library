import { useEffect, useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import styles from "./CategoryRecipes.module.css";
import { Link } from "react-router-dom";
import { Details } from "../Details/Details";

export const CategoryRecipes = ({ baseUrl }) => {
    const { category } = useParams();
    const [info, setInfo] = useState([]);

    useEffect(() => {
        fetch(`${baseUrl}/${category}/info`)
            .then(res => res.json())
            .then(data => setInfo(Object.values(data)))

    }, [baseUrl, category]);


    return (
        <ul className={styles.currentRecipe}>{info.map(x =>
            <li>
                <h1>{x.name}</h1>
                <img src={x.image} alt="img" />
                <h3>Time preparation: {x.timePreparation}</h3>
                {/* Visible only for login users */}
                <Link to={`${x.name}`} className="details-button"><button>Details</button></Link>
                

            </li>)}</ul>

    )
}