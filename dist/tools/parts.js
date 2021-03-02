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
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderItemContainer = exports.renderItem = exports.listRight = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var tonva_react_1 = require("tonva-react");
function listRight(onClick) {
    return jsx_runtime_1.jsx("button", __assign({ className: "btn btn-sm btn-success mr-2", onClick: onClick }, { children: jsx_runtime_1.jsx(tonva_react_1.FA, { name: "plus" }, void 0) }), void 0);
}
exports.listRight = listRight;
function renderItem(item, index) {
    return jsx_runtime_1.jsx(jsx_runtime_1.Fragment, { children: JSON.stringify(item) }, void 0);
}
exports.renderItem = renderItem;
function renderItemContainer(content) {
    return jsx_runtime_1.jsx("div", __assign({ className: "px-3 py-2" }, { children: content }), void 0);
}
exports.renderItemContainer = renderItemContainer;
//# sourceMappingURL=parts.js.map