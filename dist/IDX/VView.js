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
exports.VView = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var mobx_1 = require("mobx");
var mobx_react_1 = require("mobx-react");
var react_chartjs_2_1 = require("react-chartjs-2");
var tonva_react_1 = require("tonva-react");
var spans = ['week', 'month'];
var graphOptions = {
    title: {
        display: false,
    },
    maintainAspectRatio: false,
};
var VView = /** @class */ (function (_super) {
    __extends(VView, _super);
    function VView(controller) {
        var _this = _super.call(this, controller) || this;
        _this.currentIndex = 0;
        mobx_1.makeObservable(_this, {
            currentIndex: mobx_1.observable,
        });
        return _this;
    }
    VView.prototype.header = function () { return 'View'; };
    VView.prototype.right = function () {
        var _this = this;
        return jsx_runtime_1.jsx("button", __assign({ className: "btn btn-sm btn-primary mr-2", onClick: function () { return _this.controller.onItemEdit(); } }, { children: jsx_runtime_1.jsx(tonva_react_1.FA, { name: "pencil-square-o" }, void 0) }), void 0);
    };
    VView.prototype.content = function () {
        var _this = this;
        var V = mobx_react_1.observer(function () {
            var _a = _this.controller, spanValues = _a.spanValues, midIDX = _a.midIDX, timeSpan = _a.timeSpan, prevTimeSpan = _a.prevTimeSpan, nextTimeSpan = _a.nextTimeSpan, dayValues = _a.dayValues;
            if (spanValues === null)
                return null;
            var props = midIDX.props;
            var data = {
                labels: timeSpan.labels,
                datasets: [{
                        label: '',
                        data: mobx_1.toJS(dayValues),
                        backgroundColor: 'lightgreen',
                        borderWidth: 1
                    }],
            };
            var curProp = props[_this.currentIndex];
            var label = curProp.label, name = curProp.name;
            var moveStep = function (icon, spanStep) { return jsx_runtime_1.jsx("div", __assign({ className: 'p-3 ' + (spanStep ? 'cursor-pointer' : 'text-muted'), onClick: spanStep }, { children: jsx_runtime_1.jsx(tonva_react_1.FA, { name: icon }, void 0) }), void 0); };
            var left = moveStep('chevron-left', prevTimeSpan);
            var right = timeSpan.canNext === true ?
                moveStep('chevron-right', nextTimeSpan)
                :
                    moveStep('square-o', undefined);
            //<div><FA className="text-muted" name="square-o" /></div>;
            return jsx_runtime_1.jsxs("div", __assign({ className: "py-3" }, { children: [jsx_runtime_1.jsx("div", __assign({ className: "container" }, { children: jsx_runtime_1.jsx("div", __assign({ className: "row" }, { children: spans.map(function (v) {
                                var cn = 'col text-center p-2 cursor-pointer ';
                                var style = {
                                    borderBottomWidth: '0.15rem',
                                    borderBottomStyle: 'solid',
                                };
                                if (_this.controller.timeSpan.type === v) {
                                    cn += 'text-primary font-weight-bold';
                                    style.borderBottomColor = 'blue';
                                }
                                else {
                                    cn += 'text-muted';
                                    style.borderBottomColor = 'lightgray';
                                }
                                return jsx_runtime_1.jsx("div", __assign({ className: cn, style: style, onClick: function () { return _this.tabClick(v); } }, { children: _this.t(v) }), v);
                            }) }), void 0) }), void 0), jsx_runtime_1.jsx(tonva_react_1.LMR, __assign({ className: "text-center align-items-center", left: left, right: right }, { children: timeSpan.title }), void 0), jsx_runtime_1.jsxs("div", __assign({ className: "mt-3 mx-3 text-center cursor-pointer", onClick: function () { return _this.onFieldHistory(name); } }, { children: [jsx_runtime_1.jsx("h4", __assign({ className: "d-inline" }, { children: label }), void 0), jsx_runtime_1.jsxs("span", __assign({ className: "text-info small" }, { children: [" ", jsx_runtime_1.jsx(tonva_react_1.FA, { name: "angle-double-right" }, void 0), " \u67E5\u770B\u660E\u7EC6"] }), void 0)] }), void 0), jsx_runtime_1.jsx("div", __assign({ className: "p-3 h-12c" }, { children: jsx_runtime_1.jsx(react_chartjs_2_1.Bar, { data: data, width: 100, height: 50, options: graphOptions }, void 0) }), void 0), jsx_runtime_1.jsx("div", __assign({ className: "d-flex flex-wrap p-1" }, { children: props.map(function (v, index) {
                            var _a = v, name = _a.name, label = _a.label;
                            var sv = spanValues[name];
                            var val = sv ?
                                jsx_runtime_1.jsx("b", __assign({ className: "h3 mb-0" }, { children: sv }), void 0)
                                :
                                    jsx_runtime_1.jsx("small", __assign({ className: "text-muted" }, { children: "0" }), void 0);
                            var cn = 'm-1 w-8c h-8c d-flex flex-column align-items-center justify-content-center bg-white px-3 cursor-pointer border rounded ';
                            cn += (index === _this.currentIndex) ? ' border-primary' : ' ';
                            return jsx_runtime_1.jsxs("div", __assign({ className: cn, onClick: function () { return _this.onFieldClick(v, index); } }, { children: [jsx_runtime_1.jsx("div", __assign({ className: "my-3 h-4c d-flex align-items-center" }, { children: val }), void 0), jsx_runtime_1.jsx("div", __assign({ className: "mb-3" }, { children: label }), void 0)] }), index);
                        }) }), void 0)] }), void 0);
        });
        return jsx_runtime_1.jsx(V, {}, void 0);
    };
    VView.prototype.tabClick = function (span) {
        this.controller.setTimeSpan(span);
    };
    VView.prototype.onFieldClick = function (prop, index) {
        return __awaiter(this, void 0, void 0, function () {
            var midIDX, props, curProp, name_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        midIDX = this.controller.midIDX;
                        props = midIDX.props;
                        if (!(this.currentIndex === index)) return [3 /*break*/, 2];
                        curProp = props[this.currentIndex];
                        name_1 = curProp.name;
                        return [4 /*yield*/, this.controller.onFieldHistory(name_1)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                    case 2:
                        mobx_1.runInAction(function () {
                            _this.currentIndex = index;
                            var curProp = props[_this.currentIndex];
                            var name = curProp.name;
                            _this.controller.setCurrentField(name);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    VView.prototype.onFieldHistory = function (field) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.controller.onFieldHistory(field)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return VView;
}(tonva_react_1.VPage));
exports.VView = VView;
//# sourceMappingURL=VView.js.map