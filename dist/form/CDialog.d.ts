import { CForm } from "./CForm";
export declare class CDialog<T> extends CForm<T> {
    protected internalStart(param: T): Promise<void>;
    close(): void;
    submit(data: any): void;
}
