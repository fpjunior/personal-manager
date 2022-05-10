import { TableStandard } from "src/app/shared/models/table.model";

export const tableArr: TableStandard[] = [
  {hintName: 'Código da unidade de negócio', field: 'code', header: 'CODE', showCol: true },
  {hintName: 'Nome da unidade de negócio', field: 'type', header: 'TYPE', showCol: true },
  {hintName: 'Município da unidade de negócio', field: 'description', header: 'DESCRIPTION', showCol: true },
  {hintName: 'UF da unidade de negócio', field: 'value', header: 'VALUE', showCol: true },
  {hintName: 'UF da unidade de negócio', field: 'typePayment', header: 'TIPO PAGAMENTO', showCol: true },
  {hintName: 'UF da unidade de negócio', field: 'localEstablishment', header: 'ESTABELECIMENTO', showCol: true },
  {hintName: 'UF da unidade de negócio', field: 'expenseDate', header: 'DATA', showCol: true },
  {hintName: 'Operações Disponíveis', field: 'operation', header: 'OPERAÇÕES', showCol: true }
];
