import { makeObservable, observable, runInAction } from "mobx";
import { Controller } from "tonva-react";
import { IDBase } from "../base";
import { CIDList } from "./CIDList";
import { MidID } from "./MidID";
import { MidIDList } from "./MidIDList";
import { VEdit } from "./VEdit";
import { VView } from "./VView";

export class CID<T extends IDBase> extends Controller {
	item:any;
	mid: MidID<T>;
	idList: CIDList<any>;
	constructor(mid:MidID<T>, res?:any) {
		super(res);
		makeObservable(this, {
			item: observable,
		});
		this.mid = mid;
	}

	protected async internalStart() {
		let {uq, ID} = this.mid;
		let midIDList = new MidIDList(uq, ID);
		midIDList.onRightClick = this.onItemEdit;
		midIDList.renderItem = this.renderItem;
		midIDList.onItemClick = this.onItemClick;
		midIDList.renderRight = undefined;
		this.idList = new CIDList(midIDList);
		await this.idList.start();
	}

	renderItem: (item:any, index:number) => JSX.Element;
	onItemClick: (item:any) => void = (item:any) => {
		runInAction(() => {
			this.item = item;
			this.onItemView();	
		});
	}

	onItemEdit = async (): Promise<void> => {
		await this.mid.init();
		this.openVPage(VEdit);
	}

	onItemView():void {
		this.openVPage(VView);
	}

	async onItemNew(): Promise<void> {
		this.item = undefined;
		await this.mid.init();
		this.openVPage(VEdit);
	}

	async saveID(itemProps:any) {		
		let id = this.item?.id;
		let item = {
			...itemProps,
			id,
		}
		let ret = await this.mid.saveID(item);
		if (ret) id = ret;
		this.idList.update(id, item);
		runInAction(() => {
			if (this.item)
				Object.assign(this.item, item);
			else
				this.item = item;
		});
		return ret;
	}
}
