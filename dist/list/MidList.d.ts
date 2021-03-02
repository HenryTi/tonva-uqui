import { PageItems } from "tonva-react";
import { ListPageItems } from "../tools";
import { IDBase, Mid } from "../base";
export declare abstract class MidList<T> extends Mid {
    protected listPageItems: ListPageItems<T>;
    abstract createPageItems(): PageItems<T>;
    init(): Promise<void>;
    protected abstract loadPageItems(pageStart: any, pageSize: number): Promise<T[]>;
    abstract key: ((item: T) => number | string);
    onRightClick: () => any;
    renderItem: (item: T, index: number) => JSX.Element;
    onItemClick: (item: T) => any;
    renderRight: () => JSX.Element;
}
export declare abstract class MidIDListBase<T extends IDBase> extends MidList<T> {
    protected listPageItems: IDListPageItems<T>;
    key: ((item: T) => number | string);
    createPageItems(): PageItems<T>;
}
declare class IDListPageItems<T extends IDBase> extends ListPageItems<T> {
    itemId(item: T): number;
    newItem(id: number, item: T): T;
    update(id: number, item: T): void;
}
export {};
