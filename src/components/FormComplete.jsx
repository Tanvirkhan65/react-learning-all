/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-alert */
import {
    ErrorMessage,
    FastField, Form, Formik
} from 'formik';
import moment from 'moment';
import React from 'react';
import * as Yup from 'yup';
import FormArray from './FormArray';
import Preview from './Preview';

const fileFormat = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png'];
const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    phone: Yup.string()
        .matches(/^([01]|\+88)?\d{11}/)
        .required('Phone number is required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    date: Yup.string().test('DOB', 'age must be 18', (value) => moment().diff(moment(value), 'years') >= 18),
    gender: Yup.string().required('required gender'),
    comments: Yup.string().min(5, 'character').required('required'),
    friend: Yup.array().of(
        Yup.object().shape({
            name: Yup.string().required('Name is required'),
        })
    ).min(1, 'At least one friend is required'),
    file: Yup.mixed().nullable().required().test(
        'fileSize',
        'upload file too big',
        (value) => !value || (value && value.size < 1000000),
    )
        .test(
            'fileType',
            'file must be an image',
            (value) => !value || (value && fileFormat.includes(value.type)),

        )
});

const FormComplete = () => {
    const fileRef = React.useRef(null);
    return (
        <div>
            <Formik
                validationSchema={validationSchema}
                initialValues={{
                    username: '',
                    phone: '',
                    email: '',
                    password: '',
                    date: '',
                    gender: '',
                    comments: '',
                    file: null,
                    friend: [
                        {
                            name: '',
                        },
                    ],
                }}
                onSubmit={(values) => {
                    alert(JSON.stringify(values, null, 4));
                }}
            >
                {({ values, setFieldValue }) => {
                    console.dir(values);
                    return (
                        <Form autoComplete="on">
                            <label htmlFor="username">username</label>
                            <br />
                            <FastField
                                id="username"
                                name="username"
                                type="text"
                                placeholder="username"
                            />
                            <ErrorMessage name="username" />
                            <br />
                            <label htmlFor="phone">phone</label>
                            <br />
                            <FastField
                                id="phone"
                                name="phone"
                                type="text"
                                placeholder="phone"
                            />
                            <ErrorMessage name="phone" />
                            <br />
                            <label htmlFor="email">email</label>
                            <br />
                            <FastField
                                id="email"
                                name="email"
                                type="text"
                                placeholder="email"
                            />
                            <ErrorMessage name="email" />
                            <br />
                            <label htmlFor="password">password</label>
                            <br />
                            <FastField
                                id="password"
                                name="password"
                                type="password"
                                placeholder="password"
                            />
                            <ErrorMessage name="password" />
                            <br />
                            <label htmlFor="date">date</label>
                            <br />
                            <FastField id="date" name="date" type="date" />
                            <ErrorMessage name="date" />
                            <br />
                            <label htmlFor="gender">gender</label>
                            <br />
                            <FastField
                                id="gender"
                                name="gender"
                                as="select"
                            >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </FastField>
                            <ErrorMessage name="gender" />
                            <br />
                            <label htmlFor="comments">comments</label>
                            <br />
                            <FastField
                                name="comments"
                                id="comments"
                                as="textarea"
                            />
                            <ErrorMessage name="comments" />
                            <br />
                            <label htmlFor="file">upload pic</label>
                            <input
                                ref={fileRef}
                                hidden
                                type="file"
                                onChange={(event) => setFieldValue('file', event.target.files[0])}
                            />
                            <button onClick={() => fileRef.current.click()} type="button">add pic</button>
                            {values.file && <Preview file={values.file} />}
                            <br />
                            <FormArray initialValue />
                            <button type="submit">submit</button>
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
};

export default FormComplete;
