import { Controller } from "tonva-react";
import { IDBase } from "../base";
import { MidTag, Tag } from "./MidTag";
import { MidIDList } from "../ID";
export declare class CTagIDList<T extends IDBase> extends Controller {
    readonly midTag: MidTag;
    constructor(midTag: MidTag);
    protected internalStart(): Promise<void>;
    showID(tags: Tag[]): Promise<void>;
}
export declare class MidTagIDList<T extends IDBase> extends MidIDList<T> {
    readonly midTag: MidTag;
    readonly ids: number[];
    constructor(midTag: MidTag, ids: number[]);
    init(): Promise<void>;
    protected loadPageItems(pageStart: any, pageSize: number): Promise<T[]>;
}
