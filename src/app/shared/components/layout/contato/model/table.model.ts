import { TableStandard } from "src/app/shared/models/table.model";

export const tableArr: TableStandard[] = [
  // {hintName: 'Código da unidade de negócio', field: 'id', header: 'ID', showCol: true },
  {hintName: 'Nome do contato', field: 'name', header: 'NOME', showCol: true },
  {hintName: 'Idade do contato', field: 'age', header: 'IDADE', showCol: true },
  {hintName: 'CPF do contato', field: 'cpf', header: 'CPF', showCol: true },
  {hintName: 'Telefone do contato', field: 'phone', header: 'TELEFONE', showCol: true },
  {hintName: 'Email do contato', field: 'email', header: 'EMAIL', showCol: true },
  {hintName: 'Operações Disponíveis', field: 'operation', header: 'OPERAÇÕES', showCol: true },
];
