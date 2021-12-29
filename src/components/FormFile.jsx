import { ErrorMessage, Form, Formik } from 'formik';
import React, { useRef } from 'react';
import * as Yup from 'yup';
import ReviewImage from './ReviewImage';

const fileFormat = [
    'image/jpg',
    'image/jpeg',
    'image/gif',
    'image/png',
];
const validationSchema = Yup.object().shape({
    file: Yup.mixed()
        .nullable()
        .required()
        .test(
            'fileSize',
            'upload file too big',
            (value) => !value || (value && value.size < 1000000)
        )
        .test(
            'fileType',
            'file must be an image',
            (value) => !value || (value && fileFormat.includes(value.type))
        ),
});
const FormFile = () => {
    const fileRef = useRef(null);
    return (
        <div>
            <Formik
                initialValues={{
                    file: null,
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {({ values, setFieldValue }) => (
                    <Form>
                        <input hidden ref={fileRef} type="file" onChange={(event) => setFieldValue('file', event.target.files[0])} />
                        {values.file && <ReviewImage file={values.file} />}
                        <button type="button" onClick={() => fileRef.current.click()}>click</button>
                        <ErrorMessage name="file" />
                        <button type="submit">submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default FormFile;
