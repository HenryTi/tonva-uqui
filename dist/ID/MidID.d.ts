import { ID, Schema, UiSchema, Uq, Prop } from "tonva-react";
import { IDBase, Mid } from "../base";
export declare class MidID<T extends IDBase> extends Mid {
    readonly ID: ID;
    constructor(uq: Uq, ID: ID);
    init(): Promise<void>;
    protected buildUISchema(ID: ID): UiSchema;
    protected loadSchema(): Promise<void>;
    load(id: number): Promise<T[]>;
    saveID(data: any): Promise<number>;
    private _itemSchema;
    get itemSchema(): Schema;
    private _uiSchema;
    get uiSchema(): UiSchema;
    private _props;
    get props(): Prop[];
    protected setDefaultNo(): Promise<void>;
}
