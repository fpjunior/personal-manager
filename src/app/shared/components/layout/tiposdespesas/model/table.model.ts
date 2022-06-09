import { TableStandard } from "src/app/shared/models/table.model";

export const tableTipoDespesaModel: TableStandard[] = [
  // {hintName: 'Código do tipos despesas', field: 'code', header: 'CODE', showCol: true },
  {hintName: 'Descrição do tipos despesas', field: 'icon', header: 'Icone', showCol: true },
  {hintName: 'Tipos despesas', field: 'name', header: 'Nome', showCol: true },
  {hintName: 'Descrição do tipos despesas', field: 'cor', header: 'Cor', showCol: true },
  {hintName: 'Operações Disponíveis', field: 'operation', header: 'OPERAÇÕES', showCol: true }
];
