export interface UnidadeParametro {
    codigoUnidade?: number,
    codigoUnidadeComNome?: string,
    aliquotaImpostoRenda?: number, /*(formatado com mascara),*/
    adicionalImpostoRenda?: number,
    aliquotaContribuicaoSocial?: number,
    nomeUnidade?: string, /*(2 casas decimais, Double),*/
    cnpj?: string, /*(2 casas decimais, Double),*/
    municipio?: string, /*(2 casas decimais, Double),*/
    ufUnidade?: string;
}