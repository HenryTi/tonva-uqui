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
Object.defineProperty(exports, "__esModule", { value: true });
exports.VView = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var mobx_react_1 = require("mobx-react");
var tonva_react_1 = require("tonva-react");
var VView = /** @class */ (function (_super) {
    __extends(VView, _super);
    function VView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VView.prototype.header = function () { return 'View'; };
    VView.prototype.right = function () {
        var _this = this;
        return jsx_runtime_1.jsx("button", __assign({ className: "btn btn-sm btn-primary mr-2", onClick: function () { return _this.controller.onItemEdit(); } }, { children: jsx_runtime_1.jsx(tonva_react_1.FA, { name: "pencil-square-o" }, void 0) }), void 0);
    };
    VView.prototype.content = function () {
        var _this = this;
        var V = mobx_react_1.observer(function () {
            var _a = _this.controller, item = _a.item, mid = _a.midID;
            var props = mid.props;
            return jsx_runtime_1.jsx("div", __assign({ className: "py-3" }, { children: jsx_runtime_1.jsx(tonva_react_1.PropGrid, { rows: props, values: item }, void 0) }), void 0);
        });
        return jsx_runtime_1.jsx(V, {}, void 0);
    };
    return VView;
}(tonva_react_1.VPage));
exports.VView = VView;
//# sourceMappingURL=VView.js.map