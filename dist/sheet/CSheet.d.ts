import { Controller } from "tonva-react";
import { Detail, Master } from "../base";
import { MidSheet } from "./MidSheet";
export declare abstract class CSheet<M extends Master, D extends Detail> extends Controller {
    readonly mid: MidSheet<M, D>;
    id: number;
    master: M;
    details: D[];
    detail: D;
    constructor(mid: MidSheet<M, D>);
    protected load(id: number): Promise<void>;
    saveSheet(): Promise<any>;
    afterMasterNew(): void;
    private serial;
    editDetail: (detail: D) => Promise<void>;
}
