import { Controller } from "tonva-react";
import { IDBase } from "../base";
import { CIDList } from "./CIDList";
import { MidID } from "./MidID";
export declare class CID<T extends IDBase> extends Controller {
    item: any;
    mid: MidID<T>;
    idList: CIDList<any>;
    constructor(mid: MidID<T>, res?: any);
    protected internalStart(): Promise<void>;
    renderItem: (item: any, index: number) => JSX.Element;
    onItemClick: (item: any) => void;
    onItemEdit: () => Promise<void>;
    onItemView(): void;
    onItemNew(): Promise<void>;
    saveID(itemProps: any): Promise<number>;
}
