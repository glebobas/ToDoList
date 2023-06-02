import * as yup from 'yup';


export const initialValues: any = {
    name: '',
    status: false,
  };
export const basicSchema = yup.object().shape({
    name: yup.string().min(3, 'must be at least 3 characters long').required('Обязательно для заполнения'),
});