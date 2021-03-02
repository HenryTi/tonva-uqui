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
exports.VSelect = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var tonva_react_1 = require("tonva-react");
var VSelect = /** @class */ (function (_super) {
    __extends(VSelect, _super);
    function VSelect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VSelect.prototype.init = function () {
        var _a = this.controller, midTag = _a.midTag, itemTags = _a.itemTags;
        var typeColl = itemTags.typeColl;
        this.tagGroups = [];
        for (var _i = 0, _b = midTag.typeArr; _i < _b.length; _i++) {
            var midType = _b[_i];
            var id = midType.id, name_1 = midType.name;
            var type = typeColl[id];
            var checks = [];
            var tagGroup = { id: id, name: name_1, checks: checks };
            var _loop_1 = function (s) {
                var tagId = s.id;
                var selected = type === undefined ?
                    false
                    :
                        type.sub.findIndex(function (v) { return v.id === tagId; }) >= 0;
                checks.push({ tag: s, selected: selected });
            };
            for (var _c = 0, _d = midType.sub; _c < _d.length; _c++) {
                var s = _d[_c];
                _loop_1(s);
            }
            this.tagGroups.push(tagGroup);
        }
    };
    VSelect.prototype.header = function () { return 'select'; };
    VSelect.prototype.content = function () {
        var _this = this;
        var _a = this.controller, midTag = _a.midTag, itemTags = _a.itemTags;
        var item = itemTags.item;
        //let {tags} = midTag;
        return jsx_runtime_1.jsxs("div", __assign({ className: "px-3" }, { children: [jsx_runtime_1.jsx("div", __assign({ className: "my-3" }, { children: midTag.ID.render(item) }), void 0),
                this.tagGroups.map(function (v) { return _this.renderType(v); })] }), void 0);
    };
    VSelect.prototype.renderType = function (group) {
        var _this = this;
        var id = group.id, name = group.name, checks = group.checks;
        return jsx_runtime_1.jsxs("div", __assign({ className: "my-3" }, { children: [jsx_runtime_1.jsx("div", { children: jsx_runtime_1.jsx("b", { children: name }, void 0) }, void 0),
                jsx_runtime_1.jsx("div", __assign({ className: "form-check form-check-inline mt-1" }, { children: checks.map(function (v) {
                        var tag = v.tag, selected = v.selected;
                        var id = tag.id, name = tag.name;
                        return jsx_runtime_1.jsx(jsx_runtime_1.Fragment, { children: jsx_runtime_1.jsxs("label", __assign({ className: "form-check-label mr-3" }, { children: [jsx_runtime_1.jsx("input", { type: "checkbox", className: "form-check-input", onChange: function (evt) { return _this.controller.onTagSelectChanged(tag, evt.currentTarget.checked); }, defaultChecked: selected }, void 0), name] }), id) }, void 0);
                    }) }), void 0)] }), id);
    };
    return VSelect;
}(tonva_react_1.VPage));
exports.VSelect = VSelect;
//# sourceMappingURL=VSelect.js.map