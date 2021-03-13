"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CRoles = void 0;
var tonva_react_1 = require("tonva-react");
var VRoles_1 = require("./VRoles");
var roleAdmin_1 = require("./roleAdmin");
var roleCaptionMap = {
    accountant: '会计',
    manager: '经理',
};
var CRoles = /** @class */ (function (_super) {
    __extends(CRoles, _super);
    function CRoles(uq) {
        var _this = _super.call(this) || this;
        _this.roles = null;
        _this.myRolesChanged = function (roles) {
            _this.roles = roles;
            _this.user.roles[_this.uq.$.name] = roles;
            tonva_react_1.nav.saveLocalUser();
        };
        _this.uq = uq;
        return _this;
    }
    CRoles.prototype.internalStart = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.uq.$.getRoles()];
                    case 1:
                        _a.roles = _b.sent();
                        this.openVPage(VRoles_1.VRoles);
                        return [2 /*return*/];
                }
            });
        });
    };
    CRoles.prototype.showRoleAdmin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var uqMan, allRoles, cRoleAdmin;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uqMan = this.uq.$;
                        allRoles = uqMan.allRoles;
                        if (!allRoles || allRoles.length === 0) {
                            alert("uq " + uqMan.name + " has not defined roles");
                            return [2 /*return*/];
                        }
                        cRoleAdmin = new roleAdmin_1.CRoleAdmin(this.uq, this.myRolesChanged, roleCaptionMap);
                        cRoleAdmin.setRes(this.getRes());
                        return [4 /*yield*/, cRoleAdmin.start()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return CRoles;
}(tonva_react_1.Controller));
exports.CRoles = CRoles;
//# sourceMappingURL=CRoles.js.map