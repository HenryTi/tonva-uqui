import { ID, Uq } from "tonva-react";
import { IDBase } from "../base";
import { MidIDListBase } from "../list";
export declare class MidIDList<T extends IDBase> extends MidIDListBase<T> {
    readonly ID: ID;
    constructor(uq: Uq, ID: ID);
    init(): Promise<void>;
    protected loadPageItems(pageStart: any, pageSize: number): Promise<T[]>;
    update(id: number, item: any): void;
}
