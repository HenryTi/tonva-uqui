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
exports.FormProps = void 0;
var FormProps = /** @class */ (function () {
    function FormProps(ui, exFields) {
        var label = ui.label, fieldArr = ui.fieldArr, fields = ui.fields;
        this.label = label;
        this.fieldArr = [];
        this.fields = {};
        var _loop_1 = function (i) {
            var field = fields[i];
            var exField = exFields === null || exFields === void 0 ? void 0 : exFields[i];
            var index = fieldArr.findIndex(function (v) { return v === field; });
            var f = __assign(__assign({}, field), exField);
            this_1.fields[i] = f;
            this_1.fieldArr[index] = f;
        };
        var this_1 = this;
        for (var i in fields) {
            _loop_1(i);
        }
    }
    FormProps.prototype.setDefaultIDUi = function (field, FieldID) {
    };
    FormProps.prototype.setIDUi = function (fieldName, pickId, render) {
        var field = this.fields[fieldName];
        if (field === undefined) {
            alert(fieldName + " not defined in UI");
            return;
        }
        if (field.type !== 'id') {
            alert(fieldName + " is not id UI");
            return;
        }
        var idField = field;
        idField.widget = 'id';
        idField.pickId = pickId;
        idField.Templet = render;
    };
    FormProps.prototype.setNO = function (no, fieldName) {
        if (fieldName === void 0) { fieldName = 'no'; }
        var field = this.fields[fieldName];
        if (!field)
            return;
        if (field.type !== 'string')
            return;
        var noField = field;
        noField.readOnly = true;
        noField.defaultValue = no;
    };
    FormProps.prototype.hideField = function () {
        var fieldNames = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            fieldNames[_i] = arguments[_i];
        }
        var _loop_2 = function (fieldName) {
            var index = this_2.fieldArr.findIndex(function (v) { return v.name === fieldName; });
            if (index >= 0)
                this_2.fieldArr.splice(index, 1);
        };
        var this_2 = this;
        for (var _a = 0, fieldNames_1 = fieldNames; _a < fieldNames_1.length; _a++) {
            var fieldName = fieldNames_1[_a];
            _loop_2(fieldName);
        }
    };
    FormProps.prototype.setFieldChanged = function (fieldName, onChanged) {
        var field = this.fields[fieldName];
        if (field)
            field.onChanged = onChanged;
    };
    FormProps.prototype.setFieldChanging = function (fieldName, onChanging) {
        var field = this.fields[fieldName];
        if (field)
            field.onChanging = onChanging;
    };
    return FormProps;
}());
exports.FormProps = FormProps;
//# sourceMappingURL=FormProps.js.map