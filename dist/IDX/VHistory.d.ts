import { VPage } from "tonva-react";
import { CIDX } from "./CIDX";
export declare class VHistory extends VPage<CIDX> {
    header(): string;
    content(): JSX.Element;
    private renderItem;
}
