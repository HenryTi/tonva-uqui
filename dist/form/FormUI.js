"use strict";
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
exports.FormUI = void 0;
var select_1 = require("../select");
var FormUI = /** @class */ (function () {
    function FormUI(ui, fieldCustoms, t) {
        var _a;
        this.t = t !== null && t !== void 0 ? t : (function (str) { return str; });
        var label = ui.label, fieldArr = ui.fieldArr, fields = ui.fields;
        this.label = label;
        this.fieldArr = [];
        this.fields = {};
        var _loop_1 = function (i) {
            var field = fields[i];
            var fieldCustom = fieldCustoms === null || fieldCustoms === void 0 ? void 0 : fieldCustoms[i];
            var index = fieldArr.findIndex(function (v) { return v === field; });
            var f = void 0;
            if (fieldCustom) {
                var label_1 = this_1.t((_a = fieldCustom.label) !== null && _a !== void 0 ? _a : field.label);
                f = __assign(__assign(__assign({}, field), fieldCustom), { label: label_1 });
                var ID_1 = field.ID;
                if (ID_1) {
                    var idField = f;
                    idField.widget = 'id';
                    idField.pickId = select_1.createPickId(ID_1.uq.proxy, ID_1);
                    idField.Templet = ID_1.render;
                }
            }
            else {
                var label_2 = this_1.t(field.label);
                f = __assign(__assign({}, field), { label: label_2 });
            }
            this_1.fields[i] = f;
            this_1.fieldArr[index] = f;
        };
        var this_1 = this;
        for (var i in fields) {
            _loop_1(i);
        }
        /*
        if (fieldCustoms) {
            for (let i in fieldCustoms) {
                let field = fieldCustoms[i];
                let {ID} = field;
                if (ID) {
                    this.setIDUi(i, createPickId(ID.uq.proxy, ID), ID.render);
                }
            }
        }
        */
    }
    FormUI.prototype.setIDUi = function (fieldName, pickId, render) {
        var field = this.fields[fieldName];
        if (field === undefined) {
            alert(fieldName + " not defined in UI");
            return;
        }
        if (field.type !== 'id') {
            alert(fieldName + " is not id UI");
            return;
        }
        var idField = field;
        idField.widget = 'id';
        idField.pickId = pickId;
        idField.Templet = render;
    };
    FormUI.prototype.setNO = function (ID, fieldName) {
        if (fieldName === void 0) { fieldName = 'no'; }
        return __awaiter(this, void 0, void 0, function () {
            var field, noField, no;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        field = this.fields[fieldName];
                        if (!field)
                            return [2 /*return*/];
                        if (field.type !== 'string')
                            return [2 /*return*/];
                        noField = field;
                        noField.readOnly = true;
                        return [4 /*yield*/, ID.NO()];
                    case 1:
                        no = _a.sent();
                        noField.defaultValue = no;
                        return [2 /*return*/];
                }
            });
        });
    };
    FormUI.prototype.hideField = function () {
        var fieldNames = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            fieldNames[_i] = arguments[_i];
        }
        var _loop_2 = function (fieldName) {
            var index = this_2.fieldArr.findIndex(function (v) { return v.name === fieldName; });
            if (index >= 0)
                this_2.fieldArr.splice(index, 1);
        };
        var this_2 = this;
        for (var _a = 0, fieldNames_1 = fieldNames; _a < fieldNames_1.length; _a++) {
            var fieldName = fieldNames_1[_a];
            _loop_2(fieldName);
        }
    };
    FormUI.prototype.setFieldChanged = function (fieldName, onChanged) {
        var field = this.fields[fieldName];
        if (field)
            field.onChanged = onChanged;
    };
    FormUI.prototype.setFieldChanging = function (fieldName, onChanging) {
        var field = this.fields[fieldName];
        if (field)
            field.onChanging = onChanging;
    };
    return FormUI;
}());
exports.FormUI = FormUI;
//# sourceMappingURL=FormUI.js.map