import { ChangedHandler, ChangingHandler, FieldCustoms, FieldItem, ID, PickId, TFunc, UI } from "tonva-react";
export declare class FormUI {
    label: string | JSX.Element;
    readonly fieldArr: FieldItem[];
    readonly fields: {
        [name: string]: FieldItem;
    };
    submitCaption: string;
    t: TFunc;
    constructor(ui: UI, fieldCustoms: FieldCustoms, t?: TFunc);
    setIDUi(fieldName: string, pickId: PickId, render: (values: any) => JSX.Element): void;
    setNO(ID: ID, fieldName?: string): Promise<void>;
    hideField(...fieldNames: string[]): void;
    setFieldChanged(fieldName: string, onChanged: ChangedHandler): void;
    setFieldChanging(fieldName: string, onChanging: ChangingHandler): void;
}
