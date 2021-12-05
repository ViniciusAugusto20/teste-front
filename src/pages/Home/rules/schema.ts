import * as Yup from 'yup';
export const formSchema = Yup.object({
  name: Yup.string().required('Campo obrigatório'),
  birthday: Yup.string().required('Campo obrigatório'),
  state: Yup.string().required('Campo obrigatório'),
  city: Yup.string().required('Campo obrigatório'),
  emails: Yup.string()
  .email('Insira um email válido')
  .required('Campo obrigatório')
 
}).defined();
