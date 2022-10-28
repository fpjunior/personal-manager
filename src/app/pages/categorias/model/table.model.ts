import { TableStandard } from "src/app/shared/models/table.model";

export const tableICategorias: TableStandard[] = [
  // {hintName: 'Código da categoria', field: 'code', header: 'CODE', showCol: true },
  {hintName: 'Icone da categoria', field: 'icon', header: 'Icone', showCol: true },
  {hintName: 'Categoria', field: 'name', header: 'Nome', showCol: true },
  {hintName: 'Cor da categoria', field: 'cor', header: 'Cor', showCol: true },
  {hintName: 'Operações Disponíveis', field: 'operation', header: 'OPERAÇÕES', showCol: true }
];
