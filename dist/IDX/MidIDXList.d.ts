import { ID, IDX, Uq } from "tonva-react";
import { IDBase } from "../base";
import { MidIDListBase } from "../list";
export declare class MidIDXList<T extends IDBase> extends MidIDListBase<T> {
    readonly ID: ID;
    readonly IDX: IDX;
    constructor(uq: Uq, ID: ID, IDX: IDX);
    init(): Promise<void>;
    protected loadPageItems(pageStart: any, pageSize: number): Promise<T[]>;
}
