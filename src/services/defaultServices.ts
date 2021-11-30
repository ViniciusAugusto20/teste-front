/* eslint-disable @typescript-eslint/no-explicit-any */
import api from './api';

export type IGenericResponse = {
  payload: any;
  status?: number;
};

export type GetDataParamsType = {
  [key: string]: any | undefined;
};

export async function getData<T = any>(
  url: string,
  data?: GetDataParamsType,
): Promise<T> {
  const mappedParams = data
    ? Object.keys(data).reduce((acc: any, key) => {
        if (data[key]) {
          acc[key] = data[key];
        }
        return acc;
      }, {})
    : undefined;

  try {
    const res = await api.get(url, { params: mappedParams });
    return res.data;
  } catch (erro) {
    throw new Error('Falha ao conectar com servidor.');
  }
}

export async function postData<T = any>(
  url: string,
  data: any,
): Promise<T> {
  try {
    const res = await api.post<T>(url, data);
    return res.data;
  } catch (erro) {
    throw new Error('Falha ao adicionar dados.');
  }
}

export async function putData<T = any>(
  url: string,
  data: any,
): Promise<T> {
  try {
    const res = await api.put<T>(url, data);
    return res.data;
  } catch (erro) {
    throw new Error('Falha ao atualizar dados.');
  }
}

export async function deleteData<T = any>(
  url: string,
  data?: GetDataParamsType,
): Promise<T> {
  const mappedParams = data
    ? Object.keys(data).reduce((acc: any,  key) => {
        if (data[key]) {
          acc[key] = data[key];
        }
        return acc;
      }, {})
    : undefined;

  try {
    const res = await api.delete(url, { params: mappedParams });
    return res.data;
  } catch (erro) {
    throw new Error('Falha ao remover dados.');
  }
}
