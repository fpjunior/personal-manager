import { HttpErrorResponse } from '@angular/common/http';
import { TimeoutError } from 'rxjs';

export const tryCatchError = (err: any) => {
  if (err instanceof HttpErrorResponse) {
    if (err.error.data?.mensagem) {
      return err.error.data.mensagem;
    }

    if (!err.error.errors) {
      return;
    }

    // if (err.error.errors[0].mensagem) {
    //   return err.error.errors[0].mensagem;
    // }

    if (err?.error.data?.mensagem) {
      return err.error.data.mensagem;
    }

    if (err?.error.mensagem) {
      return err.error.mensagem;
    }


    if (err.error.errors && err.error.errors[0]?.mensagem) {
      return err.error.errors[0].mensagem;
    }

    if (err.status === 0) {
      return 'Algum erro aconteceu, entre em contato com a produção';
    }

    if (err.status === 403) {
      return 'Você não tem permissão para acessar este recurso.';
    }
    if(err?.error.message){
      return err.error.message;
    }

    if (err.status === 404) {
      return 'retorna resultado da validações de dados';
    }

    if (err.status === 500) {
      return 'Foi gerada uma exceção.';
    }
  }

  if (err instanceof TimeoutError) {
    return 'Timeout - Tempo de conexão com o servidor esgotado.';
  }
};
