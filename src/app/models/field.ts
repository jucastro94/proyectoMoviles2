export type FieldType = 'text' 
    | 'checkbox'
    | 'selector'
    | 'radio';

type FieldOption = {
    label: string;
    value: string;
};

export interface Field {
    label: string;
    readonly type: FieldType;
    optional: boolean;
}

export class TextField implements Field {
    label: string = '';
    readonly type: FieldType = 'text';
    optional: boolean = false;
    // placeholder: string = '';
}
  
export class CheckboxField implements Field {
    label: string = '';
    readonly type: FieldType = 'checkbox';
    readonly optional: boolean = false;
}

export class RadioField implements Field {
    label: string = '';
    readonly type: FieldType = 'radio';
    optional: boolean = false;
    options: string[] = [];
}

export class SelectorField implements Field {
    label: string = '';
    readonly type: FieldType = 'selector';
    optional: boolean = false;
    options: string[] = [];
    readonly multiple: boolean = false;
}
