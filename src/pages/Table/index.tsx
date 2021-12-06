import React, { useState, useEffect } from 'react';
import { Client } from '../../models/client';
import { getAllClients } from '../../services/client/clientService';
import DataTable from 'react-data-table-component';
import { format } from 'date-fns';
import * as S from './styles';

const Table: React.FC = () => {
  const columns = [
    { name: 'Nome', selector: (row: Client) => row.name },
    {
      name: 'Data de nascimento',
      selector: (row: Client) => format(new Date(row.birthday), 'dd/MM/yyyy'),
    },
    { name: 'Estado', selector: (row: Client) => row.state },
    { name: 'Cidade', selector: (row: Client) => row.city },
  ];
  const [clientsData, setClientesData] = useState<Client[]>();

  const getAllClientes = async () => {
    const allClientes = await getAllClients();
    setClientesData(allClientes);
  };

  useEffect(() => {
    getAllClientes();
  }, []);

  return (
    <S.ContainerTable className="tableCustomize">
      <DataTable
        columns={columns}
        data={clientsData ? clientsData : []}
        progressPending={!clientsData}
      />
    </S.ContainerTable>
  );
};

export default Table;
