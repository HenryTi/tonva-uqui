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
exports.MidIDTagList = exports.CIDTagList = void 0;
var list_1 = require("../list");
var tools_1 = require("../tools");
var select_1 = require("./select");
var parts_1 = require("./parts");
var mobx_1 = require("mobx");
var CIDTagList = /** @class */ (function (_super) {
    __extends(CIDTagList, _super);
    function CIDTagList(midIDTagList) {
        var _this = _super.call(this, midIDTagList) || this;
        _this.setRes(midIDTagList.res);
        _this.midIDTagList = midIDTagList;
        return _this;
    }
    CIDTagList.prototype.beforeStart = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.midIDTagList.midTag.init()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    CIDTagList.prototype.onItemClick = function (item) {
        var midTag = this.midIDTagList.midTag;
        var cSelect = new select_1.CSelect(this, item, midTag);
        cSelect.start();
    };
    CIDTagList.prototype.renderItem = function (itemTags, index) {
        return parts_1.renderItemTags(this.midIDTagList, itemTags, index);
    };
    CIDTagList.prototype.onTagSelectChanged = function (item, tag, selected) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.midIDTagList.onTagSelectChanged(item, tag, selected)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return CIDTagList;
}(list_1.CList));
exports.CIDTagList = CIDTagList;
var MidIDTagList = /** @class */ (function (_super) {
    __extends(MidIDTagList, _super);
    function MidIDTagList(midTag) {
        var _this = _super.call(this, midTag.uq, undefined) || this;
        _this.key = function (item) { return item.item.id; };
        _this.onTagSelectChanged = function (itemTags, tag, selected) { return __awaiter(_this, void 0, void 0, function () {
            var item, itemId, id, parent, ix, acts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        item = itemTags.item;
                        itemId = item.id;
                        id = tag.id, parent = tag.parent;
                        ix = { ix: undefined, id: id };
                        acts = {};
                        acts[this.midTag.tag.name] = [ix];
                        if (!(selected === true)) return [3 /*break*/, 2];
                        ix.id = itemId;
                        return [4 /*yield*/, this.uq.Acts(acts)];
                    case 1:
                        _a.sent();
                        this.addTag(itemTags, parent, id);
                        return [3 /*break*/, 4];
                    case 2:
                        ix.id = -itemId;
                        return [4 /*yield*/, this.uq.Acts(acts)];
                    case 3:
                        _a.sent();
                        this.delTag(itemTags, parent, id);
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        _this.midTag = midTag;
        _this.createPageItems();
        return _this;
    }
    MidIDTagList.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.midTag.IX.loadSchema()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MidIDTagList.prototype.createPageItems = function () {
        var _this = this;
        var listPageItems = new ItemTagsListPageItems(function (pageStart, pageSize) { return _this.loadPageItems(pageStart, pageSize); });
        return listPageItems;
    };
    MidIDTagList.prototype.loadPageItems = function (pageStart, pageSize) {
        return __awaiter(this, void 0, void 0, function () {
            var result, ret, ret2, itemTagsList, _i, ret_1, item, p, _a, ret2_1, tagItem, $xid, parent_1, id, itemTags;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.uq.IDxID({
                            ID: this.midTag.ID,
                            IX: this.midTag.IX,
                            ID2: this.midTag.tag,
                            page: { start: pageStart, size: pageSize },
                        })];
                    case 1:
                        result = _b.sent();
                        ret = result[0], ret2 = result[1];
                        itemTagsList = [];
                        this.itemTagsColl = {};
                        for (_i = 0, ret_1 = ret; _i < ret_1.length; _i++) {
                            item = ret_1[_i];
                            p = { item: item, typeArr: [], typeColl: {} };
                            this.itemTagsColl[item.id] = p;
                            itemTagsList.push(p);
                        }
                        for (_a = 0, ret2_1 = ret2; _a < ret2_1.length; _a++) {
                            tagItem = ret2_1[_a];
                            $xid = tagItem.$xid, parent_1 = tagItem.parent, id = tagItem.id;
                            itemTags = this.itemTagsColl[$xid];
                            this.addTag(itemTags, parent_1, id);
                            /*
                            let {typeColl, typeArr} = itemTags;
                            let type = typeColl[parent];
                            let midType = this.midTag.typeColl[parent];
                            if (type === undefined) {
                                type = {id:midType.id, name:midType.name, sub:[], parent:undefined};
                                typeColl[parent] = type;
                                typeArr.push(type);
                            }
                            type.sub.push(midType.sub.find(v => v.id === id));
                            */
                        }
                        return [2 /*return*/, itemTagsList];
                }
            });
        });
    };
    MidIDTagList.prototype.addTag = function (itemTags, typeId, tagId) {
        var typeColl = itemTags.typeColl, typeArr = itemTags.typeArr;
        var midType = this.midTag.typeColl[typeId];
        var type = typeColl[typeId];
        var tag = midType.sub.find(function (v) { return v.id === tagId; });
        if (type === undefined) {
            type = mobx_1.observable.object({ id: midType.id, name: midType.name, sub: [tag], parent: undefined });
            typeColl[typeId] = type;
            typeArr.push(type);
        }
        else {
            type.sub.push(tag);
        }
    };
    MidIDTagList.prototype.delTag = function (itemTags, typeId, tagId) {
        var typeColl = itemTags.typeColl, typeArr = itemTags.typeArr;
        var type = typeColl[typeId];
        if (type === undefined)
            return;
        var sub = type.sub;
        var index = sub.findIndex(function (v) { return v.id === tagId; });
        if (index < 0)
            return;
        sub.splice(index, 1);
        if (sub.length === 0) {
            var typeIndex = typeArr.findIndex(function (v) { return v.id === type.id; });
            if (typeIndex >= 0)
                typeArr.splice(typeIndex, 1);
            delete typeColl[typeId];
        }
    };
    return MidIDTagList;
}(list_1.MidList));
exports.MidIDTagList = MidIDTagList;
var ItemTagsListPageItems = /** @class */ (function (_super) {
    __extends(ItemTagsListPageItems, _super);
    function ItemTagsListPageItems() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ItemTagsListPageItems.prototype.itemId = function (item) { return item.item.id; };
    ItemTagsListPageItems.prototype.newItem = function (id, itemTags) {
        var item = itemTags.item, typeArr = itemTags.typeArr, typeColl = itemTags.typeColl;
        return {
            item: __assign(__assign({}, item), { id: id }),
            typeArr: typeArr,
            typeColl: typeColl,
        };
    };
    ItemTagsListPageItems.prototype.update = function (item) {
        return;
    };
    return ItemTagsListPageItems;
}(tools_1.ListPageItems));
//# sourceMappingURL=CIDTagList.js.map