export interface Role {
    /**
     * 'cargo'
     */
    readonly roleName: string;

    /**
     * acceso a vista de manejo de usuarios
     */
    readonly manageUsers: boolean;

    /**
     * acceso a vista de reportes
     */
    readonly watchReports: boolean;

    /**
     * puede entrar al sistema (usuario regular)
     */
    readonly access: boolean;

    /**
     * nombre del cargo dentro de la empresa
     */
    readonly position: string;
}
