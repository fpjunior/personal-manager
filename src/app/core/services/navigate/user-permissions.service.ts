import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Subscription } from 'rxjs/internal/Subscription';
import { debounceTime, map } from 'rxjs/operators';
import { USER_PERMISSION } from '../../../shared/constants/url';
import { apiResponseWrapper } from '../../../shared/models/response-api-wrapper.model';
import { InitialUserPermissions } from '../user/user-permissions-navigate';

@Injectable({
  providedIn: 'root',
})
export class UserPermissionsService {
  static debounce = new Subject<InitialUserPermissions>();
  @Output()
  static accessPermissions: EventEmitter<InitialUserPermissions> = new EventEmitter();
  private static unsubscribe$: Subscription;
  initialUserPermissions: InitialUserPermissions;

  constructor(private http: HttpClient) {}

  static updatePermissions(permissions: InitialUserPermissions): void {
    UserPermissionsService.unsubscribe$ = UserPermissionsService.debounce
      .pipe(debounceTime(10))
      .subscribe((permissionsValid) => {
        UserPermissionsService.accessPermissions.emit(permissionsValid);
      });

    UserPermissionsService.debounce.next(permissions);
  }

  public listPermissions(userCode: number): Observable<UserPermissions[]> {
    return this.http
      .get<apiResponseWrapper<UserPermissions[]>>(USER_PERMISSION + userCode)
      .pipe(map((responseApi) => responseApi.data));
  }

  configPermissions(permissionCode: number): InitialUserPermissions {
    this.initialUserPermissions = new InitialUserPermissions();

    switch (permissionCode) {
      case CODE_PERMISSIONS.USERS_PROFILES_MANAGER:
        this.initialUserPermissions.usersUserManager = true;
        break;
      case CODE_PERMISSIONS.USERS_USER_MANAGER:
        this.initialUserPermissions.usersUserManager = true;
        break;
      case CODE_PERMISSIONS.PERFORMANCE_UFS_IR_ALIQ:
        this.initialUserPermissions.performanceUfsIrAliq = true;
        break;
      case CODE_PERMISSIONS.LIST_PRICE:
        this.initialUserPermissions.listPrice = true;
        break;
      case CODE_PERMISSIONS.EVENT_REGISTRATION:
        this.initialUserPermissions.eventRegistration = true;
        break;
      case CODE_PERMISSIONS.ASSOCIATING_EVENTS_LIST_PRICE:
        this.initialUserPermissions.associatingEventsListPrice = true;
        break;
      case CODE_PERMISSIONS.ASSOCIATING_EVENTS_BASE_SALES_PRICE:
        this.initialUserPermissions.associatingEventsBaseSalesPrice = true;
        break;
      case CODE_PERMISSIONS.SERVICE_ENGINE_INDICATOR_SETTINGS:
        this.initialUserPermissions.serviceEngineIndicatorSettings = true;
        break;
      case CODE_PERMISSIONS.SERVICE_ENGINE_INDICATOR_ACCESS:
        this.initialUserPermissions.serviceEngineIndicatorAccess = true;
        break;
      case CODE_PERMISSIONS.SERVICE_ENGINE_OS_REDIRECTION:
        this.initialUserPermissions.serviceEngineOsRedirection = true;
        break;
      case CODE_PERMISSIONS.SERVICE_ENGINE_OS_PENDING:
        this.initialUserPermissions.serviceEngineOsPending = true;
        break;
      case CODE_PERMISSIONS.PRICE_UPDATE_LOG:
        this.initialUserPermissions.priceUpdateLog = true;
        break;
      case CODE_PERMISSIONS.PURCHASE_PRICE_SIMULATOR_MAKE_CHANGES:
        this.initialUserPermissions.purchasePriceSimulatorMakeChanges = true;
        break;
      case CODE_PERMISSIONS.SALES_PRICE_SUGGESTION_SIMULATOR_MAKE_CHANGES:
        this.initialUserPermissions.salesPriceSuggestionSimulatorMakeChanges = true;
        break;
    }
    return this.initialUserPermissions;
  }

  executeEmitter(userPermissions: InitialUserPermissions): void {
    UserPermissionsService.updatePermissions(userPermissions);
  }
}

export interface UserPermissions {
  acao: string;
  codigo: number;
  controller: string;
  descricao: string;
  habilitado: boolean;
}

enum CODE_PERMISSIONS {
  USERS_PROFILES_MANAGER = 1,
  USERS_USER_MANAGER = 2,
  PERFORMANCE_UFS_IR_ALIQ = 3,
  LIST_PRICE = 4,
  EVENT_REGISTRATION = 5,
  ASSOCIATING_EVENTS_LIST_PRICE = 6,
  ASSOCIATING_EVENTS_BASE_SALES_PRICE = 7,
  SERVICE_ENGINE_INDICATOR_SETTINGS = 8,
  SERVICE_ENGINE_INDICATOR_ACCESS = 9,
  SERVICE_ENGINE_OS_REDIRECTION = 10,
  SERVICE_ENGINE_OS_PENDING = 11,
  PRICE_UPDATE_LOG = 12,
  PURCHASE_PRICE_SIMULATOR_MAKE_CHANGES = 13,
  SALES_PRICE_SUGGESTION_SIMULATOR_MAKE_CHANGES = 14,
}
