
import { UserModel } from "../core/models/user.model";

export const unidentifiedUser: UserModel = {
  name: '',
  email: '',
  token: '',
  role: undefined,
  permissions: {
    canRead: false,
    canWrite: false,
    isEnable: false,
  },
  access: {
    accounting: false,
    administrator: false,
    commercial: false,
    products: false,
    profile: false,
    superUser: false,
  },
  accessSubModule: {
    panelOfControl: false,
    administrativePanel: false,
    payroll: false,
    reports: false,
    contacts: false,
    sales: false,
    viewprofile: false,
    logOut: false,
  }
}

export const superUser1: UserModel = {
  name: 'Alice Smith',
  email: 'alice@example.com',
  token: 'Su52',
  role: 'superUser',
  permissions: {
    canRead: true,
    canWrite: true,
    isEnable: true,
  },
  access: {
    accounting: true,
    administrator: true,
    commercial: true,
    products: true,
    profile: true,
    superUser: true,
  },
  accessSubModule: {
    panelOfControl: true,
    administrativePanel: true,
    payroll: true,
    reports: true,
    contacts: true,
    sales: true,
    viewprofile: true,
    logOut: true,
  }

};

export const admin1: UserModel = {
  name: 'Bob Johnson',
  email: 'bob@example.com',
  token: 'Ad52',
  role: 'admin',
  permissions: {
    canRead: true,
    canWrite: true,
    isEnable: true,
  },
  access: {
    accounting: true,
    administrator: true,
    commercial: true,
    products: true,
    profile: true,
    superUser: false,
  },
  accessSubModule: {
    panelOfControl: false,
    administrativePanel: true,
    payroll: true,
    reports: true,
    contacts: true,
    sales: true,
    viewprofile: true,
    logOut: true,
  }

};

export const seller1: UserModel = {
  name: 'Carlos Pérez',
  email: 'carlos.perez@example.com',
  token: 'Sell52',
  role: 'seller',
  permissions: {
    canRead: true,
    canWrite: true,
    isEnable: true,
  },
  access: {
    accounting: false,
    administrator: false,
    commercial: true,
    products: true,
    profile: true,
    superUser: false,
  },
  accessSubModule: {
    panelOfControl: false,
    administrativePanel: false,
    payroll: false,
    reports: false,
    contacts: true,
    sales: true,
    viewprofile: true,
    logOut: true,
  }
};

export const seller2: UserModel = {
  name: 'María Gómez',
  email: 'maria.gomez@example.com',
  token: 'Sell53',
  role: 'seller',
  permissions: {
    canRead: true,
    canWrite: true,
    isEnable: true,
  },
  access: {
    accounting: false,
    administrator: false,
    commercial: true,
    products: true,
    profile: true,
    superUser: false,
  },
  accessSubModule: {
    panelOfControl: false,
    administrativePanel: false,
    payroll: false,
    reports: false,
    contacts: true,
    sales: true,
    viewprofile: true,
    logOut: true,
  }
};

export const counter1: UserModel = {
  name: 'Lucía Fernández',
  email: 'lucia.fernandez@example.com',
  token: 'Counter52',
  role: 'counter',
  permissions: {
    canRead: true,
    canWrite: true,
    isEnable: true,
  },
  access: {
    accounting: true,
    administrator: false,
    commercial: false,
    products: false,
    profile: true,
    superUser: false,
  },
  accessSubModule: {
    panelOfControl: false,
    administrativePanel: false,
    payroll: true,
    reports: true,
    contacts: false,
    sales: false,
    viewprofile: true,
    logOut: true,
  }
};

export const client1: UserModel = {
  name: 'Juan Martínez',
  email: 'juan.martinez@example.com',
  token: 'Client52',
  role: 'client',
  permissions: {
    canRead: true,
    canWrite: false,
    isEnable: true,
  },
  access: {
    accounting: false,
    administrator: false,
    commercial: false,
    products: true,
    profile: true,
    superUser: false,
  },
  accessSubModule: {
    panelOfControl: false,
    administrativePanel: false,
    payroll: false,
    reports: false,
    contacts: false,
    sales: false,
    viewprofile: true,
    logOut: true,
  }
};

export const InitialUsers: UserModel[] = [
  superUser1,
  admin1,
  seller1,
  seller2,
  counter1,
  client1
]