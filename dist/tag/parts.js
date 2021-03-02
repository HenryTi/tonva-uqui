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
exports.renderItemTags = exports.renderRight = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var mobx_react_1 = require("mobx-react");
var tonva_react_1 = require("tonva-react");
function renderRight(onClick) {
    return jsx_runtime_1.jsx("button", __assign({ className: "btn btn-sm btn-primary mr-2", onClick: onClick }, { children: jsx_runtime_1.jsx(tonva_react_1.FA, { name: "plus" }, void 0) }), void 0);
}
exports.renderRight = renderRight;
function renderItemTags(midIDTagList, itemTags, index) {
    var V = mobx_react_1.observer(function () {
        var midTag = midIDTagList.midTag, renderItem = midIDTagList.renderItem, renderTags = midIDTagList.renderTags;
        //let {renderItem} = midTag;
        var ID = midTag.ID;
        var item = itemTags.item, typeArr = itemTags.typeArr;
        return jsx_runtime_1.jsxs("div", __assign({ className: "d-block" }, { children: [jsx_runtime_1.jsx("div", { children: (renderItem !== null && renderItem !== void 0 ? renderItem : ID.render)(item, index) }, void 0),
                jsx_runtime_1.jsx("div", __assign({ className: "text-muted mt-1" }, { children: (renderTags !== null && renderTags !== void 0 ? renderTags : defaultRenderTags)(typeArr) }), void 0)] }), void 0);
    });
    return jsx_runtime_1.jsx(V, {}, void 0);
}
exports.renderItemTags = renderItemTags;
function defaultRenderTags(typeArr) {
    return jsx_runtime_1.jsx(jsx_runtime_1.Fragment, { children: typeArr.map(function (type) {
            var id = type.id, name = type.name;
            return jsx_runtime_1.jsxs("span", __assign({ className: "mr-3" }, { children: [jsx_runtime_1.jsx("b", { children: name }, void 0), ": ", renderType(type)] }), id);
        }) }, void 0);
}
function renderType(type) {
    var V = mobx_react_1.observer(function () {
        var sub = type.sub;
        return jsx_runtime_1.jsx(jsx_runtime_1.Fragment, { children: sub.map(function (tag) {
                var id = tag.id, name = tag.name;
                return jsx_runtime_1.jsx("span", __assign({ className: "mr-1" }, { children: name }), id);
            }) }, void 0);
    });
    return jsx_runtime_1.jsx(V, {}, void 0);
}
//# sourceMappingURL=parts.js.map