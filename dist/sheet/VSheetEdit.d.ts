import { VPage } from "tonva-react";
import { CSheet } from "./CSheet";
export declare class VSheetEdit extends VPage<CSheet<any, any>> {
    header(): string;
    right(): JSX.Element;
    content(): JSX.Element;
    private onDetailClick;
    private renderDetail;
    private saveSheet;
}
