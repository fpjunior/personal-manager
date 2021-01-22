import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_UFS_ATUACAO } from 'src/app/shared/constants/url';
import { RepositoryService } from 'src/app/shared/services/repository.service';

import { UfsAtuacao } from '../../ufs-atuacao/ufs-atuacao-form/model/ufs-atuacao.model';

@Injectable({
  providedIn: 'root'
})

  export class UfsAtuacaoService extends RepositoryService<UfsAtuacao>{

    constructor(public http: HttpClient) { super(http, URL_UFS_ATUACAO); }
  
  }