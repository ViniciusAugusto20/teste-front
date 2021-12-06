/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-constant-condition */
import React, { useMemo} from 'react';
import { useFormik, FieldArray, FormikProvider, Field } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import { maskPhone } from '../../utils/mask';
import { formSchema } from './rules/schema';
import mockStates from '../../assets/mock/states.json';
import { useToast } from '../../context/toast';
import { createClient } from '../../services/client/clientService';
import * as S from './styles';

const Home: React.FC = () => {
  const { addToast } = useToast();
  const formik = useFormik({
    validationSchema: formSchema,
    validateOnChange: true,
    validateOnBlur: true,
    initialValues: {
      id: '',
      name: '',
      birthday: '',
      driver_license: '',
      state: '',
      city: '',
      responsibleName: '',
      responsiblePhone: '',
      phoneNumbers: [''],
      emails: [''],
      userIsUnderAge: false,
    },

    onSubmit: async (values) => {
      try{
        const dataWithId = {
          ...values,
          id: uuidv4(),
        }
        await createClient(dataWithId)
        addToast({
          type: 'success',
          content: 'Cliente cadastrado com sucesso!',
        });
        window.location.reload()
      }catch (err){
        return err
      }

    },
  });

  const handleSubmit = () =>{
    if(!formik.isValid){
      addToast({
        type: 'error',
        content: 'Existem erros no formulário',
      });
    }
    else{
      formik.submitForm
    }
  }

  const userIsUnderAge = useMemo(() => {
    if (formik.values.birthday) {
      const today = new Date();
      const birthDate = new Date(formik.values.birthday!);
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      if (age >= 18) {
        formik.setFieldValue("userIsUnderAge", true)
        return false;
      } else {
        formik.setFieldValue("userIsUnderAge", false)
        return true;
      }
    }
  }, [formik.values.birthday]);

  return (
    <FormikProvider value={formik}>
      <S.FormBox onSubmit={formik.handleSubmit}>
        <S.ContentBox>
          <S.Title>Cliente</S.Title>
          <S.ContainerInput hasError={formik.errors.name}>
            <span>Nome</span>
            <input
              type="text"
              name="name"
              id="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          {formik.errors.name && <S.ContainerError>{formik.errors.name}</S.ContainerError>}
          </S.ContainerInput>
          <S.ContainerInput hasError={formik.errors.birthday}>
            <span>Data de nascimento</span>
            <input
              type="date"
              name="birthday"
              id="birthday"
              value={formik.values.birthday}
              onBlur={formik.handleChange}
              onChange={formik.handleChange}
            />
            {formik.errors.birthday && <S.ContainerError>{formik.errors.birthday}</S.ContainerError>}
          </S.ContainerInput>
          {formik.values.birthday && !userIsUnderAge && (
            <S.ContainerInput hasError={formik.errors.driver_license}>
              <span>Carteira de motorista</span>
              <input
                type="number"
                name="driver_license"
                id="driver_license"
                value={formik.values.driver_license}
                onChange={formik.handleChange}
              />
              {formik.errors.driver_license && <S.ContainerError>{formik.errors.driver_license}</S.ContainerError>}
            </S.ContainerInput>
          )}
          <S.ContainerInput>
            <span>Estado</span>
            <S.Select
              name="state"
              id="state"
              hasError={formik.errors.state}
              value={formik.values.state}
              onChange={formik.handleChange}
            >
              {mockStates.map((state) => {
                return (
                  <option key={state.value} value={state.value}>
                    {state.label}
                  </option>
                );
              })}
            </S.Select>
            {formik.errors.state && <S.ContainerError>{formik.errors.state}</S.ContainerError>}
          </S.ContainerInput>
          <S.ContainerInput hasError={formik.errors.city}>
            <span>Cidade</span>
            <input
              type="text"
              name="city"
              id="city"
              value={formik.values.city}
              onChange={formik.handleChange}
            />
            {formik.errors.city && <S.ContainerError>{formik.errors.city}</S.ContainerError>}
          </S.ContainerInput>
          <S.ContainerInput>
            <span>Telefones</span>
            <FieldArray name="phoneNumbers">
              {(fieldArrayProps) => {
                const { push, remove, form } = fieldArrayProps;
                const { values } = form;
                const { phoneNumbers } = values;

                return (
                  <>
                    {phoneNumbers.map((phone: string, index: number) => {
                      return (
                        <S.ContainerMultipleInputs key={index}>
                          <Field
                            name={`phoneNumbers[${index}]`}
                            render={({ ...field }) => (
                              <>
                                <input
                                  {...field}
                                  type="text"
                                  name={`phoneNumbers[${index}]`}
                                  id={`phoneNumbers[${index}]`}
                                  value={maskPhone(
                                    formik.values.phoneNumbers[index],
                                  )}
                                  onChange={formik.handleChange}
                                />
                              </>
                            )}
                          />
                          {Object.keys(phoneNumbers).length === index ||
                          (index === 0 &&
                            Object.keys(phoneNumbers).length < 4) ? (
                            <>
                              <S.IconAdd onClick={() => push('')} />
                            </>
                          ) : Object.keys(phoneNumbers).length === 4 &&
                            index > 0 ? (
                            <>
                              <S.IconRemove onClick={() => remove(index)} />
                            </>
                          ) : (
                            <>
                              <S.IconRemove onClick={() => remove(index)} />
                            </>
                          )}
                        </S.ContainerMultipleInputs>
                      );
                    })}
                  </>
                );
              }}
            </FieldArray>
          </S.ContainerInput>
          <S.ContainerInput>
            <span>E-mails</span>
            <FieldArray name="emails">
              {(fieldArrayProps) => {
                const { push, remove, form } = fieldArrayProps;
                const { values } = form;
                const { emails } = values;

                return (
                  <>
                    {emails.map((email: string, index: number) => {
                      return (
                        <S.ContainerMultipleInputs key={index}>
                          <Field
                            name={`emails[${index}]`}
                            render={({ ...field }) => (
                              <>
                                <input
                                  {...field}
                                  type="email"
                                  name={`emails[${index}]`}
                                  id={`emails[${index}]`}
                                  value={formik.values.emails[index]}
                                  onChange={formik.handleChange}
                                />
                              </>
                            )}
                          />
                          {Object.keys(emails).length === index ||
                          (index === 0 && Object.keys(emails).length < 4) ? (
                            <>
                              <S.IconAdd onClick={() => push('')} />
                            </>
                          ) : Object.keys(emails).length === 4 && index > 0 ? (
                            <>
                              <S.IconRemove onClick={() => remove(index)} />
                            </>
                          ) : (
                            <>
                              <S.IconRemove onClick={() => remove(index)} />
                            </>
                          )}
                        </S.ContainerMultipleInputs>
                      );
                    })}
                  </>
                );
              }}
            </FieldArray>
          </S.ContainerInput>
          {userIsUnderAge && formik.values.state !== undefined && (
            <>
              <S.Title>Responsável</S.Title>
              <S.ContainerInput hasError={formik.errors.responsibleName}>
                <span>Nome</span>
                <input
                  type="text"
                  name="responsibleName"
                  id="responsibleName"
                  value={formik.values.responsibleName}
                  onChange={formik.handleChange}
                />
                {formik.errors.responsibleName && <S.ContainerError>{formik.errors.responsibleName}</S.ContainerError>}
              </S.ContainerInput>
              <S.ContainerInput hasError={formik.errors.responsiblePhone}>
                <span>Telefone</span>
                <input
                  type="tel"
                  name="responsiblePhone"
                  id="responsiblePhone"
                  value={maskPhone(formik.values.responsiblePhone)}
                  onChange={formik.handleChange}
                />
                {formik.errors.responsiblePhone && <S.ContainerError>{formik.errors.responsiblePhone}</S.ContainerError>}
              </S.ContainerInput>
            </>
          )}
          <S.ButtonSubmit>
            <button id="qa-submit-button" onClick={()=>handleSubmit()}>Salvar Cliente</button>
          </S.ButtonSubmit>
        </S.ContentBox>
      </S.FormBox>
    </FormikProvider>
  );
};

export default Home;
