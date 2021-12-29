/* eslint-disable react/no-array-index-key */
/* eslint-disable no-alert */
import {
    ErrorMessage, FastField, FieldArray, Form, Formik
} from 'formik';
import React from 'react';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    addFriend: Yup.array().of(Yup.object().shape({
        name: Yup.string().required('Name required'),
    }))
});
const FormNested = () => (
    <div>
        <Formik
            initialValues={{
                username: '',
                addFriend: [
                    {
                        name: '',
                    },
                ],
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                alert(JSON.stringify(values, null, 2));
            }}
        >
            <Form>
                <FastField name="username" type="text" placeholder="username" />
                <ErrorMessage name="username" />
                <button type="submit">submit</button>
                <FieldArray name="addFriend">
                    {({
                        form, remove, push, insert
                    }) => {
                        const { values } = form;
                        const { addFriend } = values;
                        let formArr;
                        if (addFriend && addFriend.length > 0) {
                            formArr = addFriend.map((_, index) => (
                                <div key={index}>
                                    <FastField
                                        name={`addFriend.${index}.name`}
                                        type="text"
                                        placeholder="name"
                                    />
                                    <ErrorMessage name={`addFriend.${index}.name`} />
                                    <button
                                        onClick={() => remove(index)}
                                        type="button"
                                    >
                                        -
                                    </button>
                                    <button
                                        onClick={() => insert(index + 1, { name: '' })}
                                        type="button"
                                    >
                                        +
                                    </button>

                                </div>
                            ));
                        } else {
                            formArr = (
                                <button
                                    onClick={() => push({ name: '' })}
                                    type="button"
                                >
                                    add field
                                </button>
                            );
                        }

                        return <div>{formArr}</div>;
                    }}
                </FieldArray>
                <button type="submit">submit</button>
            </Form>
        </Formik>
    </div>
);

export default FormNested;
