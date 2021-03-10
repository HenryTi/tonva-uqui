import { ID, IX, Uq } from "tonva-react";
import { Mid } from "../base";
export interface Tag {
    id: number;
    name: string;
    parent: number;
    sub: Tag[];
}
export declare class MidTag extends Mid {
    readonly ID: ID;
    readonly IX: IX;
    readonly tag: ID;
    readonly type: string;
    typeArr: Tag[];
    typeColl: {
        [id: number]: Tag;
    };
    constructor(uq: Uq, ID: ID, IX: IX, tag: ID, type: string);
    init(): Promise<void>;
    protected load(): Promise<void>;
    private buildTagTypes;
}
