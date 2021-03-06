import { Detail, Master } from "../base";
import { CSheet } from "./CSheet";
export declare class CSheetView<M extends Master, D extends Detail> extends CSheet<M, D> {
    protected internalStart(id: number): Promise<void>;
}
