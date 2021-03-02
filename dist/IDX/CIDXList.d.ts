import { ID, IDX, Uq } from "tonva-react";
import { CList, MidIDListBase } from "../list";
import { IDBase } from "../base";
export declare class CIDXList<T extends IDBase> extends CList<T> {
    private midIDList;
    constructor(midIDList: MidIDXList<T>);
    protected renderItem(item: any, index: number): JSX.Element;
}
export declare class MidIDXList<T extends IDBase> extends MidIDListBase<T> {
    readonly ID: ID;
    readonly IDX: IDX;
    constructor(uq: Uq, ID: ID, IDX: IDX);
    init(): Promise<void>;
    protected loadPageItems(pageStart: any, pageSize: number): Promise<T[]>;
}
