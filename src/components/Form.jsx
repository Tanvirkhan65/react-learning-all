/* eslint-disable no-alert */
/* eslint-disable no-useless-escape */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

const Form = () => {
    const initialValue = {
        username: '',
        phone: '',
        email: '',
        password: '',
    };
    const [formValue, setFormValue] = useState(initialValue);
    const [formError, setFormError] = useState({});
    const [formSuccess, setFormSuccess] = useState(false);
    const handleFormValue = (event) => {
        const { name, value } = event.target;
        setFormValue({
            ...formValue,
            [name]: value,
        });
    };
    const validation = (values) => {
        const error = {};
        const {
            username, phone, email, password,
        } = values;
        if (!username) {
            error.username = 'user name required';
        } else if (!(username.length > 3 || username.length < 20)) {
            error.username = 'user name should more than 3 character or less than 20';
        }
        if (!/(\+)?(88)?[0-9]{11}/.test(phone)) {
            error.phone = 'invalid number';
        }
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            error.email = 'invalid email ';
        }
        if (password.length < 8 || password.length > 20) {
            error.password = 'password length should minimum 8 and less than 20 ';
        }
        return error;
    };
    const handleSubmit = (event) => {
        const {
            username, phone, email, password,
        } = formValue;
        event.preventDefault();
        setFormError(validation(formValue));
        if (Object.keys(formError).length !== 0) {
            setFormSuccess(false);
        }
        if (Object.keys(formError).length === 0) {
            setFormSuccess(true);
        }
        if (Object.keys(formError).length === 0 && formSuccess) {
            return console.log(`${username} ${phone} ${email} ${password}`);
        }
        return null;
    };

    return (
        <div>
            <pre>{JSON.stringify(formValue, undefined, 2)}</pre>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">username</label>
                    <input
                        onChange={(event) => handleFormValue(event)}
                        name="username"
                        type="text"
                        placeholder="username"
                        value={formValue.username}
                    />
                    <p style={{ color: 'red' }}>{formError.username}</p>
                </div>
                <div>
                    <label htmlFor="phone">Phone-number</label>
                    <input
                        onChange={(event) => handleFormValue(event)}
                        name="phone"
                        type="text"
                        placeholder="phone-number"
                        value={formValue.phone}
                    />
                    <p style={{ color: 'red' }}>{formError.phone}</p>
                </div>
                <div>
                    <label htmlFor="email">email account</label>
                    <input
                        onChange={(event) => handleFormValue(event)}
                        name="email"
                        type="email"
                        placeholder="email address"
                        value={formValue.email}
                    />
                    <p style={{ color: 'red' }}>{formError.email}</p>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        onChange={(event) => handleFormValue(event)}
                        name="password"
                        type="password"
                        placeholder="input password"
                        value={formValue.password}
                    />
                    <p style={{ color: 'red' }}>{formError.password}</p>
                </div>
                <button type="submit">submit</button>
                <div>{Object.keys(formError).length === 0 && formSuccess ? 'form submitted' : 'pending form'}</div>
            </form>
        </div>
    );
};

export default Form;
