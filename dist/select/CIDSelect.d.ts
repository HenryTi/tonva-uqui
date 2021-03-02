import { ID, PageItems, Uq } from "tonva-react";
import { IDBase } from "../base";
import { CList, MidList } from "../list";
export declare class CIDSelect<T extends IDBase, P extends MidIDSelectList<T>> extends CList<T> {
    midIDSelectList: P;
    constructor(midIDSelectList: P);
    protected createMidList(): MidList<T>;
    protected onItemClick(item: any): void;
    protected renderRight(): JSX.Element;
    protected renderItem(item: any, index: number): JSX.Element;
}
export declare class MidIDSelectList<T extends IDBase> extends MidList<T> {
    readonly ID: ID;
    onSelectChange: (item: T, isSelected: boolean) => any;
    constructor(uq: Uq, ID: ID);
    init(): Promise<void>;
    key: ((item: T) => number | string);
    createPageItems(): PageItems<T>;
    protected loadPageItems(pageStart: any, pageSize: number): Promise<T[]>;
}
