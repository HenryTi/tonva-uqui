import { Controller, Uq } from "tonva-react";
export interface UserRole {
    user: number;
    roles: boolean[];
    isDeleted?: boolean;
}
export declare class CRoleAdmin extends Controller {
    private readonly uq;
    private readonly uqApi;
    readonly allRoles: string[];
    readonly roleCaptions: string[];
    meRoles: UserRole;
    userRoles: UserRole[];
    ixOfUsers: string[];
    private myRolesChanged;
    constructor(res: any, uq: Uq, myRolesChanged?: (roles: string[]) => void, roleCaptionMap?: {
        [role: string]: string;
    });
    protected internalStart(): Promise<void>;
    setUserRole(checked: boolean, iRole: number, userRole: UserRole): Promise<void>;
    private fireMyRolesChanged;
    private buildRolesText;
    newUser(userName: string): Promise<string>;
    deleteUser(userRole: UserRole): Promise<void>;
    restoreUser(userRole: UserRole): Promise<void>;
    ixUserBind: (user: number, ixName: string) => Promise<void>;
}
