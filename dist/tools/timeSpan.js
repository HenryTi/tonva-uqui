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
exports.TimeSpan = void 0;
var tonva_react_1 = require("tonva-react");
var TimeSpan = /** @class */ (function () {
    function TimeSpan() {
    }
    TimeSpan.create = function (span) {
        var ret;
        switch (span) {
            case 'day':
                ret = new DaySpan();
                break;
            case 'week':
                ret = new WeekSpan();
                break;
            case 'month':
                ret = new MonthSpan();
                break;
            case 'year':
                ret = new YearSpan();
                break;
        }
        return ret;
    };
    Object.defineProperty(TimeSpan.prototype, "canNext", {
        get: function () {
            return this.near < this.firstNear;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimeSpan.prototype, "canPrev", {
        get: function () { return true; },
        enumerable: false,
        configurable: true
    });
    return TimeSpan;
}());
exports.TimeSpan = TimeSpan;
var DaySpan = /** @class */ (function (_super) {
    __extends(DaySpan, _super);
    function DaySpan() {
        var _this = _super.call(this) || this;
        _this._labels = [];
        _this.type = 'day';
        _this.date = new Date();
        _this.date.setHours(0, 0, 0, 0);
        _this.far = _this.date.getTime();
        _this.firstNear = _this.near = _this.far + 24 * 3600 * 1000;
        for (var i = 0; i < 24; i++)
            _this._labels.push(i + ':00');
        return _this;
    }
    DaySpan.prototype.prev = function () {
        this.far -= 24 * 3600 * 1000;
        this.near -= 24 * 3600 * 1000;
    };
    DaySpan.prototype.next = function () {
        this.far += 24 * 3600 * 1000;
        this.near += 24 * 3600 * 1000;
    };
    Object.defineProperty(DaySpan.prototype, "title", {
        get: function () {
            return this.date.toLocaleDateString();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DaySpan.prototype, "labels", {
        get: function () { return this._labels; },
        enumerable: false,
        configurable: true
    });
    return DaySpan;
}(TimeSpan));
var enWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
var zhWeek = ['一', '二', '三', '四', '五', '六', '日',];
var WeekSpan = /** @class */ (function (_super) {
    __extends(WeekSpan, _super);
    function WeekSpan() {
        var _this = _super.call(this) || this;
        _this.type = 'week';
        _this.firstDay = new Date();
        var day = _this.firstDay.getDay() || 7; // Get current day number, converting Sun. to 7
        if (day !== 1) { // Only manipulate the date if it isn't Mon.
            _this.firstDay.setHours(-24 * (day - 1)); // Set the hours to day number minus 1
        }
        _this.far = _this.firstDay.getTime();
        _this.firstNear = _this.near = _this.far + 7 * 24 * 3600 * 1000;
        _this.lastDay = new Date();
        _this.lastDay.setDate(_this.firstDay.getDate() + 7);
        switch (tonva_react_1.env.lang) {
            default:
            case 'en':
                _this._labels = enWeek;
                break;
            case 'zh':
                _this._labels = zhWeek;
                break;
        }
        return _this;
    }
    WeekSpan.prototype.prev = function () {
        this.firstDay.setDate(this.firstDay.getDate() - 7);
        this.lastDay.setDate(this.lastDay.getDate() - 7);
        this.far -= 7 * 24 * 3600 * 1000;
        this.near -= 7 * 24 * 3600 * 1000;
    };
    WeekSpan.prototype.next = function () {
        this.firstDay.setDate(this.firstDay.getDate() + 7);
        this.lastDay.setDate(this.lastDay.getDate() + 7);
        this.far += 7 * 24 * 3600 * 1000;
        this.near += 7 * 24 * 3600 * 1000;
    };
    Object.defineProperty(WeekSpan.prototype, "title", {
        get: function () {
            return this.firstDay.toLocaleDateString();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WeekSpan.prototype, "labels", {
        get: function () { return this._labels; },
        enumerable: false,
        configurable: true
    });
    return WeekSpan;
}(TimeSpan));
var MonthSpan = /** @class */ (function (_super) {
    __extends(MonthSpan, _super);
    function MonthSpan() {
        var _this = _super.call(this) || this;
        _this.type = 'month';
        var date = new Date();
        _this.initFromDate(date);
        _this.firstNear = _this.near;
        return _this;
    }
    MonthSpan.prototype.initFromDate = function (date) {
        var year = date.getFullYear(), month = date.getMonth();
        this.firstDay = new Date(year, month, 1);
        this.lastDay = new Date(year, month + 1, 0);
        this.far = this.firstDay.getTime();
        this.near = new Date(year, month + 1, 1).getTime();
        this._labels = [];
        var count = this.lastDay.getDate();
        for (var i = 1; i <= count; i++)
            this._labels.push(String(i));
    };
    MonthSpan.prototype.prev = function () {
        var date = new Date(this.firstDay.setMonth(this.firstDay.getMonth() - 1));
        this.initFromDate(date);
    };
    MonthSpan.prototype.next = function () {
        var date = new Date(this.firstDay.setMonth(this.firstDay.getMonth() + 1));
        this.initFromDate(date);
    };
    Object.defineProperty(MonthSpan.prototype, "title", {
        get: function () {
            return this.firstDay.toLocaleDateString();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MonthSpan.prototype, "labels", {
        get: function () { return this._labels; },
        enumerable: false,
        configurable: true
    });
    return MonthSpan;
}(TimeSpan));
var YearSpan = /** @class */ (function (_super) {
    __extends(YearSpan, _super);
    function YearSpan() {
        var _this = _super.call(this) || this;
        _this._labels = [];
        _this.type = 'year';
        var date = new Date();
        _this.initFromDate(date);
        _this.firstNear = _this.near;
        for (var i = 0; i <= 12; i++)
            _this._labels.push(String(i));
        return _this;
    }
    YearSpan.prototype.initFromDate = function (date) {
        var year = date.getFullYear(), month = 0;
        this.firstDay = new Date(year, month, 1);
        this.lastDay = new Date(year, month + 1, 0);
        this.far = this.firstDay.getTime();
        this.near = new Date(year, month + 1, 1).getTime();
    };
    YearSpan.prototype.prev = function () {
        var date = new Date(this.firstDay.setMonth(this.firstDay.getMonth() - 1));
        this.initFromDate(date);
    };
    YearSpan.prototype.next = function () {
        var date = new Date(this.firstDay.setMonth(this.firstDay.getMonth() + 1));
        this.initFromDate(date);
    };
    Object.defineProperty(YearSpan.prototype, "title", {
        get: function () {
            return this.firstDay.toLocaleDateString();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(YearSpan.prototype, "labels", {
        get: function () { return this._labels; },
        enumerable: false,
        configurable: true
    });
    return YearSpan;
}(TimeSpan));
//# sourceMappingURL=timeSpan.js.map