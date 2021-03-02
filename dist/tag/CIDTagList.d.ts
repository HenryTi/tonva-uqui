import { CList, MidList } from "../list";
import { IDBase } from "../base";
import { ListPageItems } from "../tools";
import { MidTag, Tag } from "./MidTag";
export interface ItemTags<T> {
    item: T;
    typeArr: Tag[];
    typeColl: {
        [id: number]: Tag;
    };
}
export declare class CIDTagList<T extends IDBase> extends CList<ItemTags<T>> {
    private midIDTagList;
    constructor(midIDTagList: MidIDTagList<T>);
    beforeStart(): Promise<boolean>;
    protected onItemClick(item: any): void;
    protected renderItem(itemTags: ItemTags<T>, index: number): JSX.Element;
    onTagSelectChanged(item: any, tag: Tag, selected: boolean): Promise<void>;
}
export declare class MidIDTagList<T extends IDBase> extends MidList<ItemTags<T>> {
    readonly midTag: MidTag;
    private itemTagsColl;
    renderTags: (types: Tag[]) => JSX.Element;
    constructor(midTag: MidTag);
    init(): Promise<void>;
    createPageItems(): ItemTagsListPageItems<T>;
    key: ((item: ItemTags<T>) => number | string);
    protected loadPageItems(pageStart: any, pageSize: number): Promise<ItemTags<T>[]>;
    private addTag;
    private delTag;
    onTagSelectChanged: (itemTags: ItemTags<T>, tag: Tag, selected: boolean) => Promise<void>;
}
declare class ItemTagsListPageItems<T extends IDBase> extends ListPageItems<ItemTags<T>> {
    itemId(item: ItemTags<T>): number;
    newItem(id: number, itemTags: ItemTags<T>): ItemTags<T>;
}
export {};
