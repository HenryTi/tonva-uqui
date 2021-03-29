import { FieldItem, IDUI, IDXEntity, PickId, Prop, Schema, UiSchema, Uq } from "tonva-react";
export declare abstract class Mid {
    readonly uq: Uq;
    readonly res: any;
    constructor(uq: Uq, res?: any);
    abstract init(): Promise<void>;
    protected buildItemSchema(IDUI: IDUI): Promise<Schema>;
    protected buildUISchema(IDUI: IDUI): UiSchema;
    protected buildGridProps(IDX: IDXEntity<any>): Prop[];
    protected setIDUi(fieldItem: FieldItem, pickId: PickId, render: (values: any) => JSX.Element): void;
    protected setNO(no: string, noFieldItem: FieldItem): void;
}
