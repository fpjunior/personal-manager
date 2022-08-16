import { TableStandard } from "src/app/shared/models/table.model";

export const tableTipoDespesaModel: TableStandard[] = [
  // {hintName: 'Código do categorias', field: 'code', header: 'CODE', showCol: true },
  {hintName: 'Icone da despesa', field: 'icon', header: 'Icone', showCol: true },
  {hintName: 'categorias', field: 'name', header: 'Nome', showCol: true },
  {hintName: 'Cor da despesa', field: 'cor', header: 'Cor', showCol: true },
  {hintName: 'Operações Disponíveis', field: 'operation', header: 'OPERAÇÕES', showCol: true }
];
