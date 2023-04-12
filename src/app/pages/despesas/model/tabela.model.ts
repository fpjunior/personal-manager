import { TableStandard } from "src/app/shared/models/table.model";

export const tableArr: TableStandard[] = [
  //{hintName: 'Código da categorias', field: 'code', header: 'CODE', showCol: true },
  {hintName: 'Valor', field: 'amount', header: 'VALOR', showCol: true },
  {hintName: 'Tipo da Despesa', field: 'category', header: 'CATEGORIA', showCol: true },
  {hintName: 'Data de expedição', field: 'date', header: 'DATA', showCol: true },
  {hintName: 'Descrição', field: 'description', header: 'DESCRIÇÃO', showCol: true },
  {hintName: 'Estabelicimento onde foi gasto', field: 'establishment', header: 'LOCAL', showCol: true },
  {hintName: 'Despesa Fixa', field: 'isFixed', header: 'Despesa Fixa', showCol: true },
  {hintName: 'Tipo de pagamento', field: 'paymentType', header: 'TIPO PAGAMENTO', showCol: true },
  {hintName: 'Carteira', field: 'wallet', header: 'Carteira', showCol: true },
  {hintName: 'Operações Disponíveis', field: 'operation', header: 'OPERAÇÕES', showCol: true }
];
