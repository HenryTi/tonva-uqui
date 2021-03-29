import { View, VPage } from "tonva-react";
import { CID } from "./CID";
export declare class VView extends VPage<CID<any>> {
    header(): string | JSX.Element;
    right(): JSX.Element;
    content(): JSX.Element;
}
export declare class VViewRight extends View<CID<any>> {
    render(): JSX.Element;
}
