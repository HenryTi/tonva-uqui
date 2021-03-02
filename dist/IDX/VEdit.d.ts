import { VPage } from "tonva-react";
import { CIDX } from "./CIDX";
export declare class VEdit extends VPage<CIDX> {
    header(): string;
    content(): JSX.Element;
    private renderStringProp;
    private renderNumberProp;
}
