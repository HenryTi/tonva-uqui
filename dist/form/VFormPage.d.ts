import { VPage } from "tonva-react";
import { CFormPage } from "./CFormPage";
export declare class VFormPage<C extends CFormPage<any>> extends VPage<C> {
    header(): string | JSX.Element;
    protected get back(): 'close' | 'back' | 'none';
    content(): JSX.Element;
}
