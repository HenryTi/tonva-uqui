import { VPage } from "tonva-react";
import { CSelect } from "./CSelect";
export declare class VSelect extends VPage<CSelect> {
    private tagGroups;
    init(): void;
    header(): string;
    content(): JSX.Element;
    private renderType;
}
