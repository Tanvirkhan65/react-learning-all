/* eslint-disable react/no-array-index-key */
import { ErrorMessage, FastField, FieldArray } from 'formik';
import React from 'react';

const FormArray = ({ initialValue }) => {
    const { friend } = initialValue;
    return (
        <FieldArray name="friend">
            {({
                push, insert, remove, form
            }) => {
                const { values } = form;
                const { friend } = values;
                let formArr;
                if (friend && friend.length > 0) {
                    formArr = friend.map((_, index) => (
                        <div key={index}>
                            <FastField
                                name={`friend.${index}.name`}
                                type="text"
                                placeholder="input friend name"
                            />
                            <ErrorMessage name={`friend.${index}.name`} />
                            <button onClick={() => remove(index)} type="button">-</button>
                            <button onClick={() => insert(index, { name: '' })} type="button">+</button>
                        </div>
                    ));
                } else {
                    formArr = (
                        <div>
                            <button onClick={() => push({ name: '' })} type="button">add friend</button>
                            <ErrorMessage name="friend" />
                        </div>
                    );
                }
                return (
                    <div>{formArr }</div>
                );
            }}
        </FieldArray>
    );
};

export default FormArray;
