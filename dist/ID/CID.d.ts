import { Controller } from "tonva-react";
import { IDBase } from "../base";
import { CList } from '../list';
import { CFormView } from "../form";
import { MidID } from "./MidID";
export declare class CID<T extends IDBase> extends Controller {
    item: T;
    midID: MidID<T>;
    cFormView: CFormView<T>;
    private midIDList;
    private valueChanged;
    constructor(midID: MidID<T>);
    protected internalStart(): Promise<void>;
    protected createFormView(): void;
    protected createCList(): CList<T>;
    private onSubmit;
    renderItem: (item: T, index: number) => JSX.Element;
    onItemClick: (item: T) => void;
    onItemEdit: () => Promise<void>;
    onItemView(): void;
    onItemNew: () => Promise<void>;
    saveID(itemProps: any): Promise<number>;
    get itemHeader(): string;
    get editHeader(): string;
    renderViewRight(item?: T): JSX.Element;
}
