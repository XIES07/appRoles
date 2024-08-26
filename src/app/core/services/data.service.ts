import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { MenuItem } from 'primeng/api';
import { Store } from '@ngrx/store';
import { AppState } from '../models/ngrx.models';
import { logOut } from '../state/auth/auth.actions';


@Injectable({
  providedIn: 'root',
})

export class DataService {

  modules: MenuItem[] = [
    { label: 'home', icon: 'pi pi-home', title: 'home', routerLink: 'home' },
    {
      label: 'superUser',
      icon: 'pi pi-box',
      title: 'superUser',
      items: [
        { label: 'Panel of control', icon: 'pi pi-desktop', title: 'panelOfControl', routerLink: 'super-user/panel-super-user' }
      ]
    },
    {
      label: 'administrator',
      icon: 'pi pi-box',
      title: 'administrator',
      items: [
        { label: 'Administrative panel', icon: 'pi pi-desktop', title: 'administrativePanel', routerLink: 'administrator/panel-control' }
      ]
    },
    {
      label: 'accounting',
      icon: 'pi pi-calculator',
      title: 'accounting',
      items: [
        { label: 'Payroll', icon: 'pi pi-dollar', title: 'payroll', routerLink: 'accounting/payroll' },
        { label: 'Reports', icon: 'pi pi-tablet', title: 'reports', routerLink: 'accounting/reports' }
      ]
    },
    {
      label: 'commercial',
      icon: 'pi pi-verified',
      title: 'commercial',
      items: [
        { label: 'Contacts', icon: 'pi pi-users', title: 'contacts', routerLink: 'commercial/contacts' },
        { label: 'Sales', icon: 'pi pi-shopping-bag', title: 'sales', routerLink: 'commercial/sales' }
      ]
    },
    { label: 'products', icon: 'pi pi-globe', title: 'products', routerLink: 'products/view-products' },
    {
      label: 'profile',
      icon: 'pi pi-user',
      title: 'profile',
      items: [
        { label: 'Profile', icon: 'pi pi-user', title: 'viewprofile', routerLink: 'profile/view-profile' },
        { label: 'Log Out', icon: 'pi pi-sign-out', title: 'logOut', routerLink: 'auth', command: () => { this.store.dispatch(logOut()), localStorage.removeItem('user') } }
      ]
    }
  ];

  constructor(private store: Store<AppState>) { }

  filterModulesByPermissions(user: UserModel): MenuItem[] {

    return this.modules.map(module => {

      const isModuleAccessible = user.access[module.title as keyof UserModel['access']];

      const filteredItems = module.items ? module.items.filter(item =>
        user.accessSubModule[item.title as keyof UserModel['accessSubModule']] ?? false
      ) : [];

      if (isModuleAccessible || filteredItems.length > 0) {
        return {
          ...module,
          items: filteredItems.length > 0 ? filteredItems : undefined
        } as MenuItem;
      }

      return null;
    }).filter((module): module is MenuItem => module !== null);
  }

}

