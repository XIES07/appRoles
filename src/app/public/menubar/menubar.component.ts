import { selectAuthUser } from './../../core/state/auth/auth.selectors';
import { AppState } from './../../core/models/ngrx.models';
import {  UserModel } from 'src/app/core/models/user.model';
import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { MenuItem } from 'primeng/api';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {

  modules: MenuItem[] = []

  user$: Observable<UserModel> = this.store.pipe(select(selectAuthUser));

  canRender$: Observable<boolean> ;

  constructor(private store: Store<AppState>, private data: DataService) {
       this.canRender$  = this.user$.pipe(
      map( user => user?.permissions.isEnable)
    )
   }

  ngOnInit() {
    this.user$.subscribe(user => {
      if (user) {
        this.modules = this.data.filterModulesByPermissions(user)
      }
    })
  }

  canRenderFunction():boolean{
    return this.user$? true : false
 }
 


}
