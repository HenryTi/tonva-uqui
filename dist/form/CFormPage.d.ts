import { CFormView } from "./CFormView";
import { FormUI } from "./FormUI";
export declare class CFormPage<T> extends CFormView<T> {
    item: T;
    constructor(formUI: FormUI, item: T);
    protected internalStart(): Promise<void>;
}
