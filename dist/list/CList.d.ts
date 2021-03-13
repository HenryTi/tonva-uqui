import { Controller } from "tonva-react";
import { MidList } from "./MidList";
export declare class CList<T> extends Controller {
    protected readonly midList: MidList<T>;
    constructor(midList: MidList<T>);
    protected internalStart(): Promise<void>;
    protected get firstParam(): any;
    protected get header(): string | JSX.Element;
    protected renderItemContainer(content: any): JSX.Element;
    protected onItemClick(item: any): void;
    protected renderRight(): JSX.Element;
    protected renderItem(item: any, index: number): JSX.Element;
}
