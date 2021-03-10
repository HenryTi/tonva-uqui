import { Controller, ID, IX, Uq } from "tonva-react";
import { Mid } from "../base";
export declare class MidIX extends Mid {
    readonly IX: IX;
    readonly ID: ID;
    readonly id: number;
    constructor(uq: Uq, IX: IX, ID: ID, id: number, res?: any);
    init(): Promise<void>;
}
export declare class CIX<P extends MidIX> extends Controller {
    protected readonly mid: P;
    constructor(mid: P);
    protected internalStart(): Promise<void>;
    private onItemEdit;
    private onItemClick;
}
