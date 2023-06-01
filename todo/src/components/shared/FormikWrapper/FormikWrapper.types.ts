import type { FieldInputProps } from 'formik';
import type { ReactNode } from 'react';

type GetFieldProps = (nameOrOptions: any) => FieldInputProps<any>;

export type FormikWrapperProps<TForm> = {
	onSubmit: (data: TForm) => Promise<void>;
	children: (getFieldProps: GetFieldProps) => ReactNode;
};
