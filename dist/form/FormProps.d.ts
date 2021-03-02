import { ChangedHandler, ChangingHandler, FieldItem, UI } from "tonva-react";
export declare class FormProps {
    label: string;
    readonly fieldArr: FieldItem[];
    readonly fields: {
        [name: string]: FieldItem;
    };
    onSubmit: (values: any) => Promise<void>;
    submitCaption: string;
    constructor(ui: UI, exFields: {
        [name: string]: Partial<FieldItem>;
    });
    private setDefaultIDUi;
    setIDUi(fieldName: string, pickId: () => Promise<any>, render: (values: any) => JSX.Element): void;
    setNO(no: string, fieldName?: string): void;
    hideField(...fieldNames: string[]): void;
    setFieldChanged(fieldName: string, onChanged: ChangedHandler): void;
    setFieldChanging(fieldName: string, onChanging: ChangingHandler): void;
}
