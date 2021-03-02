import { CList } from "../list";
import { IDBase } from "../base";
import { MidIDList } from "./MidIDList";
export declare class CIDList<T extends IDBase> extends CList<T> {
    protected readonly midIDList: MidIDList<T>;
    constructor(midIDList: MidIDList<T>);
    protected renderItem(item: any, index: number): JSX.Element;
    update(id: number, item: any): void;
}
