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
exports.renderSelectItem = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
function renderSelectItem(onChange, content, defaultChecked) {
    return jsx_runtime_1.jsxs("label", __assign({ className: "mx-3 my-2 d-flex mb-0" }, { children: [jsx_runtime_1.jsx("input", { type: "checkbox", onChange: onChange, className: "mr-3", defaultChecked: defaultChecked }, void 0), content] }), void 0);
}
exports.renderSelectItem = renderSelectItem;
//# sourceMappingURL=parts.js.map