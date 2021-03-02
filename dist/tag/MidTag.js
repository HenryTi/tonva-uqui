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
exports.MidTag = void 0;
var base_1 = require("../base");
var MidTag = /** @class */ (function (_super) {
    __extends(MidTag, _super);
    function MidTag(uq, ID, IX, tag, type) {
        var _this = _super.call(this, uq) || this;
        _this.ID = ID;
        _this.IX = IX;
        _this.tag = tag;
        _this.type = type;
        return _this;
    }
    MidTag.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.typeArr)
                            return [2 /*return*/];
                        return [4 /*yield*/, Promise.all([
                                this.ID.loadSchema(),
                                this.IX.loadSchema(),
                                this.tag.loadSchema(),
                                this.uq.IDTree({
                                    ID: this.tag,
                                    parent: 0,
                                    key: this.type,
                                    level: 3,
                                    page: { start: 0, size: 1000 },
                                })
                            ])];
                    case 1:
                        ret = _a.sent();
                        this.buildTagTypes(ret[3]);
                        return [2 /*return*/];
                }
            });
        });
    };
    MidTag.prototype.buildTagTypes = function (items) {
        var root;
        var tree = { id: 0, parent: -1, name: undefined, sub: {}, count: 0 };
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            var id = item.id, parent_1 = item.parent, name_1 = item.name;
            if (parent_1 === 0) {
                tree.sub[id] = root = { id: id, parent: parent_1, name: name_1, sub: {}, count: 0 };
                continue;
            }
            var p = tree.sub[parent_1];
            var tag = { id: id, parent: parent_1, name: name_1, sub: {}, count: 0 };
            tree.sub[id] = tag;
            if (p !== undefined) {
                p.sub[id] = tag;
                p.count++;
            }
        }
        for (var i in tree.sub) {
            var tag = tree.sub[i];
            var parent_2 = tag.parent;
            if (parent_2 > 0) {
                var p = tree.sub[parent_2];
                if (p)
                    p.sub[Number(i)] = tag;
            }
        }
        this.typeArr = [];
        this.typeColl = {};
        for (var i in root.sub) {
            var tree_1 = root.sub[i];
            var id = tree_1.id, name_2 = tree_1.name;
            var type = { id: id, name: name_2, sub: [], parent: undefined };
            this.typeArr.push(type);
            this.typeColl[id] = type;
            for (var j in tree_1.sub) {
                var s = tree_1.sub[j];
                var id_1 = s.id, name_3 = s.name;
                type.sub.push({ id: id_1, name: name_3, sub: undefined, parent: type.id });
            }
        }
    };
    return MidTag;
}(base_1.Mid));
exports.MidTag = MidTag;
//# sourceMappingURL=MidTag.js.map