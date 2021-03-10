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
exports.MidID = void 0;
var tools_1 = require("../tools");
var base_1 = require("../base");
var MidID = /** @class */ (function (_super) {
    __extends(MidID, _super);
    function MidID(uq, ID) {
        var _this = _super.call(this, uq) || this;
        _this.ID = ID;
        return _this;
    }
    MidID.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadSchema()];
                    case 1:
                        _b.sent();
                        _a = this;
                        return [4 /*yield*/, this.buildItemSchema(this.ID)];
                    case 2:
                        _a._itemSchema = _b.sent();
                        return [4 /*yield*/, this.setDefaultNo()];
                    case 3:
                        _b.sent();
                        this._uiSchema = this.buildUISchema(this.ID);
                        return [2 /*return*/];
                }
            });
        });
    };
    MidID.prototype.buildUISchema = function (ID) {
        var items = {};
        this._uiSchema = { items: items };
        var fields = ID.ui.fields;
        if (fields) {
            for (var _i = 0, _a = this._itemSchema; _i < _a.length; _i++) {
                var f = _a[_i];
                var name_1 = f.name;
                Object.assign(f, fields[name_1]);
                items[name_1] = f;
            }
        }
        var uiButton = {
            label: '提交',
            className: 'btn btn-primary',
            widget: 'button',
        };
        items['submit'] = uiButton;
        return this._uiSchema;
    };
    MidID.prototype.loadSchema = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ID.loadSchema()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MidID.prototype.load = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.uq.ID({
                            IDX: this.ID,
                            id: id,
                            page: undefined,
                        })];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    MidID.prototype.saveID = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var param, ret, id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        param = {};
                        param[this.ID.name] = [data];
                        return [4 /*yield*/, this.uq.IDActs(param)];
                    case 1:
                        ret = _a.sent();
                        id = ret[this.ID.name];
                        if (!id)
                            return [2 /*return*/];
                        return [2 /*return*/, id[0]];
                }
            });
        });
    };
    Object.defineProperty(MidID.prototype, "itemSchema", {
        get: function () {
            //if (this._itemSchema !== undefined) 
            return this._itemSchema;
            //return this._itemSchema = this.buildItemSchema(this.ID);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MidID.prototype, "uiSchema", {
        get: function () {
            //if (this._uiSchema !== undefined) 
            return this._uiSchema;
            //return this._uiSchema = this.buildUISchema(this.ID);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MidID.prototype, "props", {
        get: function () {
            if (this._props !== undefined)
                return this._props;
            return this._props = tools_1.buildGridProps(this.ID.ui);
        },
        enumerable: false,
        configurable: true
    });
    MidID.prototype.setDefaultNo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _i, _a, fieldItem, no;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _i = 0, _a = this._itemSchema;
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        fieldItem = _a[_i];
                        if (!(fieldItem.name === 'no')) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.uq.IDNO({ ID: this.ID })];
                    case 2:
                        no = _b.sent();
                        this.setNO(no, fieldItem);
                        _b.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return MidID;
}(base_1.Mid));
exports.MidID = MidID;
//# sourceMappingURL=MidID.js.map