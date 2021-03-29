import { Context, Controller, FieldItem, FieldItems, ID, Schema, UI, UiSchema } from "tonva-react";
import { FormUI } from "./FormUI";
export declare class CFormView<T> extends Controller {
    protected readonly ui: UI;
    schema: Schema;
    uiSchema: UiSchema;
    label: string | JSX.Element;
    submitCaption: string | JSX.Element;
    onSubmit: (name: string, context: Context) => Promise<void>;
    constructor(formUI: FormUI);
    protected internalStart(): Promise<void>;
    setNO(ID: ID, fieldName?: string): Promise<void>;
    submit(name: string, context: Context): Promise<void>;
    protected buildItemSchema(fieldArr: FieldItems): Schema;
    protected buildUISchema(fields: {
        [name: string]: FieldItem;
    }): UiSchema;
    renderForm(item: T): JSX.Element;
}
