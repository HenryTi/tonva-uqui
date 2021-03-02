import { VPage } from "tonva-react";
import { CRoles } from "./CRoles";
export declare class VRoles extends VPage<CRoles> {
    private onRoleAdmin;
    private onAccountant;
    private onManager;
    private roleItems;
    header(): any;
    content(): JSX.Element;
    private renderRoleItem;
}
