import { ERROR_MESSAGES_FIREBASE } from "../enums/error-messages-firebase.enum";

export function tryCatchErrorFunc(err: any): string {
  if (err.code === ERROR_MESSAGES_FIREBASE.EMAIL_NOT_FOUND) {
    return 'Email Incorretos.';
  }

  if (err.code === ERROR_MESSAGES_FIREBASE.INVALID_PASSWORD) {
    return 'Senha Incorreta.';
  }

  if (err === ERROR_MESSAGES_FIREBASE.INVALID_CREATE_PASSWORD) {
    return 'A senha precisa ter pelo menos seis caracteres.';
  }

  if (err === ERROR_MESSAGES_FIREBASE.INVALID_CREATE_EMAIL) {
    return 'O endereço de email fornecido é inválido';
  }

  if (err === ERROR_MESSAGES_FIREBASE.EMAIL_ALREADY_EXIST) {
    return 'O Email informado já existe.';
  }

  if (err === ERROR_MESSAGES_FIREBASE.NOT_AUTH) {
    return 'Não autorizado, usuário não existe, senha errada ou licença expirada.';
  }

  if (err === ERROR_MESSAGES_FIREBASE.WIP) {
    return 'Em Desenvolvimento';
  }

  return "Ocorreu algum erro, reinicie a página";
};


