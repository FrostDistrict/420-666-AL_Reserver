import React, {useState} from "react";
import {Logon} from "../../../services/UserService";
import './Login.css';
import {useNavigate} from "react-router-dom";

const Login = props => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        Email: '',
        Password: '',
    });

    const handleChange = (event) => {
        const target = event.target;
        const field = target.id;
        const value = target.value;

        setForm(previousState => ({
            ...previousState,
            [field]: value
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        Logon(form).then(success => {
            if (success)
                navigate('/dashboard');
        });
    }

    return <>
        <section className={'login-container'}>
            <div className={'login-wrapper'}>
                <div className={'login-header'}>
                    <h3>Connectez-vous!</h3>
                </div>

                <form className={'login-form'} onSubmit={handleSubmit}>
                    <div>
                        <input
                            id={'Email'}
                            type={'email'}
                            required
                            value={form.Email}
                            onChange={handleChange}/>
                    </div>
                    <div>
                        <input
                            id={'Password'}
                            type={'password'}
                            required
                            value={form.Password}
                            onChange={handleChange}/>
                    </div>

                    <div>
                        <button type={'submit'}>
                            GO
                        </button>
                    </div>
                </form>

            </div>
        </section>
    </>
}

export default Login;