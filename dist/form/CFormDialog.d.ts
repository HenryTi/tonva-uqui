import { CFormPage } from "./CFormPage";
export declare class CFormDialog<T> extends CFormPage<T> {
    protected internalStart(): Promise<void>;
    close(): void;
    submit(data: any): Promise<void>;
}
