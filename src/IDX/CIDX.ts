import { makeObservable, observable, runInAction } from "mobx";
import { Controller, PageItems } from "tonva-react";
import { HistoryPageItems, TimeSpan } from "../tools";
import { CList } from "../list";
import { MidIDX } from "./MidIDX";
import { MidIDXList } from "./MidIDXList";
import { res } from "./res";
import { VEdit } from "./VEdit";
import { VHistory } from "./VHistory";
import { VView } from "./VView";

export class CIDX extends Controller {
	timeSpan:TimeSpan = null;
	spanValues: any = null;
	dayValues: number[] = null;
	midIDX: MidIDX;
	private historyPageItems: HistoryPageItems<any>
	constructor(midIDX: MidIDX) {
		super();
		makeObservable(this, {
			timeSpan: observable,
			spanValues: observable,
			dayValues: observable.ref,
		});
		this.setRes(res);
		this.setRes(midIDX.res);
		this.midIDX = midIDX;
		this.historyPageItems = new HistoryPageItems<any>(midIDX.historyPageItems);
	}

	protected async internalStart() {
		await this.midIDX.init();
		let {uq, ID, IDX} = this.midIDX;
		let midIDXList = new MidIDXList(uq, ID, IDX);
		midIDXList.onItemClick = this.onItemClick;
		let cList = new CList(midIDXList);
		await cList.start();
	}

	item:any;
	onItemClick: (item:any) => void = async (item:any) => {
		this.item = item;
		await this.setTimeSpan('month');
		this.openVPage(VView);
	}

	onItemEdit = async ():Promise<void> => {
		this.openVPage(VEdit);
	}

	async setTimeSpan(span: 'day'|'week'|'month'|'year') {
		let timeSpan = TimeSpan.create(span);
		runInAction(async () => {
			this.timeSpan = timeSpan;
			await this.loadSum(timeSpan);
		});
	}

	private async loadSum(timeSpan?: TimeSpan) {
		let {far, near} = timeSpan ?? this.timeSpan;
		let ret = await this.midIDX.loadSum(this.item.id, far, near);
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		let [values, sums] = ret;
		let sum = sums[0];
		runInAction(() => {
			this.spanValues = sum ?? {};
		});
		await this.loadDayValues();
	}

	prevTimeSpan = async () => {
		this.timeSpan.prev();
		await this.loadSum();
	}

	nextTimeSpan = async () => {
		this.timeSpan.next();
		await this.loadSum();
	}

	get historyItems():PageItems<any> {return this.historyPageItems;}
	field:string;
	async onFieldHistory(field:string) {
		this.field = field;
		await this.midIDX.init();
		this.historyPageItems.first({
			id: this.item.id,
			far: this.timeSpan.far,
			near: this.timeSpan.near,
			field
		});
		this.openVPage(VHistory);
	}

	async loadDayValues() {
		let {far, near} = this.timeSpan;
		let ret = await this.midIDX.loadDayValues(this.item.id, this.field, far, near);
		let dayValues = this.timeSpan.getDayValues(ret);
		runInAction(() => {
			this.dayValues = dayValues;
		});
	}

	setCurrentField(field:string) {
		this.field = field;
		this.loadDayValues();
	}

	async saveFieldValue(field:string, t:number, value:number|string) {
		let {id} = this.item;
		await this.midIDX.saveFieldValue(id, field, t, value);
		let ret = await this.midIDX.loadFieldSum(id, field, this.timeSpan);
		let v= ret[field];
		this.spanValues[field] = v;
		return;
	}
}
