import styles from './Home.module.css';
import { Link } from 'react-router-dom';
export const Home = () => {
    return (
        <>

            <main className={styles.main}>
                <section className={styles.welcome}>
                    <h1>Suitable for all tastes</h1>

                </section>
                <section className={styles.welcomeMessage}>
                    <p>If you have ever heard some of the questions: 'What are we going to eat?' 'Do we have anyting for dessert?' 'Are we going to eat this again?'
                        then you are in the right place!
                    </p>
                </section>
                <section className={styles.recipes}>
                    <h2>Recipes</h2>
                    <ul>

                        <li><Link to="/recipes/Salads">
                            <img src="./Images/backpack.png" alt="pic" />
                            <h3>Salads</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </Link></li>
                        <li><Link to="/recipes/Desserts">
                            <img src="./Images/books.png" alt="pic" />
                            <h3>Desserts</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </Link></li>
                        <li><Link to="/recipes/Pizza&Pasta">
                            <img src="./pizzapasta.jpg" alt="pic" />
                            <h3>Pizza & Pasta</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </Link></li>
                        <li><Link to="/recipes/Meat&BBQ">
                            <img src="./Images/sandwich.png" alt="pic" />
                            <h3>Meat&BBQ</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </Link></li>
                        <li><Link to="/recipes/Vegan">
                            <img src="./Images/first-aid-kit.png" alt="pic" />
                            <h3>Vegan</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </Link></li>
                        <li><Link to="/recipes/Fish&chips">
                            <img src="./Images/plan.png" alt="pic" />
                            <h3>Fish&Chips</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </Link></li>
                    </ul>
                </section>

            </main>
        </>
    )
}