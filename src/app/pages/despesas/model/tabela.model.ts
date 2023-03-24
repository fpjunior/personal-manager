import { TableStandard } from "src/app/shared/models/table.model";

export const tableArr: TableStandard[] = [
  //{hintName: 'Código da categorias', field: 'code', header: 'CODE', showCol: true },
  {hintName: 'Categoria', field: 'category', header: 'TIPO', showCol: true },
  {hintName: 'Descrição', field: 'description', header: 'DESCRIÇÃO', showCol: true },
  {hintName: 'Valor', field: 'amount', header: 'VALOR', showCol: true },
  {hintName: 'Tipo de pagamento', field: 'paymentType', header: 'TIPO PAGAMENTO', showCol: true },
  {hintName: 'Estabelicimento onde foi gasto', field: 'localEstablishment', header: 'LOCAL', showCol: true },
  {hintName: 'Data de expedição', field: 'date', header: 'DATA', showCol: true },
  {hintName: 'Despesa Fixa', field: 'fixed', header: 'Despesa Fixa', showCol: true },
  {hintName: 'Carteira', field: 'wallet', header: 'Carteira', showCol: true },
  {hintName: 'Operações Disponíveis', field: 'operation', header: 'OPERAÇÕES', showCol: true }
];
