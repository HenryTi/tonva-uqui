import { makeObservable, observable } from "mobx";
import { Controller } from "tonva-react";
import { createPickId } from "../select";
import { CForm, FormProps } from "../form";
import { Detail, Master } from "../base";
import { MidSheet } from "./MidSheet";

export abstract class CSheet<M extends Master, D extends Detail> extends Controller {
	readonly mid: MidSheet<M, D>;
	id: number;
	master: M = null;
	details: D[] = [];
	detail: D = null;

	constructor(mid: MidSheet<M, D>) {
		super(mid.res);
		makeObservable(this, {
			master: observable,
			details: observable,
		});
		this.mid = mid;
	}

	protected async load(id:number) {
		this.id = id;
		let [master, details] = await this.mid.load(id);
		this.master = master[0];
		this.details = details;
	}

	async saveSheet() {
		let ret = await this.mid.save(this.master, this.details);
		return ret;
	}
	
	afterMasterNew() {

	}

	private serial:number = 1;
	editDetail = async (detail: D) => {
		let {uq, detail:detailFormUI} = this.mid;
		let {ID, fields} = detailFormUI;
		let uiForm = new FormProps(ID.ui, fields);
		if (fields) {
			for (let i in fields) {
				let field = fields[i];
				let {ID} = field;
				if (ID) {
					uiForm.setIDUi(i, createPickId(uq, ID), ID.render);
				}
			}
		}
		uiForm.hideField('master', 'row');
		uiForm.onSubmit = async (values) => {
			let serial = values['#'];
			if (!serial) {
				values['#'] = this.serial++;
				this.details.push(values);
			}
			else {
				let index = this.details.findIndex(v => (v as any)['#'] === serial);
				if (index >= 0) {
					Object.assign(this.details[index], values);
				}
			}
			this.closePage();
			if (detail === undefined) {
				let cForm = new CForm(uiForm);
				await cForm.start(detail);
			}
		}
		let cForm = new CForm(uiForm);
		await cForm.start(detail);
	}
}
