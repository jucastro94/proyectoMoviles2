import { Role } from "./role";

export interface User {
    id: string;
    email: string;
    password: string;
    document: string;
    typeDocument: string;
    name: string;
    lastname: string;
    role: Role;
    bornDate: Date;
}

export class NotLogged implements User {
    id = '';
    email = '';
    password = '';
    document = '';
    typeDocument = '';
    name = '';
    lastname = '';
    role = {
        roleName: '',
        manageUsers: false,
        watchReports: false,
        access: false,
        position: '',
    };
    bornDate = new Date();
}

export class Employee implements User {
    id = '';
    email = '';
    password = '';
    document = '';
    typeDocument = '';
    name = '';
    lastname = '';
    role = {
        roleName: 'Empleado',
        manageUsers: false,
        watchReports: false,
        access: true,
        position: '',
    };
    bornDate = new Date();
}

export class Admin implements User {
    id = '';
    email = '';
    password = '';
    document = '';
    typeDocument = '';
    name = '';
    lastname = '';
    role = {
        roleName: 'Administrador',
        manageUsers: true,
        watchReports: true,
        access: true,
        position: '',
    };
    bornDate = new Date();
}
