import styles from './Register.module.css';
export const Register = () => {
    return (
        <section className={styles.register} id="registerPage">
            <form className="registerForm">
                <h2>Register</h2>
                <div className="on-dark">
                    <label htmlFor="email">Email:</label>
                    <input id="email" name="email" type="text" placeholder="sofia@gmail.com" value="" />
                </div>

                <div className="on-dark">
                    <label htmlFor="password">Password:</label>
                    <input id="password" name="password" type="password" placeholder="********" value="" />
                </div>

                <div className="on-dark">
                    <label htmlFor="repeatPassword">Repeat Password:</label>
                    <input id="repeatPassword" name="repeatPassword" type="password" placeholder="********" value="" />
                </div>

                <button className="btn" type="submit">Register</button>

                <p className="field">
                    <span>If you have profile click <a href="/login/">here</a></span>
                </p>
            </form>
        </section>

    )
}