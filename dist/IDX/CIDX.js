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
exports.CIDX = void 0;
var mobx_1 = require("mobx");
var tonva_react_1 = require("tonva-react");
var tools_1 = require("../tools");
var res_1 = require("./res");
var VEdit_1 = require("./VEdit");
var VHistory_1 = require("./VHistory");
var VView_1 = require("./VView");
var CIDX = /** @class */ (function (_super) {
    __extends(CIDX, _super);
    function CIDX(mid, res) {
        var _this = _super.call(this, res) || this;
        _this.onItemClick = function (item) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.item = item;
                        return [4 /*yield*/, this.setTimeSpan('month')];
                    case 1:
                        _a.sent();
                        this.openVPage(VView_1.VView);
                        return [2 /*return*/];
                }
            });
        }); };
        _this.onItemEdit = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.openVPage(VEdit_1.VEdit);
                return [2 /*return*/];
            });
        }); };
        _this.prevTimeSpan = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.timeSpan.prev();
                        return [4 /*yield*/, this.loadSum()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        _this.nextTimeSpan = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.timeSpan.next();
                        return [4 /*yield*/, this.loadSum()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        mobx_1.makeObservable(_this, {
            timeSpan: mobx_1.observable,
            spanValues: mobx_1.observable,
            dayValues: mobx_1.observable,
        });
        _this.mid = mid;
        _this.historyPageItems = new tools_1.HistoryPageItems(mid.historyPageItems);
        return _this;
    }
    CIDX.prototype.internalStart = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setRes(res_1.res);
                        return [4 /*yield*/, this.mid.init()];
                    case 1:
                        _a.sent();
                        this.onItemClick(item);
                        return [2 /*return*/];
                }
            });
        });
    };
    CIDX.prototype.setTimeSpan = function (span) {
        return __awaiter(this, void 0, void 0, function () {
            var timeSpan;
            var _this = this;
            return __generator(this, function (_a) {
                timeSpan = tools_1.TimeSpan.create(span);
                mobx_1.runInAction(function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                this.timeSpan = timeSpan;
                                return [4 /*yield*/, this.loadSum(timeSpan)];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    CIDX.prototype.loadSum = function (timeSpan) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, far, near, ret, values, sums, sum;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = timeSpan !== null && timeSpan !== void 0 ? timeSpan : this.timeSpan, far = _a.far, near = _a.near;
                        return [4 /*yield*/, this.mid.loadSum(this.item.id, far, near)];
                    case 1:
                        ret = _b.sent();
                        values = ret[0], sums = ret[1];
                        sum = sums[0];
                        mobx_1.runInAction(function () {
                            _this.spanValues = sum !== null && sum !== void 0 ? sum : {};
                        });
                        return [4 /*yield*/, this.loadDayValues()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(CIDX.prototype, "historyItems", {
        get: function () { return this.historyPageItems; },
        enumerable: false,
        configurable: true
    });
    CIDX.prototype.onFieldHistory = function (field) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.field = field;
                        return [4 /*yield*/, this.mid.init()];
                    case 1:
                        _a.sent();
                        this.historyPageItems.first({
                            id: this.item.id,
                            far: this.timeSpan.far,
                            near: this.timeSpan.near,
                            field: field
                        });
                        this.openVPage(VHistory_1.VHistory);
                        return [2 /*return*/];
                }
            });
        });
    };
    CIDX.prototype.loadDayValues = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, far, near, ret, dayValues;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.timeSpan, far = _a.far, near = _a.near;
                        return [4 /*yield*/, this.mid.loadDayValues(this.item.id, this.field, far, near)];
                    case 1:
                        ret = _b.sent();
                        dayValues = this.timeSpan.getDayValues(ret);
                        mobx_1.runInAction(function () {
                            _this.dayValues = dayValues;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    CIDX.prototype.setCurrentField = function (field) {
        this.field = field;
        this.loadDayValues();
    };
    CIDX.prototype.saveFieldValue = function (field, t, value) {
        return __awaiter(this, void 0, void 0, function () {
            var id, ret, v;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = this.item.id;
                        return [4 /*yield*/, this.mid.saveFieldValue(id, field, t, value)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.mid.loadFieldSum(id, field, this.timeSpan)];
                    case 2:
                        ret = _a.sent();
                        v = ret[field];
                        this.spanValues[field] = v;
                        return [2 /*return*/];
                }
            });
        });
    };
    return CIDX;
}(tonva_react_1.Controller));
exports.CIDX = CIDX;
//# sourceMappingURL=CIDX.js.map