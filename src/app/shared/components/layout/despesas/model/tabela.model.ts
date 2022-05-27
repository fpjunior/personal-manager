import { TableStandard } from "src/app/shared/models/table.model";

export const tableArr: TableStandard[] = [
  //{hintName: 'Código da despesa', field: 'code', header: 'CODE', showCol: true },
  {hintName: 'Tipo de despesa', field: 'type', header: 'TIPO', showCol: true },
  {hintName: 'Descrição', field: 'description', header: 'DESCRIÇÃO', showCol: true },
  {hintName: 'Valor', field: 'value', header: 'VALOR', showCol: true },
  {hintName: 'Tipo de pagamento', field: 'typePayment', header: 'TIPO PAGAMENTO', showCol: true },
  {hintName: 'Estabelicimento onde foi gasto', field: 'localEstablishment', header: 'LOCAL', showCol: true },
  {hintName: 'Data de expedição', field: 'expenseDate', header: 'DATA', showCol: true },
  {hintName: 'Operações Disponíveis', field: 'operation', header: 'OPERAÇÕES', showCol: true }
];
