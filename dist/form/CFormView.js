"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
exports.CFormView = void 0;
var tonva_react_1 = require("tonva-react");
var VFormView_1 = require("./VFormView");
var CFormView = /** @class */ (function (_super) {
    __extends(CFormView, _super);
    function CFormView(formUI) {
        var _this = _super.call(this) || this;
        var label = formUI.label, fieldArr = formUI.fieldArr, fields = formUI.fields, submitCaption = formUI.submitCaption, t = formUI.t;
        _this.t = t;
        _this.schema = _this.buildItemSchema(fieldArr);
        _this.uiSchema = _this.buildUISchema(fields);
        _this.label = t(label);
        _this.submitCaption = t(submitCaption);
        return _this;
    }
    CFormView.prototype.internalStart = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    CFormView.prototype.setNO = function (ID, fieldName) {
        if (fieldName === void 0) { fieldName = 'no'; }
        return __awaiter(this, void 0, void 0, function () {
            var field, noField, no, uiField;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        field = this.schema.find(function (v) { return v.name === fieldName; });
                        if (!field)
                            return [2 /*return*/];
                        if (field.type !== 'string')
                            return [2 /*return*/];
                        noField = field;
                        return [4 /*yield*/, ID.NO()];
                    case 1:
                        no = _a.sent();
                        noField.readOnly = true;
                        noField.defaultValue = no;
                        uiField = this.uiSchema.items[fieldName];
                        if (uiField) {
                            uiField.readOnly = true;
                            uiField.defaultValue = no;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    CFormView.prototype.submit = function (name, context) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, ((_a = this.onSubmit) === null || _a === void 0 ? void 0 : _a.call(this, name, context))];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CFormView.prototype.buildItemSchema = function (fieldArr) {
        var ret = [];
        for (var _i = 0, fieldArr_1 = fieldArr; _i < fieldArr_1.length; _i++) {
            var f = fieldArr_1[_i];
            var type = f.type, isKey = f.isKey;
            var required = isKey; // (keys as any[]).findIndex(v => v.name === name) >= 0;
            var fieldItem = __assign(__assign({}, f), { required: required });
            switch (type) {
                default:
                    ret.push(fieldItem);
                    break;
            }
        }
        ret.push({
            name: 'submit',
            type: 'submit',
        });
        return ret;
    };
    CFormView.prototype.buildUISchema = function (fields) {
        var _a;
        var items = __assign({}, fields);
        var uiButton = {
            label: (_a = this.submitCaption) !== null && _a !== void 0 ? _a : '提交',
            className: 'btn btn-primary',
            widget: 'button',
        };
        items['submit'] = uiButton;
        for (var i in fields) {
            var field = fields[i];
            var type = field.type;
            if (type === 'id') {
                var uiId = field;
                var pickId = uiId.pickId;
                if (pickId === undefined) {
                    var uiNumber = field;
                    uiNumber.widget = 'number';
                    uiNumber.placeholder = 'ID number, only on debugging';
                }
            }
        }
        var ret = { items: items };
        return ret;
    };
    CFormView.prototype.renderForm = function (item) {
        var v = new VFormView_1.VFormView(this);
        return v.render(item);
    };
    return CFormView;
}(tonva_react_1.Controller));
exports.CFormView = CFormView;
//# sourceMappingURL=CFormView.js.map