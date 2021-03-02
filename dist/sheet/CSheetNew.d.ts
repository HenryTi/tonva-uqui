import { Detail, Master } from "../base";
import { CSheet } from "./CSheet";
export declare class CSheetNew<M extends Master, D extends Detail> extends CSheet<M, D> {
    protected internalStart(): Promise<void>;
}
