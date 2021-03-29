import { ID, IX, Uq } from "tonva-react";
import { IDBase, IXBase } from "../base";
import { MidIDListBase } from "../list";

export class MidIDList<T extends IDBase> extends MidIDListBase<T> {
	readonly ID:ID;
	
	constructor(uq:Uq, ID:ID) {
		super(uq);
		this.ID = ID;
	}

	async init() {
		//await this.ID.loadSchema();
	}

	protected async loadPageItems(pageStart:any, pageSize:number):Promise<T[]> {
		let ret = await this.uq.ID<T>({
			IDX: this.ID,
			id: undefined,
			page: {start:pageStart, size:pageSize},
		});
		return ret;
	}

	update(id:number, item:any) {
		item.id = id;
		this.listPageItems.update(item);
	}
}

export class MidIXIDList<T extends IXBase> extends MidIDList<T> {
	readonly IX:IX;
	constructor(uq:Uq, ID:ID, IX:IX) {
		super(uq, ID);
		this.IX = IX;
	}

	protected async loadPageItems(pageStart:any, pageSize:number):Promise<T[]> {
		let ret = await this.uq.IX<T>({
			IX: this.IX,
			IDX: [this.ID],
			ix: undefined,
			page: {start:pageStart, size:pageSize},
		});
		/*
		for (let item of ret) {
			item.id = item.id;
			delete item.id;
		}
		*/
		return ret;
	}
}
