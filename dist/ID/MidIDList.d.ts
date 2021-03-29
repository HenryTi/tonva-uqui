import { ID, IX, Uq } from "tonva-react";
import { IDBase, IXBase } from "../base";
import { MidIDListBase } from "../list";
export declare class MidIDList<T extends IDBase> extends MidIDListBase<T> {
    readonly ID: ID;
    constructor(uq: Uq, ID: ID);
    init(): Promise<void>;
    protected loadPageItems(pageStart: any, pageSize: number): Promise<T[]>;
    update(id: number, item: any): void;
}
export declare class MidIXIDList<T extends IXBase> extends MidIDList<T> {
    readonly IX: IX;
    constructor(uq: Uq, ID: ID, IX: IX);
    protected loadPageItems(pageStart: any, pageSize: number): Promise<T[]>;
}
