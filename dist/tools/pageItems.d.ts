import { PageItems } from "tonva-react";
import { IDBase } from "../base";
export declare type IDItemsPageLoader<T> = (pageStart: any, pageSize: number) => Promise<T[]>;
export declare type HistoryPageLoader<T> = (id: number, field: string, far: number, near: number, pageStart: any, pageSize: number) => Promise<T[]>;
export declare abstract class ListPageItems<T> extends PageItems<T> {
    private pageLoader;
    constructor(pageLoader: IDItemsPageLoader<T>);
    loadResults(param: any, pageStart: any, pageSize: number): Promise<{
        [name: string]: any[];
    }>;
    abstract update(item: T): Promise<void>;
}
export declare class HistoryPageItems<T extends IDBase> extends PageItems<T> {
    private pageLoader;
    constructor(pageLoader: HistoryPageLoader<T>);
    loadResults(param: any, pageStart: any, pageSize: number): Promise<{
        [name: string]: any[];
    }>;
    update(item: T): Promise<void>;
}
