/* eslint-disable @typescript-eslint/explicit-module-boundary-types*/
import { BASE_URL } from '../../config/env';
import { Client } from '../../models/client';

import { getData, postData } from '../defaultServices';

export const getAllClients = async (
): Promise<Client[]> => {
  const response = await getData(`${BASE_URL}/clients`);
  return response;
};

export const createClient = async (
  dados: Client
  ) => {
    await postData(`${BASE_URL}/clients`, dados);
  };
  