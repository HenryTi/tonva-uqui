import { IDBase } from "../base";
import { MidIDTagList, ItemTags } from "./CIDTagList";
export declare function renderRight(onClick: () => void): JSX.Element;
export declare function renderItemTags<T extends IDBase>(midIDTagList: MidIDTagList<T>, itemTags: ItemTags<T>, index: number): JSX.Element;
