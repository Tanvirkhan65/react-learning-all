/* eslint-disable no-alert */
/* eslint-disable react/no-array-index-key */
import {
    ErrorMessage, Field, FieldArray, Form, Formik
} from 'formik';
import React from 'react';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    organizationName: Yup.string().required(
        'Organization Name is required'
    ),
    users: Yup.array().of(
        Yup.object().shape({
            name: Yup.string().required('Name required'),
            email: Yup.string()
                .required('email required')
                .email('Enter valid email')
        })
    )
});
const FormikHook = () => (
    <div>
        <h3>Organzation Form (Dyanamic users - Array of Object) </h3>
        <hr />
        <Formik
            initialValues={{
                users: [{
                    name: 'deshan madurajith',
                    email: 'desh@email.com'
                },
                {
                    name: 'Hello Desh',
                    email: 'hello@email.com'
                }

                ],
                organizationName: []
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
            render={({ values }) => (
                <Form>
                    <h5>Form </h5>
                    <Field placeholder="Organization name" name="organizationName" />
                    <ErrorMessage name="organizationName" />
                    <h5>Organzation users </h5>
                    <FieldArray
                        name="users"
                        render={(arrayHelpers) => {
                            const { users } = values;
                            return (
                                <div>
                                    {users && users.length > 0
                                        ? users.map((user, index) => (
                                            <div key={index}>
                                                <Field
                                                    placeholder="user name"
                                                    name={`users.${index}.name`}
                                                />
                                                <ErrorMessage name={`users.${index}.name`} />
                                                <br />

                                                <Field
                                                    placeholder="user email"
                                                    name={`users.${index}.email`}
                                                />
                                                <ErrorMessage name={`users.${index}.email`} />

                                                <br />

                                                <button
                                                    type="button"
                                                    // eslint-disable-next-line max-len
                                                    onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                                                >
                                                    -
                                                </button>
                                                <br />
                                                <br />
                                            </div>
                                        ))
                                        : null}
                                    <button
                                        type="button"
                                        onClick={() => arrayHelpers.push({
                                            name: '',
                                            email: ''
                                        })} // insert an empty string at a position
                                    >
                                        add a User
                                    </button>
                                    <br />
                                    <br />
                                    <br />
                                    <div>
                                        <button type="submit">Form Submit</button>
                                    </div>
                                </div>
                            );
                        }}
                    />
                    <hr />
                </Form>
            )}
        />
    </div>
);
export default FormikHook;
