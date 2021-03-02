import { VPage } from "tonva-react";
import { CIDX } from "./CIDX";
export declare class VView extends VPage<CIDX> {
    currentIndex: number;
    constructor(controller: CIDX);
    header(): string;
    right(): JSX.Element;
    content(): JSX.Element;
    private tabClick;
    private onFieldClick;
    private onFieldHistory;
}
