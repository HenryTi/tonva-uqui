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
Object.defineProperty(exports, "__esModule", { value: true });
exports.VHistory = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var tonva_react_1 = require("tonva-react");
var VHistory = /** @class */ (function (_super) {
    __extends(VHistory, _super);
    function VHistory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderItem = function (item, index) {
            var t = item.t, v = item.v, u = item.u;
            var left = jsx_runtime_1.jsx("div", __assign({ className: "w-12c" }, { children: jsx_runtime_1.jsx(tonva_react_1.EasyTime, { date: new Date(t) }, void 0) }), void 0);
            var renderUser = function (user) {
                var name = user.name, nick = user.nick;
                return jsx_runtime_1.jsx("small", __assign({ className: "text-muted" }, { children: nick || name }), void 0);
            };
            var right = jsx_runtime_1.jsx(tonva_react_1.UserView, { user: u, render: renderUser }, void 0);
            return jsx_runtime_1.jsx("div", __assign({ className: "px-3 py-2" }, { children: jsx_runtime_1.jsx(tonva_react_1.LMR, __assign({ className: "w-100", left: left, right: right }, { children: v }), void 0) }), void 0);
        };
        return _this;
    }
    VHistory.prototype.header = function () { return this.controller.field; };
    VHistory.prototype.content = function () {
        return jsx_runtime_1.jsx("div", { children: jsx_runtime_1.jsx(tonva_react_1.List, { items: this.controller.historyItems, item: { render: this.renderItem, key: function (item) { return item.t; } } }, void 0) }, void 0);
    };
    return VHistory;
}(tonva_react_1.VPage));
exports.VHistory = VHistory;
//# sourceMappingURL=VHistory.js.map