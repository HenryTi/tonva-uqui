// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { runInAction } from "mobx";
import { ID, IX, Uq } from "tonva-react";
import { CList, MidIDListBase } from "../list";
import { IXBase, IDBase } from "../base";

/*
export interface IXListProps<T extends IDBase> {
	uq: Uq;
	IX: IX;
	ID: ID;
	id: number;
	onRightClick: ()=>any;
	renderItem: (item:T, index:number)=>JSX.Element;
	onItemClick: (item:T)=>any;
	renderRight?: ()=>JSX.Element;
}
*/
export class CIXList<T extends IDBase, T2 extends IXBase> extends CList<T2> {
	protected midIXList: MidIXList<T2>;
	constructor(midIXList: MidIXList<T2>) {
		super(midIXList);
		this.midIXList = midIXList;
	}

	update(item:any) {
		this.midIXList.update(item);
	}
}

export class MidIXList<T extends IXBase> extends MidIDListBase<T> {
	readonly IX:IX;
	readonly ID:ID;
	readonly id: number;
	constructor(uq:Uq, IX:IX, ID:ID, id:number) {
		super(uq);
		this.IX = IX;
		this.ID = ID;
		this.id = id;
	}

	async init() {
		await this.IX.loadSchema();
	}

	key:((item:T) => number|string) = item => item.id2;

	protected async loadPageItems(pageStart:any, pageSize:number):Promise<T[]> {
		let ret = await this.uq.IX<T>({
			IX: this.IX,
			IDX: this.ID? [this.ID] : undefined,
			id: this.id,
			page: {start:pageStart, size:pageSize},
		});
		return ret;
	}

	update(item:T) {
		runInAction(() => {
			let {_items} = this.listPageItems;
			if (!_items) return;
			let {id, id2} = item;
			if (id < 0) {
				let index = _items.findIndex(v => v.id === -id && v.id2 === id2);
				if (index >= 0) _items.splice(index, 1);
			}
			else {
				let ret = _items.find(v => v.id === id && v.id2 === id2);
				if (!ret) {
					_items.unshift({id, id2} as T);
				}
			}
		});
	}
}
