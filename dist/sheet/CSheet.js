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
exports.CSheet = void 0;
var mobx_1 = require("mobx");
var tonva_react_1 = require("tonva-react");
var form_1 = require("../form");
var CSheet = /** @class */ (function (_super) {
    __extends(CSheet, _super);
    function CSheet(mid) {
        var _this = _super.call(this, mid.res) || this;
        _this.details = [];
        _this.serial = 1;
        _this.editDetail = function (detail) { return __awaiter(_this, void 0, void 0, function () {
            var _a, uq, detailFormUI, ID, fields, uiForm, i, field, ID_1, cForm;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.mid, uq = _a.uq, detailFormUI = _a.detail;
                        ID = detailFormUI.ID, fields = detailFormUI.fields;
                        uiForm = new form_1.FormProps(ID.ui, fields);
                        if (fields) {
                            for (i in fields) {
                                field = fields[i];
                                ID_1 = field.ID;
                                if (ID_1) {
                                    uiForm.setIDUi(i, form_1.createPickId(uq, ID_1), ID_1.render);
                                }
                            }
                        }
                        uiForm.hideField('master', 'row');
                        uiForm.onSubmit = function (values) { return __awaiter(_this, void 0, void 0, function () {
                            var serial, index, cForm_1;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        serial = values['#'];
                                        if (!serial) {
                                            values['#'] = this.serial++;
                                            this.details.push(values);
                                        }
                                        else {
                                            index = this.details.findIndex(function (v) { return v['#'] === serial; });
                                            if (index >= 0) {
                                                Object.assign(this.details[index], values);
                                            }
                                        }
                                        this.closePage();
                                        if (!(detail === undefined)) return [3 /*break*/, 2];
                                        cForm_1 = new form_1.CForm(uiForm);
                                        return [4 /*yield*/, cForm_1.start(detail)];
                                    case 1:
                                        _a.sent();
                                        _a.label = 2;
                                    case 2: return [2 /*return*/];
                                }
                            });
                        }); };
                        cForm = new form_1.CForm(uiForm);
                        return [4 /*yield*/, cForm.start(detail)];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        _this.mid = mid;
        mobx_1.makeObservable(_this, {
            master: mobx_1.observable,
            details: mobx_1.observable,
        });
        return _this;
    }
    CSheet.prototype.load = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, master, details;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.id = id;
                        return [4 /*yield*/, this.mid.load(id)];
                    case 1:
                        _a = _b.sent(), master = _a[0], details = _a[1];
                        this.master = master[0];
                        this.details = details;
                        return [2 /*return*/];
                }
            });
        });
    };
    CSheet.prototype.saveSheet = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.mid.save(this.master, this.details)];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    CSheet.prototype.afterMasterNew = function () {
    };
    return CSheet;
}(tonva_react_1.Controller));
exports.CSheet = CSheet;
//# sourceMappingURL=CSheet.js.map