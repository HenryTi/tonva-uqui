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
exports.MidTagIDList = exports.CTagIDList = void 0;
var tonva_react_1 = require("tonva-react");
var tools_1 = require("../tools");
var list_1 = require("../list");
var ID_1 = require("../ID");
var VTags_1 = require("./VTags");
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var CTagIDList = /** @class */ (function (_super) {
    __extends(CTagIDList, _super);
    function CTagIDList(midTag) {
        var _this = _super.call(this) || this;
        _this.setRes(midTag.res);
        _this.midTag = midTag;
        return _this;
    }
    CTagIDList.prototype.internalStart = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.midTag.init()];
                    case 1:
                        _a.sent();
                        this.openVPage(VTags_1.VTags);
                        return [2 /*return*/];
                }
            });
        });
    };
    CTagIDList.prototype.showID = function (tags) {
        return __awaiter(this, void 0, void 0, function () {
            var midIDList, cShowTagIDList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        midIDList = new MidTagIDList(this.midTag, tags.map(function (v) { return v.id; }));
                        cShowTagIDList = new CShowTagIDList(midIDList);
                        return [4 /*yield*/, cShowTagIDList.start()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return CTagIDList;
}(tonva_react_1.Controller));
exports.CTagIDList = CTagIDList;
var CShowTagIDList = /** @class */ (function (_super) {
    __extends(CShowTagIDList, _super);
    function CShowTagIDList(midIDList) {
        var _this = _super.call(this, midIDList) || this;
        _this.midIDList = midIDList;
        return _this;
    }
    CShowTagIDList.prototype.beforeStart = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.midIDList.midTag.init()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    CShowTagIDList.prototype.onItemClick = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var midTag, mid, cID;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        midTag = this.midIDList.midTag;
                        mid = new ID_1.MidID(midTag.uq, { ID: midTag.ID });
                        return [4 /*yield*/, mid.init()];
                    case 1:
                        _a.sent();
                        cID = new ID_1.CID(mid);
                        cID.onItemClick(item);
                        return [2 /*return*/];
                }
            });
        });
    };
    CShowTagIDList.prototype.renderRight = function () {
        var _a = this.midIDList, onRightClick = _a.onRightClick, renderRight = _a.renderRight;
        if (!onRightClick)
            return null;
        return (renderRight !== null && renderRight !== void 0 ? renderRight : tools_1.listRight)(onRightClick);
    };
    CShowTagIDList.prototype.renderItem = function (item, index) {
        var _a = this.midIDList, midTag = _a.midTag, renderItem = _a.renderItem;
        var ID = midTag.ID;
        //let {item, typeArr} = itemTags;
        return (renderItem !== null && renderItem !== void 0 ? renderItem : ID.render)(item, index);
        //return renderItemTags(this.props, itemTags, index);
    };
    return CShowTagIDList;
}(list_1.CList));
var MidTagIDList = /** @class */ (function (_super) {
    __extends(MidTagIDList, _super);
    function MidTagIDList(midTag, ids) {
        var _this = this;
        var uq = midTag.uq, ID = midTag.ID;
        _this = _super.call(this, uq, ID) || this;
        _this.ids = ids;
        return _this;
    }
    MidTagIDList.prototype.init = function () {
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
    MidTagIDList.prototype.loadPageItems = function (pageStart, pageSize) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.uq.IXr({
                            IX: this.midTag.IX,
                            IDX: [this.ID],
                            ix: this.ids,
                            page: { start: pageStart, size: pageSize },
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    return MidTagIDList;
}(ID_1.MidIDList));
exports.MidTagIDList = MidTagIDList;
//# sourceMappingURL=CTagIDList.js.map