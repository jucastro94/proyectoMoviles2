export type FieldType = 'text' 
    | 'checkbox'
    | 'selector'
    | 'radio';

export interface Field {

    /**
     * human readable name
     */
    label: string;

    /**
     * type of field
     */
    readonly type: FieldType;

    /**
     * object valid name
     */
    name: string;
}

export class TextField implements Field {
    label: string = '';
    readonly type: FieldType = 'text';
    name = '';
}
  
export class CheckboxField implements Field {
    label: string = '';
    readonly type: FieldType = 'checkbox';
    readonly optional: boolean = false;
    name = '';
}

export class RadioField implements Field {
    label: string = '';
    readonly type: FieldType = 'radio';
    options: string[] = [];
    name = '';
}

export class SelectorField implements Field {
    label: string = '';
    readonly type: FieldType = 'selector';
    options: string[] = [];
    readonly multiple: boolean = false;
    name = '';
}
