import { environment } from 'src/environments/environment';

/** URL API */
const URL_API = environment.URL_API;

/** Version API */
const VERSION_API = 'v1/';

/** URL login */
export const URL_LOGIN = URL_API + 'login';

/** URLs user */
export const URL_USER = URL_API + VERSION_API + 'usuario/';
export const URL_USER_TO_CPF = URL_USER + 'buscar-por-cpf';
export const URL_EVENTS = URL_API + VERSION_API + 'evento';
export const URL_UFS_ATUACAO = URL_API + VERSION_API + 'ufs-atuacao';
export const USER_PERMISSION = URL_USER + 'permissao/';
