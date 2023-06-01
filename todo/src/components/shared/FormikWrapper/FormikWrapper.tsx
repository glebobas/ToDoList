import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Input } from '../../ui/Input';
import { FormikWrapperProps } from './FormikWrapper.types';

const FormikWrapper = ({
  children,
  onSubmit,
}:FormikWrapperProps<any>) => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const { getFieldProps } = formik;
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="todo">todo</label>
      {children(getFieldProps)}
    </form>
  );
};
export default FormikWrapper;
