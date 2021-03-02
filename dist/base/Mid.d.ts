import { ID, Schema, UiSchema, Uq } from "tonva-react";
export declare abstract class Mid {
    readonly uq: Uq;
    readonly res: any;
    constructor(uq: Uq, res?: any);
    buildItemSchema(ID: ID): Schema;
    buildUISchema(ID: ID): UiSchema;
}
