import { Controller, PageItems } from "tonva-react";
import { TimeSpan } from "../tools";
import { MidIDX } from "./MidIDX";
export declare class CIDX extends Controller {
    timeSpan: TimeSpan;
    spanValues: any;
    dayValues: number[];
    mid: MidIDX;
    private historyPageItems;
    constructor(mid: MidIDX, res?: any);
    protected internalStart(item: any): Promise<void>;
    item: any;
    onItemClick: (item: any) => void;
    onItemEdit: () => Promise<void>;
    setTimeSpan(span: 'day' | 'week' | 'month' | 'year'): Promise<void>;
    private loadSum;
    prevTimeSpan: () => Promise<void>;
    nextTimeSpan: () => Promise<void>;
    get historyItems(): PageItems<any>;
    field: string;
    onFieldHistory(field: string): Promise<void>;
    loadDayValues(): Promise<void>;
    setCurrentField(field: string): void;
    saveFieldValue(field: string, t: number, value: number | string): Promise<void>;
}
