import styles from './Login.module.css';
import { useContext } from 'react';
import { useForm } from '../../hooks/useForm';

import { AuthContext } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';

export const Login = () => {
    const { onLoginSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit} = useForm({
        email: '',
        password: ''

    }, onLoginSubmit)
    return (
        <section className={styles.login} id="loginPage">
            <form className="loginForm" method='POST' onSubmit={onSubmit}>
                <h2>Login</h2>

                <div>
                    <label htmlFor="email">Email:</label>
                    <input id="email" name="email" type="text" placeholder="sofia@gmail.bg" value={values.email} onChange={changeHandler}/>
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input id="password" name="password" type="password" placeholder="********" values={values.password} onChange={changeHandler}/>
                </div>

                <button className="btn" type="submit">Login</button>

                <p className="field">
                    <span>If you don't have profile click <Link to='/register'>here</Link></span>
                </p>
            </form>
        </section>

    )
}