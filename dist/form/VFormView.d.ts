import { View } from "tonva-react";
import { CFormView } from "./CFormView";
export declare class VFormView<C extends CFormView<any>> extends View<C> {
    render(param: any): JSX.Element;
    private onSubmit;
}
