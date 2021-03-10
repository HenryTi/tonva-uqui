import { FormUI, Uq } from "tonva-react";
import { Detail, Master, Mid } from "../base";
export interface SheetOptions {
    master: FormUI;
    detail: FormUI;
}
export declare class MidSheet<M extends Master, D extends Detail> extends Mid {
    readonly master: FormUI;
    readonly detail: FormUI;
    constructor(uq: Uq, res: any, options: SheetOptions);
    init(): Promise<void>;
    load(id: number): Promise<[M[], D[]]>;
    save(master: M, details: D[]): Promise<any>;
}
