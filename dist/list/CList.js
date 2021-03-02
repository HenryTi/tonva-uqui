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
exports.CList = void 0;
var tonva_react_1 = require("tonva-react");
var tools_1 = require("../tools");
var ListPage_1 = require("./ListPage");
var CList = /** @class */ (function (_super) {
    __extends(CList, _super);
    function CList(midList) {
        var _this = _super.call(this, midList.res) || this;
        _this.midList = midList;
        return _this;
    }
    CList.prototype.internalStart = function () {
        return __awaiter(this, void 0, void 0, function () {
            var pageItems, props, page;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.midList.init()];
                    case 1:
                        _a.sent();
                        pageItems = this.midList.createPageItems();
                        props = {
                            header: this.header,
                            pageItems: pageItems,
                            key: this.midList.key,
                            itemClick: function (item) { return _this.onItemClick(item); },
                            right: this.renderRight(),
                            renderItem: function (item, index) { return _this.renderItem(item, index); },
                            renderItemContainer: function (content) { return _this.renderItemContainer(content); },
                        };
                        pageItems.first(this.firstParam);
                        page = new ListPage_1.ListPage(props);
                        this.openPage(page.render());
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(CList.prototype, "firstParam", {
        get: function () { return undefined; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CList.prototype, "header", {
        get: function () { return 'List'; },
        enumerable: false,
        configurable: true
    });
    CList.prototype.renderItemContainer = function (content) {
        return tools_1.renderItemContainer(content);
    };
    CList.prototype.onItemClick = function (item) {
        this.midList.onItemClick(item);
    };
    CList.prototype.renderRight = function () {
        var _a = this.midList, renderRight = _a.renderRight, onRightClick = _a.onRightClick;
        return (renderRight !== null && renderRight !== void 0 ? renderRight : tools_1.listRight)(onRightClick);
    };
    CList.prototype.renderItem = function (item, index) {
        var _a;
        return ((_a = this.midList.renderItem) !== null && _a !== void 0 ? _a : tools_1.renderItem)(item, index);
    };
    return CList;
}(tonva_react_1.Controller));
exports.CList = CList;
//# sourceMappingURL=CList.js.map