import { environment } from 'src/environments/environment';

/** URL API */
const URL_API = environment.URL_API;

const JSON_SERVER = 'http://localhost:3000';

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
export const URL_GET_CICLO = JSON_SERVER + '/data';
export const URL_RESTORE_CONFIG_CICLO = JSON_SERVER + '/restore'

/** URLs contacts */
// export const URL_CONTACTS = JSON_SERVER + '/contacts';
export const URL_CONTACTS = 'https://crud-angular-6d8c7-default-rtdb.firebaseio.com/contacts';
export const URL_TIPOS_DESPESAS = 'https://crud-angular-6d8c7-default-rtdb.firebaseio.com/tipo-despesas';
