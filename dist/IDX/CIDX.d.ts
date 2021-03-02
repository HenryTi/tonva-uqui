import { Controller, PageItems } from "tonva-react";
import { TimeSpan } from "../tools";
import { MidIDX } from "./Mid";
export declare class CIDX extends Controller {
    mid: MidIDX;
    private historyPageItems;
    constructor(mid: MidIDX, res?: any);
    protected internalStart(): Promise<void>;
    item: any;
    onItemClick: (item: any) => void;
    onItemEdit: () => Promise<void>;
    timeSpan: TimeSpan;
    spanValues: any;
    setTimeSpan(span: 'day' | 'week' | 'month' | 'year'): Promise<void>;
    private loadSum;
    prevTimeSpan(): Promise<void>;
    nextTimeSpan(): Promise<void>;
    get historyItems(): PageItems<any>;
    field: string;
    onFieldHistory(field: string): Promise<void>;
    saveFieldValue(field: string, t: number, value: number | string): Promise<void>;
}
