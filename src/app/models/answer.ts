export interface Answer {
    _id?: string;

    /**
     * nombre unico del formulario
     */
    form: string;

    /**
     * fecha-hora en que se diligencio el formulario
     */
    creationDate: Date;

    /**
     * el id del usuario que diligencio esta entrada del formulario
     */
    author: string

    /**
     * los campos
     */
    [x: string]: unknown;
}
