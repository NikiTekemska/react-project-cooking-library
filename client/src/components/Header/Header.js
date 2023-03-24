import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

import { AuthContext } from '../contexts/AuthContext';

export const Header = () => {

    const { isAuthenticated } = useContext(AuthContext);
    return (

        <header className={styles.header}>

            <nav>
                <section >
                    <p>Cooking library</p>
                </section>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/recipes">Recipes</Link></li>

                    {isAuthenticated && (
                        <div>
                            <li><Link to="/myRecipes">My Recipes</Link></li>
                            <li><Link to="/create">Create Recipe</Link></li>
                            <li><Link to="/recipes">Logout</Link></li>
                        </div>
                    )}

                    {!isAuthenticated && (
                        <div>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/register">Register</Link></li>
                        </div>
                    )}

                </ul>
            </nav>

        </header>

    )

}