import { makeObservable, observable, runInAction } from "mobx";
import { Controller } from "tonva-react";
import { renderItem } from "../tools";
import { IDBase } from "../base";
import { CList } from '../list';
import { MidID } from "./MidID";
import { MidIDList } from "./MidIDList";
import { VEdit } from "./VEdit";
import { VView } from "./VView";

export class CID<T extends IDBase> extends Controller {
	item:T = null;
	midID: MidID<T>;
	//idList: CIDList<any>;
	private midIDList: MidIDList<T>;

	constructor(midID: MidID<T>) {
		super();
		makeObservable(this, {
			item: observable,
		});
		this.setRes(midID.res);
		this.midID = midID;
	}

	protected async internalStart() {
		let {uq, ID} = this.midID;
		this.midIDList = new MidIDList<T>(uq, ID);
		this.midIDList.onRightClick = this.onItemEdit;
		this.midIDList.renderItem = this.renderItem;
		this.midIDList.onItemClick = this.onItemClick;
		this.midIDList.renderRight = undefined;
		let cList = new CList(this.midIDList);
		await cList.start();
	}

	renderItem: (item:T, index:number) => JSX.Element = (item:T, index:number) => {
		let {ID } = this.midID;
		if (ID) return ID.render(item);
		return renderItem(item, index);
	}
	onItemClick: (item: T) => void = (item:any) => {
		runInAction(() => {
			this.item = item;
			this.onItemView();	
		});
	}

	onItemEdit = async (): Promise<void> => {
		await this.midID.init();
		this.openVPage(VEdit);
	}

	onItemView():void {
		this.openVPage(VView);
	}

	async onItemNew(): Promise<void> {
		this.item = undefined;
		await this.midID.init();
		this.openVPage(VEdit);
	}

	async saveID(itemProps:any) {		
		let id = this.item?.id;
		let item = {
			...itemProps,
			id,
		}
		let ret = await this.midID.saveID(item);
		if (ret) id = ret;
		this.midIDList?.update(id, item);
		runInAction(() => {
			if (this.item)
				Object.assign(this.item, item);
			else
				this.item = item;
		});
		return ret;
	}
}
