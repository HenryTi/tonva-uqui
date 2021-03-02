import { ID, IX, Uq } from "tonva-react";
import { CList, MidIDListBase } from "../list";
import { IXBase, IDBase } from "../base";
export declare class CIXList<T extends IDBase, T2 extends IXBase> extends CList<T2> {
    protected midIXList: MidIXList<T2>;
    constructor(midIXList: MidIXList<T2>);
    update(item: any): void;
}
export declare class MidIXList<T extends IXBase> extends MidIDListBase<T> {
    readonly IX: IX;
    readonly ID: ID;
    readonly id: number;
    constructor(uq: Uq, IX: IX, ID: ID, id: number);
    init(): Promise<void>;
    key: ((item: T) => number | string);
    protected loadPageItems(pageStart: any, pageSize: number): Promise<T[]>;
    update(item: T): void;
}
