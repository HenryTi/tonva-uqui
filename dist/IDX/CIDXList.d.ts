import { CList } from "../list";
import { IDBase } from "../base";
import { MidIDXList } from "./MidIDXList";
export declare class CIDXList<T extends IDBase> extends CList<T> {
    private midIDList;
    constructor(midIDList: MidIDXList<T>);
    protected renderItem(item: any, index: number): JSX.Element;
}
