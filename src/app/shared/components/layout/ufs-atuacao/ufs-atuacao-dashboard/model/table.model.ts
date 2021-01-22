import { TableStandard } from '../../../../../models/table.model';
import { UfsAtuacao } from '../../ufs-atuacao-form/model/ufs-atuacao.model';

  export const tableArr: TableStandard[] = [
    { hintName: 'Código da unidade de negócio', field: 'codigoUnidade', header: 'CÓDIGO', showCol: true },
    { hintName: 'Nome da unidade de negócio', field: 'nomeUnidade', header: 'NOME', showCol: true },
    { hintName: 'CNPJ da Filial', field: 'cnpjMask', header: 'CNPJ', showCol: true },
    { hintName: 'Município da Filial', field: 'municipio', header: 'MUNICÍPIO', showCol: true },
    { hintName: 'UF da Filial', field: 'ufUnidadeNeg', header: 'UF', showCol: true },
    { hintName: 'Alíquota de Imposto de Renda', field: 'aliqIR', header: 'ALIQ.IR-%', showCol: true },
    { hintName: 'Adicional de Imposto de Renda', field: 'adIR', header: 'AD.IR-%', showCol: true },
    { hintName: 'Alíquota de Contribuição Social S/Lucro Líquido', field: 'aliqCSLL', header: 'CSLL-%', showCol: true },
  ];

  export const dadosTabelaMock: UfsAtuacao[] = [
    { codigoUnidade: 1, nomeUnidade: 'Joe Araujo da Silva', municipio:'Recife', cnpjMask: '1265489878', ufUnidadeNeg: 'PE', aliqIR: 25, adIR: 36, aliqCSLL: 85, regiaoNote: null, regiaoNordeste:null, regiaoSudeste: null, regiaoSul: null, regiaoCentroOeste: null },
    { codigoUnidade: 2, nomeUnidade: 'Joe Araujo da Silva', municipio:'Recife', cnpjMask: '1265489878', ufUnidadeNeg: 'PE', aliqIR: 25, adIR: 36, aliqCSLL: 85, regiaoNote: null, regiaoNordeste:null, regiaoSudeste: null, regiaoSul: null, regiaoCentroOeste: null },
    { codigoUnidade: 3, nomeUnidade: 'Joe Araujo da Silva', municipio:'Recife', cnpjMask: '1265489878', ufUnidadeNeg: 'PE', aliqIR: 25, adIR: 36, aliqCSLL: 85, regiaoNote: null, regiaoNordeste:null, regiaoSudeste: null, regiaoSul: null, regiaoCentroOeste: null },
    { codigoUnidade: 4, nomeUnidade: 'Joe Araujo da Silva', municipio:'Recife', cnpjMask: '1265489878', ufUnidadeNeg: 'PE', aliqIR: 25, adIR: 36, aliqCSLL: 85, regiaoNote: null, regiaoNordeste:null, regiaoSudeste: null, regiaoSul: null, regiaoCentroOeste: null },
    { codigoUnidade: 5, nomeUnidade: 'Joe Araujo da Silva', municipio:'Recife', cnpjMask: '1265489878', ufUnidadeNeg: 'PE', aliqIR: 25, adIR: 36, aliqCSLL: 85, regiaoNote: null, regiaoNordeste:null, regiaoSudeste: null, regiaoSul: null, regiaoCentroOeste: null },
    { codigoUnidade: 6, nomeUnidade: 'Joe Araujo da Silva', municipio:'Recife', cnpjMask: '1265489878', ufUnidadeNeg: 'PE', aliqIR: 25, adIR: 36, aliqCSLL: 85, regiaoNote: null, regiaoNordeste:null, regiaoSudeste: null, regiaoSul: null, regiaoCentroOeste: null },
    { codigoUnidade: 7, nomeUnidade: 'Joe Araujo da Silva', municipio:'Recife', cnpjMask: '1265489878', ufUnidadeNeg: 'PE', aliqIR: 25, adIR: 36, aliqCSLL: 85, regiaoNote: null, regiaoNordeste:null, regiaoSudeste: null, regiaoSul: null, regiaoCentroOeste: null },
    ];
  