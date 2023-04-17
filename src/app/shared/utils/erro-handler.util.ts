import { HttpErrorResponse } from '@angular/common/http';
import { TimeoutError } from 'rxjs';

export abstract class ErrorHandler {
  abstract handle(error: any): string;
}

export class HttpErrorHandler extends ErrorHandler {
  handle(error: any): string {
    if (error instanceof HttpErrorResponse) {
      if (error.error.data?.mensagem) {
        return error.error.data.mensagem;
      }

      if (!error.error.errors) {
        return;
      }

      if (error?.error.data?.mensagem) {
        return error.error.data.mensagem;
      }

      if (error?.error.mensagem) {
        return error.error.mensagem;
      }

      if (error.error.errors && error.error.errors[0]?.mensagem) {
        return error.error.errors[0].mensagem;
      }

      if (error.status === 0) {
        return 'Algum erro aconteceu, entre em contato com a produção';
      }

      if (error.status === 403) {
        return 'Você não tem permissão para acessar este recurso.';
      }

      if(error?.error.message){
        return error.error.message;
      }

      if (error.status === 404) {
        return 'retorna resultado da validações de dados';
      }

      if (error.status === 500) {
        return 'Foi gerada uma exceção.';
      }
    }

    if (error instanceof TimeoutError) {
      return 'Timeout - Tempo de conexão com o servidor esgotado.';
    }
  }
}
