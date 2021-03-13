import { observer } from "mobx-react";
import { FA, PropGrid, VPage } from "tonva-react";
import { CID } from "./CID";

export class VView extends VPage<CID<any>> {
	header() {return 'View'}
	right() {
		return <button
			className="btn btn-sm btn-primary mr-2" 
			onClick={() => this.controller.onItemEdit()}>
			<FA name="pencil-square-o" />
		</button>;
	}
	content() {
		let V = observer(() => {
			let {item, midID: mid} = this.controller;
			let {props} = mid;
			return <div className="py-3">
				<PropGrid rows={props}
					values={item} />
			</div>;	
		});
		return <V />;
	}
}
