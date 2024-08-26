import { MenuItem } from "primeng/api";



export class UserModel {
  name!: string;
  email!: string;
  role!: 'superUser' | 'admin' | 'seller' | 'counter' | 'client' | undefined; // Roles predefinidos
  permissions!: {
    canRead: boolean;
    canWrite: boolean;
    isEnable: boolean;
  };
  access!: {
    accounting: boolean;
    administrator: boolean;
    commercial: boolean;
    profile: boolean;
    products: boolean,
    superUser: boolean;
  };
  accessSubModule!: {
    panelOfControl: boolean,
    administrativePanel: boolean,
    payroll: boolean,
    reports: boolean,
    contacts: boolean,
    sales: boolean,
    viewprofile: boolean,
    logOut: boolean,
  }
}


export const InitialUsers = [
  { name: 'superUser', code: 'su' },
  { name: 'admin', code: 'admin' },
  { name: 'seller1', code: 'seller1' },
  { name: 'seller2', code: 'seller2' },
  { name: 'counter1', code: 'counter1' },
  { name: 'client1', code: 'client1' },
]
