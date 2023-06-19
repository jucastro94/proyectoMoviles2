import { Field } from "./field";

/**
 * representacion de un formulario generico dinamicamente creado.
 */
export interface Form {
    id?: string;

    /**
     * nombre del formulario
     */
    title: string;

    /**
     * cada pregunta/entrada de los campos que componen el formulario
     */
    fields: Field[];

    /**
     * id o nombre o cedula de usuario que redacto la entrada
     */
    author: string;

    /**
     * fecha al momento de diligenciar o enviar la entrada de formulario
     */
    creationDate: Date;

    /**
     * quien puede ver el formulario
     */
    allowed: string[];

    // url: string;
}
