import { FieldItem, ID, Schema, UiSchema, Uq } from "tonva-react";
export declare abstract class Mid {
    readonly uq: Uq;
    readonly res: any;
    constructor(uq: Uq, res?: any);
    abstract init(): Promise<void>;
    protected buildItemSchema(ID: ID): Promise<Schema>;
    protected buildUISchema(ID: ID): UiSchema;
    protected setIDUi(fieldItem: FieldItem, pickId: () => Promise<any>, render: (values: any) => JSX.Element): void;
    protected setNO(no: string, noFieldItem: FieldItem): void;
}
