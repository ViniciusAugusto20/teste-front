/* eslint-disable no-constant-condition */
import React, { useMemo } from 'react';
import { useFormik, FieldArray, FormikProvider, Field } from 'formik';
import { differenceInYears } from 'date-fns';
import * as S from './styles';
import { maskPhone } from '../../utils/mask';
import { formSchema } from './rules/schema';
import mockStates from '../../assets/mock/states.json';
const Home: React.FC = () => {
  const formik = useFormik({
    validateOnChange: true,
    validateOnBlur: true,
    initialValues: {
      name: undefined,
      birthday: new Date(),
      driver_license: undefined,
      state: undefined,
      city: undefined,
      responsibleName: undefined,
      responsiblePhone: undefined,
      phoneNumbers: [''],
      emails: [''],
    },

    onSubmit: (values) => {
      console.log(values)
    },
  });

  const userIsUnderAge = useMemo(() => {
    const today = new Date();
    const birthDate = new Date(formik.values.birthday);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    if (age >= 18) {
      return false;
    } else {
      return true;
    }
  }, [formik.values.birthday]);

  return (
    <FormikProvider value={formik}>
      <S.FormBox onSubmit={formik.handleSubmit}>
        <S.ContentBox>
          <S.Title>Cliente</S.Title>
          <S.ContainerInput>
            <span>Nome</span>
            <input
              type="text"
              name="name"
              id="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            {formik.errors.name && <div>{formik.errors.name}</div>}
          </S.ContainerInput>
          <S.ContainerInput>
            <span>Data de nascimento</span>
            <input
              type="date"
              name="birthday"
              id="birthday"
              value={formik.values.birthday.toString()}
              onChange={formik.handleChange}
            />
          </S.ContainerInput>
          {!userIsUnderAge && (
            <S.ContainerInput>
              <span>Carteira de motorista</span>
              <input
                type="number"
                name="driver_license"
                id="driver_license"
                value={formik.values.driver_license}
                onChange={formik.handleChange}
              />
            </S.ContainerInput>
          )}
          {/* {console.log(formik.values)} */}
          <S.ContainerInput>
            <span>Estado</span>
            <S.Select
              name="state"
              id="state"
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
          </S.ContainerInput>
          <S.ContainerInput>
            <span>Cidade</span>
            <input
              type="text"
              name="city"
              id="city"
              value={formik.values.city}
              onChange={formik.handleChange}
            />
          </S.ContainerInput>
          <S.ContainerInput>
            <span>Telefones</span>
            <FieldArray name="phoneNumbers">
              {(fieldArrayProps) => {
                const { push, remove, form } = fieldArrayProps;
                const { values, errors } = form;
                const { phoneNumbers } = values;

                return (
                  <>
                    {phoneNumbers.map((phNumber: any, index: any) => {
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
                    {emails.map((email: any, index: any) => {
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
              <S.ContainerInput>
                <span>Nome</span>
                <input
                  type="text"
                  name="responsibleName"
                  id="responsibleName"
                  value={formik.values.responsibleName}
                  onChange={formik.handleChange}
                />
              </S.ContainerInput>
              <S.ContainerInput>
                <span>Telefone</span>
                <input
                  type="tel"
                  name="responsiblePhone"
                  id="responsiblePhone"
                  value={maskPhone(formik.values.responsiblePhone)}
                  onChange={formik.handleChange}
                />
              </S.ContainerInput>
            </>
          )}
              <button type="submit">Salvar Cliente</button>
        </S.ContentBox>
    
      </S.FormBox>
    </FormikProvider>
  );
};

export default Home;
