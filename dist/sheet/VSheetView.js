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
exports.VSheetView = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var tonva_react_1 = require("tonva-react");
var VSheetView = /** @class */ (function (_super) {
    __extends(VSheetView, _super);
    function VSheetView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VSheetView.prototype.header = function () { return this.controller.midSheet.master.ID.ui.label; };
    VSheetView.prototype.content = function () {
        var _a = this.controller, mid = _a.midSheet, master = _a.master;
        var ID = mid.master.ID;
        return jsx_runtime_1.jsx("div", __assign({ className: "p-3" }, { children: ID.render(master) }), void 0);
    };
    return VSheetView;
}(tonva_react_1.VPage));
exports.VSheetView = VSheetView;
//# sourceMappingURL=VSheetView.js.map