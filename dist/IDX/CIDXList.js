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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CIDXList = void 0;
var list_1 = require("../list");
var CIDXList = /** @class */ (function (_super) {
    __extends(CIDXList, _super);
    function CIDXList(midIDList) {
        var _this = _super.call(this, midIDList) || this;
        _this.midIDList = midIDList;
        return _this;
    }
    CIDXList.prototype.renderItem = function (item, index) {
        var ID = this.midIDList.ID;
        if (ID)
            return ID.render(item);
        return _super.prototype.renderItem.call(this, item, index);
    };
    return CIDXList;
}(list_1.CList));
exports.CIDXList = CIDXList;
//# sourceMappingURL=CIDXList.js.map