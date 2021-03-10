import { ID, Uq } from "tonva-react";
import { CIDSelect, MidIDSelectList } from "./CIDSelect";
export declare function createPickId(uq: Uq, ID: ID): () => Promise<any>;
export declare class CIDSelectInPickId extends CIDSelect<any, MidIDSelectList<any>> {
    constructor(mid: MidIDSelectList<any>);
    private onSelectChange;
}
