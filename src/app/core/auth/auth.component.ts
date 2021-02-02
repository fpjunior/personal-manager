import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { PortalUser } from '../model/portal-user';
import { UserPermissions } from '../services/user/persmissions';
import { UserService } from '../services/user/user.service';
import { AuthService } from '../services/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  private unsubscribe$: Subscription;
  isLoading: boolean;
  authenticated = false;
  portalUser: PortalUser;
  permissions: UserPermissions;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private authService: AuthService,
    private userService: UserService,
    private chRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    
  }

}
