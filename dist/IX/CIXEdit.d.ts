import { ID } from "tonva-react";
import { CIX, MidIX } from "./CIX";
export interface IXEditProps extends MidIX {
    ID: ID;
}
export declare class CIXEdit extends CIX<IXEditProps> {
    private cIXList;
    protected internalStart(): Promise<void>;
    private onListRightClick;
    private onSelectChange;
}
