import { ID, Schema, UiSchema, Uq, Prop, IDUI, IX } from "tonva-react";
import { IDBase, Mid } from "../base";
import { MidIDList } from "./MidIDList";
export declare class MidID<T extends IDBase> extends Mid {
    readonly IDUI: IDUI;
    readonly ID: ID;
    constructor(uq: Uq, IDUI: IDUI);
    listHeader: string | JSX.Element;
    itemHeader: string | JSX.Element;
    init(): Promise<void>;
    createMidIDList(): MidIDList<T>;
    protected buildUISchema(IDUI: IDUI): UiSchema;
    protected loadSchema(): Promise<void>;
    load(id: number): Promise<T[]>;
    saveID(data: any): Promise<number>;
    private _itemSchema;
    get itemSchema(): Schema;
    private _uiSchema;
    get uiSchema(): UiSchema;
    private _props;
    get props(): Prop[];
}
export declare class MidIXID<T extends IDBase> extends MidID<T> {
    readonly IX: IX;
    constructor(uq: Uq, IDUI: IDUI, IX: IX);
    createMidIDList(): MidIDList<T>;
    saveID(data: any): Promise<number>;
}
