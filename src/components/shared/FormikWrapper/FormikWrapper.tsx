import { Form, FormikProvider, useFormik } from 'formik';
import type { ReactElement } from 'react';
import React from 'react';

import type { FormikWrapperProps } from './FormikWrapper.types';


export function FormikWrapper<TForm extends Indexed>({
	initialValues,
	validationSchema,
	onSubmit,
	children,
	className = '',
}: FormikWrapperProps<TForm>): ReactElement<FormikWrapperProps<TForm>> {
	const formik = useFormik<TForm>({
		initialValues,
		validationSchema,
		onSubmit,
	});
	const { errors, handleSubmit, getFieldProps } = formik;
	return (
		<FormikProvider value={formik}>
			<Form autoComplete="off" noValidate onSubmit={handleSubmit} className={className}>
				{children(getFieldProps, errors)}
			</Form>
		</FormikProvider>
	);
}
