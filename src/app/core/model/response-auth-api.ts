import { HttpHeaders } from '@angular/common/http';

export interface AuthApiResponse {
  body: any;
  headers: HttpHeaders;
  ok: boolean;
  status: number;
  statusText: string;
  type: number;
  url: string;
}
