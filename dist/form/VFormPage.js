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
exports.VFormPage = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var tonva_react_1 = require("tonva-react");
var VFormPage = /** @class */ (function (_super) {
    __extends(VFormPage, _super);
    function VFormPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VFormPage.prototype.header = function () { return this.controller.label; };
    Object.defineProperty(VFormPage.prototype, "back", {
        get: function () {
            return 'close';
        },
        enumerable: false,
        configurable: true
    });
    VFormPage.prototype.content = function () {
        /*let {param, schema, uiSchema} = this.controller;
        return <div className="p-3">
            <Form fieldLabelSize={2} formData={param}
                schema={schema}
                uiSchema={uiSchema}
                onButtonClick={this.onSubmit} />
        </div>*/
        return jsx_runtime_1.jsx("div", __assign({ className: "p-3" }, { children: this.controller.renderForm(this.controller.item) }), void 0);
    };
    return VFormPage;
}(tonva_react_1.VPage));
exports.VFormPage = VFormPage;
//# sourceMappingURL=VFormPage.js.map