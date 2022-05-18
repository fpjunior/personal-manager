import { TableStandard } from "src/app/shared/models/table.model";

export const tableTipoDespesaModel: TableStandard[] = [
  {hintName: 'Código do tipos despesas', field: 'code', header: 'CODE', showCol: true },
  {hintName: 'Tipos despesas', field: 'tipo', header: 'Tipo', showCol: true },
  {hintName: 'Descrição do tipos despesas', field: 'description', header: 'Descrição', showCol: true },
  //{hintName: 'UF da unidade de negócio', field: 'cpf', header: 'CPF', showCol: true },
  //{hintName: 'UF da unidade de negócio', field: 'phone', header: 'TELEFONE', showCol: true },
  //{hintName: 'UF da unidade de negócio', field: 'email', header: 'EMAIL', showCol: true },
  //{hintName: 'Operações Disponíveis', field: 'operation', header: 'OPERAÇÕES', showCol: true },
];
