import { VPage } from "tonva-react";
import { CTagIDList } from "./CTagIDList";
export declare class VTags extends VPage<CTagIDList<any>> {
    private tags;
    header(): string;
    content(): JSX.Element;
    private allTags;
    private renderType;
    private onTagSelectChanged;
}
