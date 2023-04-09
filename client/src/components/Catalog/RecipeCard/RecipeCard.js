import { useContext } from 'react';
import styles from "./RecipeCard.module.css";
import { Link } from "react-router-dom";
import { AuthContext } from '../../../contexts/AuthContext'; 


export const RecipeCard = ({
    _id,
    title,
    image,
    timePreparation
}) => {
    const { isAuthenticated } = useContext(AuthContext);


    return (
        <ul className={styles.RecipeCard}>
            <li>
                <h1>{title}</h1>
                <img src={image} alt="img" />
                <h3>Time preparation: {timePreparation}</h3>
                {isAuthenticated && (<Link to={`${_id}`} className="details-button"><button>Details</button></Link>)}
                
                

            </li></ul>

    )
}