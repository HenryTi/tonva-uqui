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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.CID = void 0;
var mobx_1 = require("mobx");
var tonva_react_1 = require("tonva-react");
var CIDList_1 = require("./CIDList");
var MidIDList_1 = require("./MidIDList");
var VEdit_1 = require("./VEdit");
var VView_1 = require("./VView");
var CID = /** @class */ (function (_super) {
    __extends(CID, _super);
    function CID(mid, res) {
        var _this = _super.call(this, res) || this;
        _this.onItemClick = function (item) {
            mobx_1.runInAction(function () {
                _this.item = item;
                _this.onItemView();
            });
        };
        _this.onItemEdit = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.mid.init()];
                    case 1:
                        _a.sent();
                        this.openVPage(VEdit_1.VEdit);
                        return [2 /*return*/];
                }
            });
        }); };
        mobx_1.makeObservable(_this, {
            item: mobx_1.observable,
        });
        _this.mid = mid;
        return _this;
    }
    CID.prototype.internalStart = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, uq, ID, midIDList;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.mid, uq = _a.uq, ID = _a.ID;
                        midIDList = new MidIDList_1.MidIDList(uq, ID);
                        midIDList.onRightClick = this.onItemEdit;
                        midIDList.renderItem = this.renderItem;
                        midIDList.onItemClick = this.onItemClick;
                        midIDList.renderRight = undefined;
                        this.idList = new CIDList_1.CIDList(midIDList);
                        return [4 /*yield*/, this.idList.start()];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CID.prototype.onItemView = function () {
        this.openVPage(VView_1.VView);
    };
    CID.prototype.onItemNew = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.item = undefined;
                        return [4 /*yield*/, this.mid.init()];
                    case 1:
                        _a.sent();
                        this.openVPage(VEdit_1.VEdit);
                        return [2 /*return*/];
                }
            });
        });
    };
    CID.prototype.saveID = function (itemProps) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var id, item, ret;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        id = (_a = this.item) === null || _a === void 0 ? void 0 : _a.id;
                        item = __assign(__assign({}, itemProps), { id: id });
                        return [4 /*yield*/, this.mid.saveID(item)];
                    case 1:
                        ret = _b.sent();
                        if (ret)
                            id = ret;
                        this.idList.update(id, item);
                        mobx_1.runInAction(function () {
                            if (_this.item)
                                Object.assign(_this.item, item);
                            else
                                _this.item = item;
                        });
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    return CID;
}(tonva_react_1.Controller));
exports.CID = CID;
//# sourceMappingURL=CID.js.map