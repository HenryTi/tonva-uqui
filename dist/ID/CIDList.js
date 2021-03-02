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
exports.CIDList = void 0;
var list_1 = require("../list");
/*
export interface IDListProps<T extends IDBase> {
    uq: Uq;
    ID: ID;
    onRightClick?: ()=>any;
    renderItem: (item:T, index:number)=>JSX.Element;
    onItemClick: (item:T)=>any;
    renderRight?: ()=>JSX.Element;
}
*/
var CIDList = /** @class */ (function (_super) {
    __extends(CIDList, _super);
    function CIDList(midIDList) {
        var _this = _super.call(this, midIDList) || this;
        _this.midIDList = midIDList;
        return _this;
    }
    CIDList.prototype.renderItem = function (item, index) {
        var ID = this.midIDList.ID;
        if (ID)
            return ID.render(item);
        return _super.prototype.renderItem.call(this, item, index);
    };
    CIDList.prototype.update = function (id, item) {
        this.midIDList.update(id, item);
    };
    return CIDList;
}(list_1.CList));
exports.CIDList = CIDList;
//# sourceMappingURL=CIDList.js.map