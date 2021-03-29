import { IDUI, Uq } from "tonva-react";
import { Detail, Master, Mid } from "../base";
export interface SheetUI {
    master: IDUI;
    detail: IDUI;
}
export declare class MidSheet<M extends Master, D extends Detail> extends Mid {
    readonly master: IDUI;
    readonly detail: IDUI;
    constructor(uq: Uq, ui: SheetUI, res?: any);
    init(): Promise<void>;
    load(id: number): Promise<[M[], D[]]>;
    save(master: M, details: D[]): Promise<any>;
}
