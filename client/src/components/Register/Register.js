import styles from './Register.module.css';

import { useForm } from '../../hooks/useForm';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext'; 

export const Register = () => {
    const {onRegisterSubmit} = useContext(AuthContext);
    const { values, changeHandler, onSubmit} = useForm({
        email:'',
        password:'',
        repeatPassword:''

    }, onRegisterSubmit)
    return (
        <section className={styles.register} id="registerPage">
            <form className="registerForm" method="post" onSubmit={onSubmit}>
                <h2>Register</h2>
                <div className="on-dark">
                    <label htmlFor="email">Email:</label>
                    <input id="email" name="email" type="text" placeholder="sofia@gmail.com" value={values.email} onChange={changeHandler}/>
                </div>

                <div className="on-dark">
                    <label htmlFor="password">Password:</label>
                    <input id="password" name="password" type="password" placeholder="********" value={values.password} onChange={changeHandler}/>
                </div>

                <div className="on-dark">
                    <label htmlFor="repeatPassword">Repeat Password:</label>
                    <input id="repeatPassword" name="repeatPassword" type="password" placeholder="********" value={values.repeatPassword} onChange={changeHandler}/>
                </div>

                <button className="btn" type="submit">Register</button>

                <p className="field">
                    <span>If you have profile click <Link to="/login">here</Link></span>
                </p>
            </form>
        </section>

    )
}