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
exports.CForm = void 0;
var tonva_react_1 = require("tonva-react");
var VForm_1 = require("./VForm");
var CForm = /** @class */ (function (_super) {
    __extends(CForm, _super);
    function CForm(props, res) {
        var _this = _super.call(this, res) || this;
        var label = props.label, fieldArr = props.fieldArr, fields = props.fields, onSubmit = props.onSubmit, submitCaption = props.submitCaption;
        _this.schema = _this.buildItemSchema(fieldArr);
        _this.uiSchema = _this.buildUISchema(fields);
        _this.label = label;
        _this.submitCaption = submitCaption;
        _this.onSubmit = onSubmit;
        return _this;
    }
    CForm.prototype.internalStart = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.param = __assign({}, param);
                this.openVPage(VForm_1.VForm);
                return [2 /*return*/];
            });
        });
    };
    CForm.prototype.submit = function (data) {
        var _a;
        if (!this.param)
            this.param = {};
        Object.assign(this.param, data);
        //this.returnCall(param);
        (_a = this.onSubmit) === null || _a === void 0 ? void 0 : _a.call(this, this.param);
    };
    CForm.prototype.buildItemSchema = function (fieldArr) {
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
    CForm.prototype.buildUISchema = function (fields) {
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
    return CForm;
}(tonva_react_1.Controller));
exports.CForm = CForm;
//# sourceMappingURL=CForm.js.map