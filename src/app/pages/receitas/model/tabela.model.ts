import { TableStandard } from "src/app/shared/models/table.model";

export const tableArr: TableStandard[] = [
  {hintName: 'Tipo de Receita', field: 'typeRevenue', header: 'TIPO RECEITA', showCol: true },
  {hintName: 'Descrição', field: 'description', header: 'DESCRIÇÃO', showCol: true },
  {hintName: 'Valor', field: 'value', header: 'VALOR', showCol: true },
  {hintName: 'Conta', field: 'account', header: 'CONTA', showCol: true },
  {hintName: 'Data', field: 'expenseDate', header: 'DATA', showCol: true },
  {hintName: 'Receita Fixa', field: 'fixedIncome', header: 'FIXA', showCol: true },
  {hintName: 'Operações Disponíveis', field: 'operation', header: 'OPERAÇÕES', showCol: true }
];
