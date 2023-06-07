import type { FieldInputProps } from 'formik';
import type { ReactNode } from 'react';

type GetFieldProps = (nameOrOptions: any) => FieldInputProps<any>;

export type FormikWrapperProps<TForm extends Indexed> = {
	initialValues: TForm;
	validationSchema: any;
	onSubmit: (data: TForm) => Promise<void>;
	children: (getFieldProps: GetFieldProps, errors: any) => ReactNode;
	className?: string;
};
