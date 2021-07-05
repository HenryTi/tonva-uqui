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
exports.IDListPageItems = exports.MidIDListBase = exports.MidList = void 0;
var mobx_1 = require("mobx");
var tools_1 = require("../tools");
var base_1 = require("../base");
var MidList = /** @class */ (function (_super) {
    __extends(MidList, _super);
    function MidList(uq, res) {
        var _this = _super.call(this, uq, res) || this;
        _this.pageItems = _this.createPageItems();
        return _this;
    }
    MidList.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    return MidList;
}(base_1.Mid));
exports.MidList = MidList;
var MidIDListBase = /** @class */ (function (_super) {
    __extends(MidIDListBase, _super);
    function MidIDListBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.key = function (item) {
            return item.id;
        };
        return _this;
    }
    Object.defineProperty(MidIDListBase.prototype, "listPageItems", {
        get: function () { return this.pageItems; },
        enumerable: false,
        configurable: true
    });
    MidIDListBase.prototype.createPageItems = function () {
        var _this = this;
        var loader = function (pageStart, pageSize) { return _this.loadPageItems(pageStart, pageSize); };
        return new IDListPageItems(loader);
    };
    return MidIDListBase;
}(MidList));
exports.MidIDListBase = MidIDListBase;
var IDListPageItems = /** @class */ (function (_super) {
    __extends(IDListPageItems, _super);
    function IDListPageItems() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IDListPageItems.prototype.itemId = function (item) { return item.id; };
    IDListPageItems.prototype.newItem = function (id, item) { return __assign(__assign({}, item), { id: id }); };
    IDListPageItems.prototype.update = function (item) {
        var _this = this;
        var id = item.id;
        var ret = this._items.find(function (v) { return _this.itemId(v) === id; });
        if (ret === undefined) {
            var data = this.newItem(id, item);
            this._items.unshift(data);
        }
        else {
            mobx_1.runInAction(function () {
                Object.assign(ret, item);
            });
        }
        return;
    };
    return IDListPageItems;
}(tools_1.ListPageItems));
exports.IDListPageItems = IDListPageItems;
//# sourceMappingURL=MidList.js.map