import React, {useState} from "react";
import './Login.css';

const Login = props => {
    const [form, setForm] = useState({
        email: '',
        pwd: '',
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
                            id={'email'}
                            type={'email'}
                            value={form.email}
                            onChange={handleChange}/>
                    </div>
                    <div>
                        <input
                            id={'pwd'}
                            type={'password'}
                            value={form.pwd}
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