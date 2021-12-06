import * as Yup from 'yup';
export const formSchema = Yup.object({
  name: Yup.string()
    .required('Campo obrigatório')
    .matches(
      /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{0,}$/,
      'Há caracteres inválidos no campo nome',
    )
    .matches(
      /^(([a-zA-Z-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]{2,}\s)+([a-zA-Z-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]{1,}(\s+)?)$)/,
      'Preencha este campo com nome e sobrenome',
    ),
  birthday: Yup.string().required('Campo obrigatório'),
  state: Yup.string().required('Campo obrigatório'),
  city: Yup.string().required('Campo obrigatório'),
  driver_license: Yup.string()
    .when('userIsUnderAge', {
      is: (value: boolean) => value === true,
      then: Yup.string().required('Campo obrigatório'),
    })
    .when('state', {
      is: (value: string) => value === 'RN',
      then: Yup.string().matches(
        /^6/,
        'Carteira de motórista invalida para o estado de RN',
      ),
    })
    .min(11, 'Mínimo de 11 dígitos'),

  responsibleName: Yup.string()
    .when('userIsUnderAge', {
      is: (value: boolean) => value === false,
      then: Yup.string().required('Campo obrigatório'),
    })
    .matches(
      /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{0,}$/,
      'Há caracteres inválidos no campo nome',
    )
    .matches(
      /^(([a-zA-Z-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]{2,}\s)+([a-zA-Z-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]{1,}(\s+)?)$)/,
      'Preencha este campo com nome e sobrenome',
    ),

  responsiblePhone: Yup.string().when('userIsUnderAge', {
    is: (value: boolean) => value === false,
    then: Yup.string().required('Campo obrigatório'),
  }),
}).defined();
