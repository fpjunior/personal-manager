import { environment } from 'src/environments/environment';

/** URL API */
const URL_API = environment.URL_API;

const JSON_SERVER = 'http://localhost:3000';


/** URL login */
export const URL_LOGIN = URL_API + 'login';

/** URLs user */
export const DESPESAS = `${URL_API}expenses`;

/** URLs contacts */
// export const URL_CONTACTS = JSON_SERVER + '/contacts';
export const URL_CONTACTS = 'https://crud-angular-6d8c7-default-rtdb.firebaseio.com/contacts';
export const URL_DESPESAS = 'https://crud-angular-6d8c7-default-rtdb.firebaseio.com/despesas';
export const URL_CATEGORIAS = 'https://crud-angular-6d8c7-default-rtdb.firebaseio.com/tipo-despesas';
export const URL_RECEITAS = 'https://crud-angular-6d8c7-default-rtdb.firebaseio.com/receitas';
export const URL_PARAMETROS = 'https://crud-angular-6d8c7-default-rtdb.firebaseio.com/parametros';
