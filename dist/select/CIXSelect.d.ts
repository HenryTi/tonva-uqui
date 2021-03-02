import { ID, IX, PageItems, Uq } from "tonva-react";
import { IXBase } from "../base";
import { CIDSelect, MidIDSelectList } from "./CIDSelect";
export declare class CIXSelect<T extends IXBase> extends CIDSelect<T, MidIXSelectList<T>> {
}
export declare class MidIXSelectList<T extends IXBase> extends MidIDSelectList<T> {
    readonly IX: IX;
    readonly id: number;
    constructor(uq: Uq, ID: ID, IX: IX, id: number);
    init(): Promise<void>;
    key: ((item: T) => number | string);
    createPageItems(): PageItems<T>;
    protected loadPageItems(pageStart: any, pageSize: number): Promise<T[]>;
}
