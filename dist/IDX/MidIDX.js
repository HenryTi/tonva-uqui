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
exports.MidIDX = void 0;
var tools_1 = require("../tools");
var base_1 = require("../base");
var MidIDX = /** @class */ (function (_super) {
    __extends(MidIDX, _super);
    function MidIDX(uq, IDX, ID, timeZone) {
        var _this = _super.call(this, uq) || this;
        _this.historyPageItems = function (id, field, far, near, pageStart, pageSize) { return __awaiter(_this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.uq.IDLog({
                            IDX: this.IDX,
                            field: field,
                            id: id,
                            log: 'each',
                            far: far,
                            near: near,
                            page: {
                                start: pageStart,
                                size: pageSize,
                            }
                        })];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        }); };
        _this.IDX = IDX;
        _this.ID = ID;
        _this.timeZone = timeZone;
        return _this;
    }
    MidIDX.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadSchema()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MidIDX.prototype.loadSchema = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var _b, exFields, _loop_1, _i, _c, prop;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, Promise.all([
                            this.IDX.loadSchema(),
                            this.ID.loadSchema(),
                        ])];
                    case 1:
                        _d.sent();
                        _b = this;
                        return [4 /*yield*/, this.buildItemSchema(this.ID)];
                    case 2:
                        _b._itemSchema = _d.sent();
                        this._uiSchema = this.buildUISchema(this.ID);
                        this._props = tools_1.buildGridProps(this.IDX.ui);
                        exFields = this.IDX.schema.exFields;
                        _loop_1 = function (prop) {
                            var name_1 = prop.name;
                            if (!name_1)
                                return "continue";
                            var ex = (_a = exFields) === null || _a === void 0 ? void 0 : _a.find(function (v) { return v.field === name_1; });
                            var time = ex === null || ex === void 0 ? void 0 : ex.time;
                            if (!time)
                                return "continue";
                            prop.time = time;
                        };
                        for (_i = 0, _c = this._props; _i < _c.length; _i++) {
                            prop = _c[_i];
                            _loop_1(prop);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    MidIDX.prototype.load = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.uq.ID({
                            IDX: [this.ID, this.IDX],
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
    MidIDX.prototype.saveID = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var param, ret, id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        param = {};
                        param[this.ID.name] = [data];
                        return [4 /*yield*/, this.uq.Acts(param)];
                    case 1:
                        ret = _a.sent();
                        id = ret[this.ID.name];
                        return [2 /*return*/, id[0]];
                }
            });
        });
    };
    MidIDX.prototype.saveFieldValue = function (id, fieldName, t, value) {
        return __awaiter(this, void 0, void 0, function () {
            var param, val, ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        param = {};
                        val = { id: id };
                        val[fieldName] = {
                            $time: t,
                            value: value,
                        };
                        param[this.IDX.name] = [val];
                        return [4 /*yield*/, this.uq.Acts(param)];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    MidIDX.prototype.loadFieldSum = function (id, field, timeSpan) {
        return __awaiter(this, void 0, void 0, function () {
            var far, near, retSum, ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        far = timeSpan.far, near = timeSpan.near;
                        return [4 /*yield*/, this.uq.IDSum({
                                IDX: this.IDX,
                                field: [field],
                                id: id,
                                far: far,
                                near: near,
                            })];
                    case 1:
                        retSum = _a.sent();
                        ret = retSum[0];
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    MidIDX.prototype.loadSum = function (id, far, near) {
        return __awaiter(this, void 0, void 0, function () {
            var valueFields, _a, fields, exFields, _loop_2, _i, exFields_1, ex;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        valueFields = [];
                        _a = this.IDX.schema, fields = _a.fields, exFields = _a.exFields;
                        if (exFields === undefined) {
                            throw new Error('no valid sum field in exFields');
                        }
                        _loop_2 = function (ex) {
                            var field = ex.field, log = ex.log;
                            if (log !== true)
                                return "continue";
                            var f = fields.find(function (v) { return v.name === field; });
                            if (f === undefined)
                                return "continue";
                            var name_2 = f.name, type = f.type;
                            if (['int', 'tinyint', 'smallint', 'bigint', 'dec'].indexOf(type) < 0)
                                return "continue";
                            valueFields.push(name_2);
                        };
                        for (_i = 0, exFields_1 = exFields; _i < exFields_1.length; _i++) {
                            ex = exFields_1[_i];
                            _loop_2(ex);
                        }
                        return [4 /*yield*/, Promise.all([
                                this.uq.ID({
                                    IDX: this.IDX,
                                    id: id,
                                }),
                                this.uq.IDSum({
                                    IDX: this.IDX,
                                    field: valueFields,
                                    id: id,
                                    far: far,
                                    near: near,
                                }),
                            ])];
                    case 1: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    MidIDX.prototype.loadDayValues = function (id, field, far, near) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!field) {
                            field = (_a = this._props[0]) === null || _a === void 0 ? void 0 : _a.name;
                            if (!field) {
                                debugger;
                                alert('no field in loadDayValues');
                            }
                        }
                        return [4 /*yield*/, this.uq.IDLog({
                                IDX: this.IDX,
                                field: field,
                                log: 'day',
                                timeZone: this.timeZone,
                                id: id,
                                far: far,
                                near: near,
                                page: {
                                    start: near,
                                    end: far,
                                    size: 100,
                                }
                            })];
                    case 1:
                        ret = _b.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    Object.defineProperty(MidIDX.prototype, "itemSchema", {
        get: function () { return this._itemSchema; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MidIDX.prototype, "uiSchema", {
        get: function () { return this._uiSchema; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MidIDX.prototype, "props", {
        get: function () { return this._props; },
        enumerable: false,
        configurable: true
    });
    return MidIDX;
}(base_1.Mid));
exports.MidIDX = MidIDX;
//# sourceMappingURL=MidIDX.js.map