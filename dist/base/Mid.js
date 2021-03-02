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
exports.Mid = void 0;
var Mid = /** @class */ (function () {
    function Mid(uq, res) {
        this.uq = uq;
        this.res = res;
    }
    Mid.prototype.buildItemSchema = function (ID) {
        var ret = [];
        var fieldArr = ID.ui.fieldArr;
        for (var _i = 0, fieldArr_1 = fieldArr; _i < fieldArr_1.length; _i++) {
            var f = fieldArr_1[_i];
            var type = f.type, isKey = f.isKey;
            var required = isKey; // (keys as any[]).findIndex(v => v.name === name) >= 0;
            var fieldItem = __assign(__assign({}, f), { required: required });
            switch (type) {
                default:
                    ret.push(fieldItem);
                    break;
            }
        }
        ret.push({
            name: 'submit',
            type: 'submit',
        });
        return ret;
    };
    Mid.prototype.buildUISchema = function (ID) {
        var fields = ID.ui.fields;
        var items = __assign({}, fields);
        var uiButton = {
            label: '提交',
            className: 'btn btn-primary',
            widget: 'button',
        };
        items['submit'] = uiButton;
        var ret = { items: items };
        return ret;
    };
    return Mid;
}());
exports.Mid = Mid;
//# sourceMappingURL=Mid.js.map