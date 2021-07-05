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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MidIDSelectList = exports.CIDSelect = void 0;
var list_1 = require("../list");
var parts_1 = require("./parts");
var CIDSelect = /** @class */ (function (_super) {
    __extends(CIDSelect, _super);
    function CIDSelect(midIDSelectList) {
        var _this = _super.call(this, midIDSelectList) || this;
        _this.setRes(midIDSelectList.res);
        _this.midIDSelectList = midIDSelectList;
        return _this;
    }
    CIDSelect.prototype.createMidList = function () {
        return new MidIDSelectList(this.midIDSelectList.uq, this.midIDSelectList.ID);
    };
    CIDSelect.prototype.onItemClick = function (item) {
        return; //this.props.onItemClick(item);
    };
    CIDSelect.prototype.renderRight = function () {
        return null;
    };
    CIDSelect.prototype.renderItem = function (item, index) {
        var _this = this;
        var onChange = function (evt) {
            var onSelectChange = _this.midIDSelectList.onSelectChange;
            onSelectChange === null || onSelectChange === void 0 ? void 0 : onSelectChange(item, evt.currentTarget.checked);
        };
        var _a = this.midIDSelectList, renderItem = _a.renderItem, ID = _a.ID;
        var content = (renderItem !== null && renderItem !== void 0 ? renderItem : ID.render)(item, index);
        var $in = item.$in;
        return parts_1.renderSelectItem(onChange, content, $in === 1);
    };
    return CIDSelect;
}(list_1.CList));
exports.CIDSelect = CIDSelect;
var MidIDSelectList = /** @class */ (function (_super) {
    __extends(MidIDSelectList, _super);
    function MidIDSelectList(uq, ID) {
        var _this = _super.call(this, uq) || this;
        _this.key = function (item) { return item.id; };
        _this.ID = ID;
        return _this;
    }
    MidIDSelectList.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ID.loadSchema()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MidIDSelectList.prototype.createPageItems = function () {
        var _this = this;
        var listPageItems = new list_1.IDListPageItems(function (pageStart, pageSize) { return _this.loadPageItems(pageStart, pageSize); });
        return listPageItems;
    };
    MidIDSelectList.prototype.loadPageItems = function (pageStart, pageSize) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.uq.ID({
                            IDX: this.ID,
                            id: undefined,
                            page: { start: pageStart, size: pageSize },
                        })];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    return MidIDSelectList;
}(list_1.MidList));
exports.MidIDSelectList = MidIDSelectList;
//# sourceMappingURL=CIDSelect.js.map