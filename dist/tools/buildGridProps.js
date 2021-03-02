"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildGridProps = void 0;
function buildGridProps(ui) {
    var ret = [];
    var fieldArr = ui.fieldArr;
    //let {keys, fields, exFields} = schema;
    for (var _i = 0, fieldArr_1 = fieldArr; _i < fieldArr_1.length; _i++) {
        var f = fieldArr_1[_i];
        var prop = __assign({}, f);
        ret.push(prop);
        /*
        let {name, type} = f;
        let required = (keys as any[])?.findIndex(v => v.name === name) >= 0;
        let ex = (exFields as any[])?.find(v => v.field === name);
        let time = ex?.time;
        switch (type) {
            default: throw new Error(`schema type ${type} not implemented`);
            case 'id':
                break;
            case 'char':
                ret.push({
                    name,
                    label: name,
                    type: 'string',
                } as StringProp);
                break;
            case 'tinyint':
            case 'smallint':
            case 'int':
            case 'bigint':
                ret.push({
                    name,
                    label: name,
                    type: 'number',
                    isInt: true,
                    time
                } as NumberProp);
                break;
            case 'dec':
                ret.push({
                    name,
                    label: name,
                    type: 'number',
                    isInt: false,
                    time
                } as NumberProp);
                break;
        }
        */
    }
    return ret;
}
exports.buildGridProps = buildGridProps;
//# sourceMappingURL=buildGridProps.js.map