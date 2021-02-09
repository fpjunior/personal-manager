export interface UserPermission {
    acao?: string;
    codigo: number;
    controller?: string;
    descricao?: string;
    habilitado?: boolean;
    codigoComDescricao?: string;
    listaAcao? : any;
}
