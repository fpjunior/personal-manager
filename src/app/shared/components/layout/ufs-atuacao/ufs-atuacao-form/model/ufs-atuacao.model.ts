export interface UfsAtuacao {

    codigoUnidade: number,
    nomeUnidade: String,
    cnpjMask: String, /*(formatado com mascara),*/
    municipio: String,
    ufUnidadeNeg: String,
    aliqIR: number, /*(2 casas decimais, Double),*/
    adIR: number, /*(2 casas decimais, Double),*/
    aliqCSLL: number, /*(2 casas decimais, Double),*/
    regiaoNote: null,
    regiaoNordeste: null,
    regiaoCentroOeste: null,
    regiaoSudeste: null,
    regiaoSul: null
}