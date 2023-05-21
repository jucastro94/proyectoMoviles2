export type FieldType = 'text' | 'checkbox';

type FieldOption = {
    label: string;
    value: string;
};

export interface Field {
    label: string;
    type: FieldType;
    optional: boolean;
}

export class TextField implements Field {
    label: string = '';
    readonly type: FieldType = 'text';
    optional: boolean = false;
}
  
export class CheckboxField implements Field {
    label: string = '';
    readonly type: FieldType = 'checkbox';
    optional: boolean = false;
    options: FieldOption[] = [];
}
