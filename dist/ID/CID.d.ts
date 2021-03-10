import { Controller } from "tonva-react";
import { IDBase } from "../base";
import { CIDList } from "./CIDList";
import { MidID } from "./MidID";
export declare class CID<T extends IDBase> extends Controller {
    item: T;
    mid: MidID<T>;
    idList: CIDList<any>;
    constructor(mid: MidID<T>, res?: any);
    protected internalStart(): Promise<void>;
    renderItem: (item: T, index: number) => JSX.Element;
    onItemClick: (item: T) => void;
    onItemEdit: () => Promise<void>;
    onItemView(): void;
    onItemNew(): Promise<void>;
    saveID(itemProps: any): Promise<number>;
}
