import { TableStandard } from "src/app/shared/models/table.model";

export const tableArr: TableStandard[] = [
  //{hintName: 'Código da unidade de negócio', field: 'id', header: 'ID', showCol: true },
  {hintName: 'Nome do usuário', field: 'name', header: 'NOME', showCol: true },
  {hintName: 'Idade do usuário', field: 'age', header: 'IDADE', showCol: true },
  {hintName: 'CPF do usuário', field: 'cpf', header: 'CPF', showCol: true },
  {hintName: 'Telefone do usuário', field: 'phone', header: 'TELEFONE', showCol: true },
  {hintName: 'Email do usuário ', field: 'email', header: 'EMAIL', showCol: true },
  {hintName: 'Operações Disponíveis', field: 'operation', header: 'OPERAÇÕES', showCol: true },
];
