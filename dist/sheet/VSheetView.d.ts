import { VPage } from "tonva-react";
import { CSheet } from "./CSheet";
export declare class VSheetView extends VPage<CSheet<any, any>> {
    header(): string;
    content(): JSX.Element;
}
