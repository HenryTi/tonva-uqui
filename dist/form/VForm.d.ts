import { VPage } from "tonva-react";
import { CForm } from "./CForm";
export declare class VForm<C extends CForm<any>> extends VPage<C> {
    header(): string;
    protected get back(): 'close' | 'back' | 'none';
    content(): JSX.Element;
    private onSubmit;
}
