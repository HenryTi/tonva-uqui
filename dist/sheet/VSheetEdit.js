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
exports.VSheetEdit = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var tonva_react_1 = require("tonva-react");
var VSheetEdit = /** @class */ (function (_super) {
    __extends(VSheetEdit, _super);
    function VSheetEdit() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onDetailClick = function (item) {
            _this.controller.editDetail(item);
        };
        _this.renderDetail = function (item, index) {
            return jsx_runtime_1.jsx("div", __assign({ className: "px-3 py-2" }, { children: _this.controller.midSheet.detail.ID.render(item) }), void 0);
        };
        //	{JSON.stringify(item)}
        _this.saveSheet = function () { return __awaiter(_this, void 0, void 0, function () {
            var ret;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.controller.saveSheet()];
                    case 1:
                        ret = _a.sent();
                        this.closePage();
                        this.openPageElement(jsx_runtime_1.jsx(tonva_react_1.Page, __assign({ header: "\u5355\u636E\u5B8C\u6210" }, { children: jsx_runtime_1.jsxs("div", __assign({ className: "p-3 text-center" }, { children: [jsx_runtime_1.jsx("div", __assign({ className: "my-3" }, { children: "\u5355\u636E\u4FDD\u5B58\u6210\u529F\uFF01" }), void 0), jsx_runtime_1.jsx("div", __assign({ className: "my-3" }, { children: ret.master }), void 0), jsx_runtime_1.jsx("button", __assign({ className: "btn btn-primary", onClick: function () { return _this.closePage(); } }, { children: "\u8FD4\u56DE" }), void 0)] }), void 0) }), void 0));
                        return [2 /*return*/];
                }
            });
        }); };
        return _this;
    }
    VSheetEdit.prototype.header = function () { return 'sheet'; };
    VSheetEdit.prototype.right = function () {
        return jsx_runtime_1.jsx("button", __assign({ className: "btn btn-primary btn-sm mr-2", onClick: this.saveSheet }, { children: "\u6574\u5355\u5B8C\u6210" }), void 0);
    };
    VSheetEdit.prototype.content = function () {
        var _this = this;
        var _a = this.controller, mid = _a.midSheet, master = _a.master, details = _a.details;
        var ID = mid.master.ID;
        var right = jsx_runtime_1.jsx("button", __assign({ className: "btn btn-success btn-sm", onClick: function () { return _this.controller.editDetail(undefined); } }, { children: jsx_runtime_1.jsx(tonva_react_1.FA, { name: "plus" }, void 0) }), void 0);
        return jsx_runtime_1.jsxs("div", __assign({ className: "my-3" }, { children: [jsx_runtime_1.jsx("div", __assign({ className: "p-3" }, { children: ID.render(master) }), void 0), jsx_runtime_1.jsx("div", __assign({ className: "mt-3 pb-1 mb-1 px-3 small text-muted border-bottom" }, { children: jsx_runtime_1.jsx(tonva_react_1.LMR, __assign({ right: right, className: "align-items-end" }, { children: "\u660E\u7EC6" }), void 0) }), void 0), jsx_runtime_1.jsx(tonva_react_1.List, { items: details, item: { render: this.renderDetail, onClick: this.onDetailClick } }, void 0)] }), void 0);
    };
    return VSheetEdit;
}(tonva_react_1.VPage));
exports.VSheetEdit = VSheetEdit;
//# sourceMappingURL=VSheetEdit.js.map