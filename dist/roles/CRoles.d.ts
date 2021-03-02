import { Controller, Uq } from "tonva-react";
export declare class CRoles extends Controller {
    private uq;
    roles: string[];
    constructor(uq: Uq, res: any);
    protected internalStart(): Promise<void>;
    showRoleAdmin(): Promise<void>;
    private myRolesChanged;
}
