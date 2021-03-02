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
exports.VEdit = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var mobx_1 = require("mobx");
var mobx_react_1 = require("mobx-react");
var tonva_react_1 = require("tonva-react");
var VEdit = /** @class */ (function (_super) {
    __extends(VEdit, _super);
    function VEdit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VEdit.prototype.header = function () { return 'Edit'; };
    VEdit.prototype.content = function () {
        var _this = this;
        var mid = this.controller.mid;
        var props = mid.props;
        return jsx_runtime_1.jsx("div", __assign({ className: "py-3" }, { children: props.map(function (v, index) {
                var type = v.type;
                switch (type) {
                    default: return null;
                    case 'string':
                        return _this.renderStringProp(v);
                    case 'integer':
                    case 'number':
                        return _this.renderNumberProp(v);
                }
            }) }), void 0);
    };
    VEdit.prototype.renderStringProp = function (prop) {
        return jsx_runtime_1.jsx("div", __assign({ className: "px-3 py-2 bg-white mb-1 cursor-pointer" }, { children: JSON.stringify(prop) }), prop.name);
    };
    VEdit.prototype.renderNumberProp = function (prop) {
        var _this = this;
        var V = mobx_react_1.observer(function () {
            var name = prop.name;
            return jsx_runtime_1.jsx("div", __assign({ className: "px-3 py-2 bg-white mb-1 cursor-pointer", onClick: function () { return _this.openVPage(VEditNumberField, prop); } }, { children: jsx_runtime_1.jsx(tonva_react_1.LMR, __assign({ left: jsx_runtime_1.jsx("b", { children: prop.label }, void 0), right: jsx_runtime_1.jsx(tonva_react_1.FA, { name: "pencil-square-o", className: "align-self-center" }, void 0) }, { children: jsx_runtime_1.jsx("div", __assign({ className: "mr-5 text-right" }, { children: _this.controller.spanValues[name] }), void 0) }), void 0) }), name);
        });
        return jsx_runtime_1.jsx(V, {}, void 0);
    };
    return VEdit;
}(tonva_react_1.VPage));
exports.VEdit = VEdit;
var VEditNumberField = /** @class */ (function (_super) {
    __extends(VEditNumberField, _super);
    function VEditNumberField(controller) {
        var _this = _super.call(this, controller) || this;
        _this.disabled = true;
        _this.onValueChange = function (evt) {
            var v = evt.currentTarget.value.trim();
            _this.disabled = v.length === 0;
            var n = Number(v);
            if (Number.isNaN(n) === false)
                _this.value = n;
        };
        _this.onSave = function () { return __awaiter(_this, void 0, void 0, function () {
            var date, dateTicks, timeTicks, t, time;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        date = this.dateInput.valueAsDate;
                        dateTicks = this.dateInput.valueAsNumber;
                        timeTicks = this.timeInput.valueAsNumber;
                        t = dateTicks + timeTicks + date.getTimezoneOffset() * 60 * 1000;
                        time = new Date(t);
                        return [4 /*yield*/, this.controller.saveFieldValue(this.prop.name, t, this.value)];
                    case 1:
                        _a.sent();
                        this.closePage();
                        return [2 /*return*/];
                }
            });
        }); };
        mobx_1.makeObservable(_this, {
            disabled: mobx_1.observable
        });
        return _this;
    }
    VEditNumberField.prototype.init = function (prop) {
        this.prop = prop;
        this.date = new Date();
    };
    VEditNumberField.prototype.header = function () { return this.prop.label; };
    VEditNumberField.prototype.right = function () {
        var _this = this;
        var V = mobx_react_1.observer(function () { return jsx_runtime_1.jsx("button", __assign({ className: "btn btn-sm btn-success mr-2", disabled: _this.disabled, onClick: _this.onSave }, { children: _this.t('submit') }), void 0); });
        return jsx_runtime_1.jsx(V, {}, void 0);
    };
    VEditNumberField.prototype.content = function () {
        var _this = this;
        var time = this.prop.time;
        var year = this.date.getFullYear();
        var month = this.date.getMonth() + 1;
        var day = this.date.getDate();
        var hour = this.date.getHours();
        var minute = this.date.getMinutes();
        var defDate = year + "-" + tonva_react_1.left0(month, 2) + "-" + tonva_react_1.left0(day, 2);
        var vDateTime;
        if (time === true) {
            vDateTime = jsx_runtime_1.jsxs("div", __assign({ className: "input-group mb-3" }, { children: [jsx_runtime_1.jsx("span", __assign({ className: "w-8c input-group-text" }, { children: this.t('date') }), void 0),
                    jsx_runtime_1.jsx("input", { ref: function (d) { return _this.dateInput = d; }, type: "date", className: "form-control", defaultValue: defDate }, void 0),
                    jsx_runtime_1.jsx("input", { ref: function (t) { return _this.timeInput = t; }, type: "time", className: "form-control", defaultValue: tonva_react_1.left0(hour, 2) + ":" + tonva_react_1.left0(minute, 2) }, void 0)] }), void 0);
        }
        return jsx_runtime_1.jsxs("div", __assign({ className: "p-3" }, { children: [vDateTime, jsx_runtime_1.jsxs("div", __assign({ className: "input-group" }, { children: [jsx_runtime_1.jsx("span", __assign({ className: "w-8c input-group-text" }, { children: this.t('value') }), void 0),
                        jsx_runtime_1.jsx("input", { type: "number", className: "form-control", onChange: this.onValueChange }, void 0)] }), void 0)] }), void 0);
    };
    return VEditNumberField;
}(tonva_react_1.VPage));
//# sourceMappingURL=VEdit.js.map