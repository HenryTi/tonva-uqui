import { Controller, FieldItem, FieldItems, Schema, UI, UiSchema } from "tonva-react";
import { FormProps } from "./FormProps";
export declare class CForm<T> extends Controller {
    protected readonly ui: UI;
    param: T;
    schema: Schema;
    uiSchema: UiSchema;
    label: string;
    submitCaption: string;
    private onSubmit;
    constructor(props: FormProps, res?: any);
    protected internalStart(param: T): Promise<void>;
    submit(data: any): void;
    protected buildItemSchema(fieldArr: FieldItems): Schema;
    protected buildUISchema(fields: {
        [name: string]: FieldItem;
    }): UiSchema;
}
