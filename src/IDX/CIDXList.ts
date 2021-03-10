import { CList } from "../list";
import { IDBase } from "../base";
import { MidIDXList } from "./MidIDXList";

export class CIDXList<T extends IDBase> extends CList<T> {
	private midIDList: MidIDXList<T>;
	constructor(midIDList: MidIDXList<T>) {
		super(midIDList);
		this.midIDList = midIDList;
	}

	protected renderItem(item:any, index:number):JSX.Element {
		let {ID} = this.midIDList;
		if (ID) return ID.render(item);
		return super.renderItem(item, index);
	}
}
