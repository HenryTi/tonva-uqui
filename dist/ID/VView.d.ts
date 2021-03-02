import { VPage } from "tonva-react";
import { CID } from "./CID";
export declare class VView extends VPage<CID<any>> {
    header(): string;
    right(): JSX.Element;
    content(): JSX.Element;
}
