import { Controller } from "tonva-react";
import { MidTag, Tag } from "../MidTag";
import { CIDTagList } from '../CIDTagList';
export declare class CSelect extends Controller {
    private cIDTagList;
    itemTags: any;
    midTag: MidTag;
    constructor(cIDTagList: CIDTagList<any>, itemTags: any, midTag: MidTag, res: any);
    protected internalStart(): Promise<void>;
    protected onItemClick(item: any): void;
    protected renderRight(): JSX.Element;
    onTagSelectChanged: (tag: Tag, selected: boolean) => Promise<void>;
}
