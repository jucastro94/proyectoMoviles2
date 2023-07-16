import { Role } from "./role";

export interface User {
    _id: string;
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
    _id = '';
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
    _id = '';
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
    _id = '';
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
