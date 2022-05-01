import { TableStandard } from "src/app/shared/models/table.model";

export const tableArr: TableStandard[] = [
  {hintName: 'Código da unidade de negócio', field: 'id', header: 'ID', showCol: true },
  {hintName: 'Nome da unidade de negócio', field: 'name', header: 'NOME', showCol: true },
  {hintName: 'Município da unidade de negócio', field: 'idade', header: 'IDADE', showCol: true },
  {hintName: 'UF da unidade de negócio', field: 'cpf', header: 'CPF', showCol: true },
  {hintName: 'UF da unidade de negócio', field: 'email', header: 'EMAIL', showCol: true },
  {hintName: 'Operações Disponíveis', field: 'operation', header: 'OPERAÇÕES', showCol: true }
];