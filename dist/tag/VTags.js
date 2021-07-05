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
exports.VTags = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var tonva_react_1 = require("tonva-react");
var VTags = /** @class */ (function (_super) {
    __extends(VTags, _super);
    function VTags() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tags = [];
        _this.allTags = function (selected) {
            var el = document.getElementById('$all$tags$');
            var checkInputs = el.getElementsByTagName('input');
            for (var i = 0; i < checkInputs.length; i++) {
                var checkInput = checkInputs[i];
                checkInput.checked = selected;
            }
        };
        return _this;
    }
    VTags.prototype.header = function () { return 'tags'; };
    VTags.prototype.content = function () {
        var _this = this;
        var midTag = this.controller.midTag;
        var typeArr = midTag.typeArr;
        var left = jsx_runtime_1.jsx("button", __assign({ className: "btn btn-primary", onClick: function () { return _this.controller.showID(_this.tags); } }, { children: "\u67E5\u770B" }), void 0);
        var right = jsx_runtime_1.jsxs(jsx_runtime_1.Fragment, { children: [jsx_runtime_1.jsx("button", __assign({ className: "btn btn-sm btn-outline-primary mr-3", onClick: function () { return _this.allTags(true); } }, { children: "\u5168\u9009" }), void 0), jsx_runtime_1.jsx("button", __assign({ className: "btn btn-sm btn-outline-info", onClick: function () { return _this.allTags(false); } }, { children: "\u5168\u6E05" }), void 0)] }, void 0);
        return jsx_runtime_1.jsxs("div", __assign({ className: "px-3", id: "$all$tags$" }, { children: [typeArr.map(function (v) { return _this.renderType(v); }), jsx_runtime_1.jsx("div", __assign({ className: "border-top py-3" }, { children: jsx_runtime_1.jsx(tonva_react_1.LMR, { left: left, right: right }, void 0) }), void 0)] }), void 0);
    };
    VTags.prototype.renderType = function (type) {
        var _this = this;
        var id = type.id, name = type.name, sub = type.sub;
        return jsx_runtime_1.jsxs("div", __assign({ className: "my-3" }, { children: [jsx_runtime_1.jsx("div", { children: jsx_runtime_1.jsx("b", { children: name }, void 0) }, void 0), jsx_runtime_1.jsx("div", __assign({ className: "form-check form-check-inline mt-1" }, { children: sub.map(function (v) {
                        var id = v.id, name = v.name;
                        return jsx_runtime_1.jsx(jsx_runtime_1.Fragment, { children: jsx_runtime_1.jsxs("label", __assign({ className: "form-check-label mr-3" }, { children: [jsx_runtime_1.jsx("input", { type: "checkbox", className: "form-check-input", onChange: function (evt) { return _this.onTagSelectChanged(evt, v); } }, void 0), name] }), id) }, void 0);
                    }) }), void 0)] }), id);
    };
    VTags.prototype.onTagSelectChanged = function (evt, tag) {
        if (evt.currentTarget.checked === true) {
            this.tags.push(tag);
        }
        else {
            var index = this.tags.findIndex(function (v) { return v === tag; });
            if (index >= 0)
                this.tags.splice(index, 1);
        }
    };
    return VTags;
}(tonva_react_1.VPage));
exports.VTags = VTags;
//# sourceMappingURL=VTags.js.map