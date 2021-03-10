import { ID, Schema, UiSchema, Uq, Prop, IDX } from "tonva-react";
import { TimeSpan } from "../tools";
import { Mid } from "../base";
export declare class MidIDX extends Mid {
    readonly IDX: IDX;
    readonly ID: ID;
    readonly timeZone: number;
    constructor(uq: Uq, IDX: IDX, ID: ID, timeZone: number);
    init(): Promise<void>;
    protected loadSchema(): Promise<void>;
    load(id: number): Promise<any[]>;
    historyPageItems: (id: number, field: string, far: number, near: number, pageStart: any, pageSize: number) => Promise<any[]>;
    saveID(data: any): Promise<number>;
    saveFieldValue(id: number, fieldName: string, t: any, value: string | number): Promise<void>;
    loadFieldSum(id: number, field: string, timeSpan: TimeSpan): Promise<any>;
    loadSum(id: number, far: number, near: number): Promise<[any[], any[]]>;
    loadDayValues(id: number, field: string, far: number, near: number): Promise<any[]>;
    private _itemSchema;
    get itemSchema(): Schema;
    private _uiSchema;
    get uiSchema(): UiSchema;
    private _props;
    get props(): Prop[];
}
