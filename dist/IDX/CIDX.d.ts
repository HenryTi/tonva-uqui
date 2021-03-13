import { Controller, PageItems } from "tonva-react";
import { TimeSpan } from "../tools";
import { MidIDX } from "./MidIDX";
export declare class CIDX extends Controller {
    timeSpan: TimeSpan;
    spanValues: any;
    dayValues: number[];
    midIDX: MidIDX;
    private historyPageItems;
    constructor(midIDX: MidIDX);
    protected internalStart(): Promise<void>;
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
