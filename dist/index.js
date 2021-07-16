'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var createStore = require('unistore');
var devtools = require('unistore/devtools');
var react = require('unistore/react');
var hotFormulaParser = require('hot-formula-parser');
var classnames = require('classnames');
var flatMap = require('array.prototype.flatmap');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var createStore__default = /*#__PURE__*/_interopDefaultLegacy(createStore);
var devtools__default = /*#__PURE__*/_interopDefaultLegacy(devtools);
var classnames__default = /*#__PURE__*/_interopDefaultLegacy(classnames);
var flatMap__default = /*#__PURE__*/_interopDefaultLegacy(flatMap);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
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
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/**
 * Interface for ranges between two points
 */
/** Creates a normalized range between two given points */
function create(source, target) {
    return {
        start: {
            row: Math.min(source.row, target.row),
            column: Math.min(source.column, target.column),
        },
        end: {
            row: Math.max(source.row, target.row),
            column: Math.max(source.column, target.column),
        },
    };
}
/** Iterates through all the existing points in given range */
function iterate(range) {
    var row, column;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                row = range.start.row;
                _a.label = 1;
            case 1:
                if (!(row <= range.end.row)) return [3 /*break*/, 6];
                column = range.start.column;
                _a.label = 2;
            case 2:
                if (!(column <= range.end.column)) return [3 /*break*/, 5];
                return [4 /*yield*/, { row: row, column: column }];
            case 3:
                _a.sent();
                _a.label = 4;
            case 4:
                column++;
                return [3 /*break*/, 2];
            case 5:
                row++;
                return [3 /*break*/, 1];
            case 6: return [2 /*return*/];
        }
    });
}
/** Returns the size (rows x columns) of the given range */
function size(range) {
    var rows = range.end.row + 1 - range.start.row;
    var columns = range.end.column + 1 - range.start.column;
    return rows * columns;
}
/** Returns whether given point exists in given range */
function has(range, point) {
    return (point.row >= range.start.row &&
        point.column >= range.start.column &&
        point.row <= range.end.row &&
        point.column <= range.end.column);
}
/** Limits given masked range with given mask */
function mask(masked, mask) {
    return {
        start: {
            row: mask.start.row > masked.start.row ? mask.start.row : masked.start.row,
            column: mask.start.column > masked.start.column
                ? mask.start.column
                : masked.start.column,
        },
        end: {
            row: mask.end.row < masked.end.row ? mask.end.row : masked.end.row,
            column: mask.end.column < masked.end.column
                ? mask.end.column
                : masked.end.column,
        },
    };
}

/** Sets the value for point in map */
function set(point, value, map) {
    var _a, _b;
    return __assign(__assign({}, map), (_a = {}, _a[point.row] = __assign(__assign({}, map[point.row]), (_b = {}, _b[point.column] = value, _b)), _a));
}
/** Gets the value for point in map */
function get(point, map) {
    return map[point.row] && map[point.row][point.column];
}
/** Checks if map has point assigned to value */
function has$1(point, map) {
    return point.row in map && point.column in map[point.row];
}
var EMPTY = {};
/** Creates a new PointMap instance from an array-like or iterable object. */
function from(pairs) {
    return pairs.reduce(function (acc, _a) {
        var _b = __read(_a, 2), point = _b[0], value = _b[1];
        return set(point, value, acc);
    }, EMPTY);
}
/** Creates a new PointMap instance from a Matrix. */
function fromMatrix(matrix) {
    return matrix.reduce(function (rowAcc, data, row) {
        return data.reduce(function (colAcc, cell, column) {
            return cell ? set({ row: row, column: column }, cell, colAcc) : colAcc;
        }, rowAcc);
    }, EMPTY);
}
/** Returns the number of elements in a PointMap object. */
function size$1(map) {
    var acc = 0;
    var _map_keys = Object.keys(map);
    for (var i = 0; i < _map_keys.length; i++) {
        var row = Number(_map_keys[i]);
        var columns = map[row];
        acc += Object.keys(columns).length;
    }
    return acc;
}
/** Applies a function against an accumulator and each value and point in the map (from left to right) to reduce it to a single value */
function reduce(func, map, initialValue) {
    var acc = initialValue;
    var _map_keys = Object.keys(map);
    for (var i = 0; i < _map_keys.length; i++) {
        var row = Number(_map_keys[i]);
        var columns = map[row];
        var _columns_keys = Object.keys(columns);
        for (var j = 0; j < _columns_keys.length; j++) {
            var column = Number(_columns_keys[j]);
            var value = columns[column];
            acc = func(acc, value, { row: row, column: column });
        }
    }
    return acc;
}
/** Creates a new map with the results of calling a provided function on every value in the calling map */
function map(func, map) {
    return reduce(function (acc, value, point) { return set(point, func(value), acc); }, map, from([]));
}
/** Creates a new map of all values predicate returns truthy for. The predicate is invoked with two arguments: (value, key) */
function filter(predicate, map) {
    return reduce(function (acc, value, point) {
        if (predicate(value, point)) {
            return set(point, value, acc);
        }
        return acc;
    }, map, from([]));
}

/**
 * Immutable Set like interface of points
 */
/** Appends a new point to the Set object */
var add = function (set$1, point) {
    return set(point, true, set$1);
};
/** Returns a boolean asserting whether an point is present with the given value in the Set object or not */
var has$2 = function (set, point) {
    return has$1(point, set);
};
/** Returns the number of points in a PointSet object */
var size$2 = function (set) { return size$1(set); };
/** Applies a function against an accumulator and each point in the set (from left to right) to reduce it to a single value */
function reduce$1(func, set, initialValue) {
    return reduce(function (acc, _, point) { return func(acc, point); }, set, initialValue);
}
/** Creates a new set with all points that pass the test implemented by the provided function */
function filter$1(func, set) {
    return filter(function (_, point) { return func(point); }, set);
}
var minKey = function (object) {
    // @ts-ignore
    return Math.min.apply(Math, __spread(Object.keys(object)));
};
/** Returns the point on the minimal row in the minimal column in the set */
function min(set) {
    var row = minKey(set);
    return { row: row, column: minKey(set[row]) };
}
/** Creates a new PointSet instance from an array-like or iterable object */
function from$1(points) {
    return points.reduce(add, from([]));
}
var NO_EDGE = {
    left: false,
    right: false,
    top: false,
    bottom: false,
};
function onEdge(set, point) {
    if (!has$2(set, point)) {
        return NO_EDGE;
    }
    var hasNot = function (rowDelta, columnDelta) {
        return !has$2(set, {
            row: point.row + rowDelta,
            column: point.column + columnDelta,
        });
    };
    return {
        left: hasNot(0, -1),
        right: hasNot(0, 1),
        top: hasNot(-1, 0),
        bottom: hasNot(1, 0),
    };
}

/**
 * Immutable interface for Matrices
 *
 * @todo use Types.Point for all point references
 */
/** Gets the value at row and column of matrix. */
function get$1(row, column, matrix) {
    var columns = matrix[row];
    if (columns === undefined) {
        return undefined;
    }
    return columns[column];
}
/** Creates a slice of matrix from startPoint up to, but not including, endPoint. */
function slice(startPoint, endPoint, matrix) {
    var sliced = [];
    var columns = endPoint.column - startPoint.column;
    for (var row = startPoint.row; row <= endPoint.row; row++) {
        var slicedRow = row - startPoint.row;
        sliced[slicedRow] = sliced[slicedRow] || Array(columns);
        for (var column = startPoint.column; column <= endPoint.column; column++) {
            sliced[slicedRow][column - startPoint.column] = get$1(row, column, matrix);
        }
    }
    return sliced;
}
/** Sets the value at row and column of matrix. If a row doesn't exist, it's created. */
function set$1(row, column, value, matrix) {
    var nextMatrix = __spread(matrix);
    // Synchronize first row length
    var firstRow = matrix[0];
    var nextFirstRow = firstRow ? __spread(firstRow) : [];
    if (nextFirstRow.length - 1 < column) {
        nextFirstRow[column] = undefined;
        nextMatrix[0] = nextFirstRow;
    }
    var nextRow = matrix[row] ? __spread(matrix[row]) : [];
    nextRow[column] = value;
    nextMatrix[row] = nextRow;
    return nextMatrix;
}
/** Like Matrix.set() but mutates the matrix */
function mutableSet(row, column, value, matrix) {
    var firstRow = matrix[0];
    if (!firstRow) {
        firstRow = [];
        matrix[0] = firstRow;
    }
    if (!(row in matrix)) {
        matrix[row] = [];
    }
    // Synchronize first row length
    if (!(column in firstRow)) {
        firstRow[column] = undefined;
    }
    matrix[row][column] = value;
}
/** Removes the coordinate of matrix */
function unset(row, column, matrix) {
    if (!has$3(row, column, matrix)) {
        return matrix;
    }
    var nextMatrix = __spread(matrix);
    var nextRow = __spread(matrix[row]);
    // Avoid deleting to preserve first row length
    nextRow[column] = undefined;
    nextMatrix[row] = nextRow;
    return nextMatrix;
}
/** Creates an array of values by running each element in collection thru iteratee. */
function map$1(func, matrix) {
    var e_1, _a, e_2, _b;
    var newMatrix = [];
    try {
        for (var _c = __values(matrix.entries()), _d = _c.next(); !_d.done; _d = _c.next()) {
            var _e = __read(_d.value, 2), row = _e[0], values = _e[1];
            try {
                for (var _f = (e_2 = void 0, __values(values.entries())), _g = _f.next(); !_g.done; _g = _f.next()) {
                    var _h = __read(_g.value, 2), column = _h[0], value = _h[1];
                    var point = { row: row, column: column };
                    mutableSet(row, column, func(value, point), newMatrix);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_g && !_g.done && (_b = _f["return"])) _b.call(_f);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_a = _c["return"])) _a.call(_c);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return newMatrix;
}
/**
 * Converts all elements in row into a string separated by horizontalSeparator and each row string
 * to string separated by verticalSeparator
 */
function join(matrix, horizontalSeparator, verticalSeparator) {
    if (horizontalSeparator === void 0) { horizontalSeparator = "\t"; }
    if (verticalSeparator === void 0) { verticalSeparator = "\n"; }
    var joined = "";
    var _a = getSize(matrix), rows = _a.rows, columns = _a.columns;
    for (var row = 0; row < rows; row++) {
        if (row) {
            joined += verticalSeparator;
        }
        for (var column = 0; column < columns; column++) {
            if (column) {
                joined += horizontalSeparator;
            }
            if (matrix[row] && column in matrix[row]) {
                joined += String(matrix[row][column]);
            }
        }
    }
    return joined;
}
/**
 * Parses a CSV separated by a horizontalSeparator and verticalSeparator into a
 * Matrix using a transform function
 */
function split(csv, transform, horizontalSeparator) {
    if (horizontalSeparator === void 0) { horizontalSeparator = "\t"; }
    var verticalSeparator = /\r\n|\n|\r/;
    return csv
        .replace(new RegExp('(' + verticalSeparator.source + ')$'), '') // delete trailing new line character
        .split(verticalSeparator)
        .map(function (row) { return row.split(horizontalSeparator).map(transform); });
}
/** Returns whether the point exists in the matrix or not. */
function has$3(row, column, matrix) {
    var firstRow = matrix[0];
    return (firstRow &&
        // validation
        row >= 0 &&
        column >= 0 &&
        Number.isInteger(row) &&
        Number.isInteger(column) &&
        // first row length is in sync with other rows
        column < firstRow.length &&
        row < matrix.length);
}
/** Gets the size of matrix by returning its number of rows and columns */
function getSize(matrix) {
    var firstRow = matrix[0];
    return {
        columns: firstRow ? firstRow.length : 0,
        rows: matrix.length,
    };
}
/**
 * Pads matrix with empty rows to match given total rows
 * @param matrix matrix to pad
 * @param totalRows number of rows the matrix should have
 * @returns the updated matrix
 */
function padRows(matrix, totalRows) {
    var _a = getSize(matrix), rows = _a.rows, columns = _a.columns;
    if (rows >= totalRows) {
        return matrix;
    }
    var missingRows = totalRows - rows;
    var emptyRow = Array(columns).fill(undefined);
    var emptyRows = Array(missingRows).fill(emptyRow);
    return __spread(matrix, emptyRows);
}
/**
 * Flattens a matrix values to an array
 * @param matrix the matrix to flatten values from
 * @param transform optional transform function to apply to each value in the
 * matrix
 * @returns an array of the values from matrix, transformed if a transform
 * function is passed
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function toArray(matrix, transform) {
    var array = [];
    for (var row = 0; row < matrix.length; row++) {
        for (var column = 0; column < matrix.length; column++) {
            var value = matrix[row][column];
            array.push(transform ? transform(value, { row: row, column: column }) : value);
        }
    }
    return array;
}

var moveCursorToEnd = function (el) {
    el.selectionStart = el.selectionEnd = el.value.length;
};
function memoizeOne(fn) {
    var lastArgument;
    var lastResult;
    return function (argument) {
        if (lastArgument !== argument) {
            lastArgument = argument;
            // @ts-ignore
            lastResult = fn.call(this, argument);
        }
        return lastResult;
    };
}
/**
 * Creates an array of numbers (positive and/or negative) progressing from start up to, but not including, end. A step of -1 is used if a negative start is specified without an end or step. If end is not specified, it's set to start with start then set to 0.
 * @param end
 * @param start
 * @param step
 */
function range(end, start, step) {
    if (start === void 0) { start = 0; }
    if (step === void 0) { step = 1; }
    var array = [];
    if (Math.sign(end - start) === -1) {
        for (var element = start; element > end; element -= step) {
            array.push(element);
        }
        return array;
    }
    for (var element = start; element < end; element += step) {
        array.push(element);
    }
    return array;
}
function updateData(data, cellDescriptor) {
    var row = data[cellDescriptor.row];
    var nextData = __spread(data);
    var nextRow = row ? __spread(row) : [];
    nextRow[cellDescriptor.column] = cellDescriptor.data;
    nextData[cellDescriptor.row] = nextRow;
    return nextData;
}
function isActive(active, _a) {
    var row = _a.row, column = _a.column;
    return Boolean(active && column === active.column && row === active.row);
}
var getOffsetRect = function (element) { return ({
    width: element.offsetWidth,
    height: element.offsetHeight,
    left: element.offsetLeft,
    top: element.offsetTop,
}); };
var writeTextToClipboard = function (event, data) {
    if (event.clipboardData) {
        event.clipboardData.setData("text/plain", data);
    }
};
var readTextFromClipboard = function (event) {
    // @ts-ignore
    if (window.clipboardData && window.clipboardData.getData) {
        // @ts-ignore
        return window.clipboardData.getData("Text");
    }
    if (event.clipboardData && event.clipboardData.getData) {
        return event.clipboardData.getData("text/plain");
    }
    return "";
};
function createEmptyMatrix(rows, columns) {
    return range(rows).map(function () { return Array(columns); });
}
var getCellDimensions = function (point, state) {
    var rowDimensions = state.rowDimensions[point.row];
    var columnDimensions = state.columnDimensions[point.column];
    return (rowDimensions &&
        columnDimensions && __assign(__assign({}, rowDimensions), columnDimensions));
};
/** Get the dimensions of a range of cells */
function getRangeDimensions(state, range) {
    var startDimensions = getCellDimensions(range.start, state);
    var endDimensions = getCellDimensions(range.end, state);
    if (!startDimensions || !endDimensions) {
        return null;
    }
    return {
        width: endDimensions.left + endDimensions.width - startDimensions.left,
        height: endDimensions.top + endDimensions.height - startDimensions.top,
        top: startDimensions.top,
        left: startDimensions.left,
    };
}
function getComputedValue(_a) {
    var cell = _a.cell, formulaParser = _a.formulaParser;
    if (cell === undefined) {
        return null;
    }
    var rawValue = cell.value;
    if (typeof rawValue === "string" && rawValue.startsWith("=")) {
        var _b = formulaParser.parse(rawValue.slice(1)), result = _b.result, error = _b.error;
        return error || result;
    }
    return rawValue;
}
function normalizeSelected(selected, data) {
    var dataSize = getSize(data);
    var dataRange = create({ row: 0, column: 0 }, { row: dataSize.rows - 1, column: dataSize.columns - 1 });
    return selected && mask(selected, dataRange);
}
function getSelectedCSV(selected, data) {
    if (!selected) {
        return "";
    }
    var slicedMatrix = slice(selected.start, selected.end, data);
    var valueMatrix = map$1(function (cell) { return (cell === null || cell === void 0 ? void 0 : cell.value) || ""; }, slicedMatrix);
    return join(valueMatrix);
}

var Direction;
(function (Direction) {
    Direction["Left"] = "Left";
    Direction["Right"] = "Right";
    Direction["Top"] = "Top";
    Direction["Down"] = "Down";
})(Direction || (Direction = {}));
var setData = function (state, data) {
    var nextActive = state.active && has$3(state.active.row, state.active.column, data)
        ? state.active
        : null;
    var nextSelected = normalizeSelected(state.selected, data);
    var nextBindings = map(function (bindings) {
        return filter$1(function (point) { return has$3(point.row, point.column, data); }, bindings);
    }, filter(function (_, point) { return has$3(point.row, point.column, data); }, state.bindings));
    return {
        data: data,
        active: nextActive,
        selected: nextSelected,
        bindings: nextBindings,
    };
};
var select = function (state, cellPointer) {
    if (state.active && !isActive(state.active, cellPointer)) {
        return {
            selected: create(cellPointer, state.active),
            mode: "view",
        };
    }
    return null;
};
var activate = function (state, cellPointer) { return ({
    selected: create(cellPointer, cellPointer),
    active: cellPointer,
    mode: isActive(state.active, cellPointer) ? "edit" : "view",
}); };
function setCellData(state, active, data, bindings) {
    if (isActiveReadOnly(state)) {
        return null;
    }
    return {
        mode: "edit",
        data: updateData(state.data, __assign(__assign({}, active), { data: data })),
        lastChanged: active,
        bindings: set(active, from$1(bindings), state.bindings),
    };
}
function setCellDimensions(state, point, dimensions) {
    var _a, _b;
    var prevRowDimensions = state.rowDimensions[point.row];
    var prevColumnDimensions = state.columnDimensions[point.column];
    if (prevRowDimensions &&
        prevColumnDimensions &&
        prevRowDimensions.top === dimensions.top &&
        prevRowDimensions.height === dimensions.height &&
        prevColumnDimensions.left === dimensions.left &&
        prevColumnDimensions.width === dimensions.width) {
        return null;
    }
    return {
        rowDimensions: __assign(__assign({}, state.rowDimensions), (_a = {}, _a[point.row] = { top: dimensions.top, height: dimensions.height }, _a)),
        columnDimensions: __assign(__assign({}, state.columnDimensions), (_b = {}, _b[point.column] = { left: dimensions.left, width: dimensions.width }, _b)),
    };
}
function copy(state) {
    var selectedPoints = state.selected
        ? Array.from(iterate(state.selected))
        : [];
    return {
        copied: selectedPoints.reduce(function (acc, point) {
            var value = get$1(point.row, point.column, state.data);
            return value === undefined ? acc : set(point, value, acc);
        }, from([])),
        cut: false,
        hasPasted: false,
    };
}
function cut(state) {
    return __assign(__assign({}, copy(state)), { cut: true });
}
function paste(state, text) {
    return __awaiter(this, void 0, void 0, function () {
        var active, copiedMatrix, copied, minPoint, copiedSize, requiredRows, paddedData, _a, data, commit;
        return __generator(this, function (_b) {
            active = state.active;
            if (!active) {
                return [2 /*return*/, null];
            }
            copiedMatrix = split(text, function (value) { return ({ value: value }); });
            copied = fromMatrix(copiedMatrix);
            minPoint = min(copied);
            copiedSize = getSize(copiedMatrix);
            requiredRows = active.row + copiedSize.rows;
            paddedData = padRows(state.data, requiredRows);
            _a = reduce(function (acc, value, _a) {
                var row = _a.row, column = _a.column;
                var commit = acc.commit || [];
                var nextRow = row - minPoint.row + active.row;
                var nextColumn = column - minPoint.column + active.column;
                var nextData = state.cut
                    ? unset(row, column, acc.data)
                    : acc.data;
                if (state.cut) {
                    commit = __spread(commit, [{ prevCell: value, nextCell: null }]);
                }
                if (!has$3(nextRow, nextColumn, paddedData)) {
                    return { data: nextData, commit: commit };
                }
                var currentValue = get$1(nextRow, nextColumn, nextData) || null;
                commit = __spread(commit, [
                    {
                        prevCell: currentValue,
                        nextCell: value,
                    },
                ]);
                return {
                    data: set$1(nextRow, nextColumn, __assign(__assign({}, currentValue), value), nextData),
                    commit: commit,
                };
            }, copied, { data: paddedData, commit: [] }), data = _a.data, commit = _a.commit;
            return [2 /*return*/, {
                    data: data,
                    selected: create(active, {
                        row: active.row + copiedSize.rows - 1,
                        column: active.column + copiedSize.columns - 1,
                    }),
                    cut: false,
                    hasPasted: true,
                    mode: "view",
                    lastCommit: commit,
                }];
        });
    });
}
var edit = function (state) {
    if (isActiveReadOnly(state)) {
        return null;
    }
    return { mode: "edit" };
};
var view = function () { return ({
    mode: "view",
}); };
var clear = function (state) {
    if (!state.active) {
        return null;
    }
    var selectedPoints = state.selected
        ? Array.from(iterate(state.selected))
        : [];
    var changes = selectedPoints.map(function (point) {
        var cell = get$1(point.row, point.column, state.data);
        return {
            prevCell: cell || null,
            nextCell: null,
        };
    });
    return __assign({ data: selectedPoints.reduce(function (acc, point) {
            return updateData(acc, __assign(__assign({}, point), { data: undefined }));
        }, state.data) }, commit(state, changes));
};
var go = function (rowDelta, columnDelta) { return function (state) {
    if (!state.active) {
        return null;
    }
    var nextActive = {
        row: state.active.row + rowDelta,
        column: state.active.column + columnDelta,
    };
    if (!has$3(nextActive.row, nextActive.column, state.data)) {
        return { mode: "view" };
    }
    return {
        active: nextActive,
        selected: create(nextActive, nextActive),
        mode: "view",
    };
}; };
var modifyEdge = function (edge) { return function (state) {
    var _a, _b, _c;
    var active = state.active, selected = state.selected;
    if (!active || !selected) {
        return null;
    }
    var field = edge === Direction.Left || edge === Direction.Right ? "column" : "row";
    var key = edge === Direction.Left || edge === Direction.Top ? "start" : "end";
    var delta = key === "start" ? -1 : 1;
    var edgeOffsets = has(selected, __assign(__assign({}, active), (_a = {}, _a[field] = active[field] + delta * -1, _a)));
    var keyToModify = edgeOffsets ? (key === "start" ? "end" : "start") : key;
    var nextSelected = __assign(__assign({}, selected), (_b = {}, _b[keyToModify] = __assign(__assign({}, selected[keyToModify]), (_c = {}, _c[field] = selected[keyToModify][field] + delta, _c)), _b));
    return {
        selected: normalizeSelected(nextSelected, state.data),
    };
}; };
var blur = function () { return ({
    active: null,
}); };
/** @todo handle inactive state? */
var keyDownHandlers = {
    ArrowUp: go(-1, 0),
    ArrowDown: go(+1, 0),
    ArrowLeft: go(0, -1),
    ArrowRight: go(0, +1),
    Tab: go(0, +1),
    Enter: edit,
    Backspace: clear,
    Escape: blur,
};
var editKeyDownHandlers = {
    Escape: view,
    Tab: keyDownHandlers.Tab,
    Enter: keyDownHandlers.ArrowDown,
};
var editShiftKeyDownHandlers = {
    Tab: go(0, -1),
};
var shiftKeyDownHandlers = {
    ArrowUp: modifyEdge(Direction.Top),
    ArrowDown: modifyEdge(Direction.Down),
    ArrowLeft: modifyEdge(Direction.Left),
    ArrowRight: modifyEdge(Direction.Right),
    Tab: go(0, -1),
};
var shiftMetaKeyDownHandlers = {};
var metaKeyDownHandlers = {};
function getActive(state) {
    var activeCell = state.active &&
        get$1(state.active.row, state.active.column, state.data);
    return activeCell || null;
}
var isActiveReadOnly = function (state) {
    var activeCell = getActive(state);
    return Boolean(activeCell && activeCell.readOnly);
};
function keyPress(state, event) {
    if (isActiveReadOnly(state) || event.metaKey) {
        return null;
    }
    if (state.mode === "view" && state.active) {
        return { mode: "edit" };
    }
    return null;
}
function getKeyDownHandler(state, event) {
    var key = event.key;
    var handlers;
    // Order matters
    if (state.mode === "edit") {
        if (event.shiftKey) {
            handlers = editShiftKeyDownHandlers;
        }
        else {
            handlers = editKeyDownHandlers;
        }
    }
    else if (event.shiftKey && event.metaKey) {
        handlers = shiftMetaKeyDownHandlers;
    }
    else if (event.shiftKey) {
        handlers = shiftKeyDownHandlers;
    }
    else if (event.metaKey) {
        handlers = metaKeyDownHandlers;
    }
    else {
        handlers = keyDownHandlers;
    }
    return handlers[key];
}
function keyDown(state, event) {
    var handler = getKeyDownHandler(state, event);
    if (handler) {
        return handler(state, event);
    }
    return null;
}
function dragStart(state) {
    return { dragging: true };
}
function dragEnd(state) {
    return { dragging: false };
}
function commit(state, changes) {
    return { lastCommit: changes };
}

var Table = function (_a) {
    var children = _a.children, columns = _a.columns, hideColumnIndicators = _a.hideColumnIndicators;
    var columnCount = columns + (hideColumnIndicators ? 0 : 1);
    var columnNodes = range(columnCount).map(function (i) { return React.createElement("col", { key: i }); });
    return (React.createElement("table", { className: "Spreadsheet__table" },
        React.createElement("colgroup", null, columnNodes),
        React.createElement("tbody", null, children)));
};

var Row = "tr";

function CornerIndicator(props) {
    return React.createElement("th", { className: "Spreadsheet__header" });
}

var ColumnIndicator = function (_a) {
    var column = _a.column, label = _a.label;
    return (React.createElement("th", { className: "Spreadsheet__header" }, label !== undefined ? label : hotFormulaParser.columnIndexToLabel(String(column))));
};

var RowIndicator = function (_a) {
    var row = _a.row, label = _a.label;
    return (React.createElement("th", { className: "Spreadsheet__header" }, label !== undefined ? label : row + 1));
};

var Cell = function (_a) {
    var row = _a.row, column = _a.column, setCellDimensions = _a.setCellDimensions, select = _a.select, activate = _a.activate, mode = _a.mode, dragging = _a.dragging, formulaParser = _a.formulaParser, selected = _a.selected, active = _a.active, DataViewer = _a.DataViewer, data = _a.data;
    var rootRef = React.useRef(null);
    var root = rootRef.current;
    var handleMouseDown = React.useCallback(function (event) {
        if (mode === "view") {
            setCellDimensions({ row: row, column: column }, getOffsetRect(event.currentTarget));
            if (event.shiftKey) {
                select({ row: row, column: column });
            }
            else {
                activate({ row: row, column: column });
            }
        }
    }, [mode, setCellDimensions, row, column, select, activate]);
    var handleMouseOver = React.useCallback(function (event) {
        if (dragging) {
            setCellDimensions({ row: row, column: column }, getOffsetRect(event.currentTarget));
            select({ row: row, column: column });
        }
    }, [setCellDimensions, select, dragging, row, column]);
    React.useEffect(function () {
        if (selected && root) {
            setCellDimensions({ row: row, column: column }, getOffsetRect(root));
        }
        if (root && active && mode === "view") {
            root.focus();
        }
    }, [setCellDimensions, root, select, active, mode, column, row, selected]);
    if (data && data.DataViewer) {
        // @ts-ignore
        DataViewer = data.DataViewer;
    }
    return (React.createElement("td", { ref: rootRef, className: classnames__default['default']("Spreadsheet__cell", data === null || data === void 0 ? void 0 : data.className, {
            "Spreadsheet__cell--readonly": data === null || data === void 0 ? void 0 : data.readOnly,
        }), onMouseOver: handleMouseOver, onMouseDown: handleMouseDown, tabIndex: 0 },
        React.createElement(DataViewer, { row: row, column: column, cell: data, formulaParser: formulaParser })));
};
function mapStateToProps(_a, _b) {
    var data = _a.data, active = _a.active, selected = _a.selected, copied = _a.copied, mode = _a.mode, dragging = _a.dragging, lastChanged = _a.lastChanged, bindings = _a.bindings;
    var column = _b.column, row = _b.row;
    var point = { row: row, column: column };
    var cellIsActive = isActive(active, point);
    var cellBindings = get(point, bindings);
    return {
        active: cellIsActive,
        selected: selected ? has(selected, point) : false,
        copied: has$1(point, copied),
        mode: cellIsActive ? mode : "view",
        data: get$1(row, column, data),
        dragging: dragging,
        /** @todo refactor */
        // @ts-ignore
        _bindingChanged: cellBindings && lastChanged && has$2(cellBindings, lastChanged)
            ? {}
            : null,
    };
}
var enhance = react.connect(mapStateToProps, function () { return ({
    select: select,
    activate: activate,
    setCellDimensions: setCellDimensions,
}); });

var toView = function (value) {
    if (value === false) {
        return React.createElement("span", { className: "Spreadsheet__data-viewer--boolean" }, "FALSE");
    }
    if (value === true) {
        return React.createElement("span", { className: "Spreadsheet__data-viewer--boolean" }, "TRUE");
    }
    return React.createElement("span", { className: "Spreadsheet__data-viewer" }, value);
};
var DataViewer = function (_a) {
    var cell = _a.cell, formulaParser = _a.formulaParser;
    return toView(getComputedValue({ cell: cell, formulaParser: formulaParser }));
};

var DataEditor = function (_a) {
    var onChange = _a.onChange, cell = _a.cell;
    var inputRef = React.useRef(null);
    var handleChange = React.useCallback(function (e) {
        onChange(__assign(__assign({}, cell), { value: e.target.value }));
    }, [onChange, cell]);
    React.useEffect(function () {
        if (inputRef.current) {
            moveCursorToEnd(inputRef.current);
        }
    }, [inputRef]);
    var value = (cell === null || cell === void 0 ? void 0 : cell.value) || "";
    return (React.createElement("div", { className: "Spreadsheet__data-editor" },
        React.createElement("input", { ref: inputRef, type: "text", onChange: handleChange, value: value, autoFocus: true })));
};
DataEditor.defaultProps = {
    cell: {
        value: "",
    },
};

function ActiveCell(props) {
    var row = props.row, column = props.column, cell = props.cell, width = props.width, height = props.height, top = props.top, left = props.left, hidden = props.hidden, mode = props.mode, edit = props.edit, setCellData = props.setCellData, getBindingsForCell = props.getBindingsForCell, commit = props.commit, data = props.data;
    var initialCellRef = React.useRef(null);
    var prevPropsRef = React.useRef(null);
    var handleChange = React.useCallback(function (cell) {
        var bindings = getBindingsForCell(cell, data);
        setCellData({ row: row, column: column }, cell, bindings);
    }, [getBindingsForCell, setCellData, row, column, data]);
    React.useEffect(function () {
        var prevProps = prevPropsRef.current;
        prevPropsRef.current = props;
        if (!prevProps) {
            return;
        }
        // Commit
        var coordsChanged = row !== prevProps.row || column !== prevProps.column;
        var exitedEditMode = mode !== "edit";
        if (coordsChanged || exitedEditMode) {
            var initialCell = initialCellRef.current;
            if (prevProps.cell !== initialCell) {
                commit([
                    {
                        prevCell: initialCell,
                        nextCell: prevProps.cell,
                    },
                ]);
            }
            else if (!coordsChanged && cell !== prevProps.cell) {
                commit([
                    {
                        prevCell: prevProps.cell,
                        nextCell: cell,
                    },
                ]);
            }
            initialCellRef.current = cell;
        }
    });
    var DataEditor = (cell && cell.DataEditor) || props.DataEditor;
    var readOnly = cell && cell.readOnly;
    return hidden ? null : (React.createElement("div", { className: classnames__default['default']("Spreadsheet__active-cell", "Spreadsheet__active-cell--" + mode), style: { width: width, height: height, top: top, left: left }, onClick: mode === "view" && !readOnly ? edit : undefined }, mode === "edit" && (React.createElement(DataEditor, { row: row, column: column, cell: cell, 
        // @ts-ignore
        onChange: handleChange }))));
}
function mapStateToProps$1(state) {
    var dimensions = state.active && getCellDimensions(state.active, state);
    if (!state.active || !dimensions) {
        return { hidden: true };
    }
    return __assign(__assign({}, state.active), { hidden: false, cell: get$1(state.active.row, state.active.column, state.data), width: dimensions.width, height: dimensions.height, top: dimensions.top, left: dimensions.left, mode: state.mode, data: state.data });
}
var ActiveCell$1 = react.connect(mapStateToProps$1, {
    setCellData: setCellData,
    edit: edit,
    commit: commit,
})(ActiveCell);

var FloatingRect = function (_a) {
    var _b;
    var width = _a.width, height = _a.height, top = _a.top, left = _a.left, dragging = _a.dragging, hidden = _a.hidden, variant = _a.variant;
    return (React.createElement("div", { className: classnames__default['default']("Spreadsheet__floating-rect", (_b = {},
            _b["Spreadsheet__floating-rect--" + variant] = variant,
            _b["Spreadsheet__floating-rect--dragging"] = dragging,
            _b["Spreadsheet__floating-rect--hidden"] = hidden,
            _b)), style: { width: width, height: height, top: top, left: left } }));
};
var getRangeDimensions$1 = function (points, state) {
    var _a = reduce$1(function (acc, point) {
        var isOnEdge = onEdge(points, point);
        var dimensions = getCellDimensions(point, state);
        if (dimensions) {
            acc.width = isOnEdge.top ? acc.width + dimensions.width : acc.width;
            acc.height = isOnEdge.left
                ? acc.height + dimensions.height
                : acc.height;
            acc.left = isOnEdge.left && isOnEdge.top ? dimensions.left : acc.left;
            acc.top = isOnEdge.left && isOnEdge.top ? dimensions.top : acc.top;
        }
        return acc;
    }, points, { left: 0, top: 0, width: 0, height: 0 }), width = _a.width, height = _a.height, left = _a.left, top = _a.top;
    return { left: left, top: top, width: width, height: height };
};
var mapStateToProps$2 = function (state, cells) { return (__assign(__assign({}, getRangeDimensions$1(cells, state)), { hidden: size$2(cells) === 0 })); };

var Selected = function (props) { return (React.createElement(FloatingRect, __assign({}, props, { variant: "selected" }))); };
var Selected$1 = react.connect(function (state) {
    var props = mapStateToProps$3(state, state.selected);
    return __assign(__assign({}, props), { hidden: props.hidden ||
            Boolean(state.selected && size(state.selected) === 1), dragging: state.dragging });
})(Selected);
/** @todo move to floating rect */
function mapStateToProps$3(state, range) {
    var dimensions = (range && getRangeDimensions(state, range)) || {
        width: 0,
        height: 0,
        left: 0,
        top: 0,
    };
    return __assign(__assign({}, dimensions), { hidden: !range });
}

var Copied = function (props) { return (React.createElement(FloatingRect, __assign({}, props, { variant: "copied" }))); };
var Copied$1 = react.connect(function (state) {
    var cells = state.hasPasted
        ? from$1([])
        : map(function () { return true; }, state.copied);
    return __assign(__assign({}, mapStateToProps$2(state, cells)), { dragging: false });
})(Copied);

var FORMULA_REFERENCES = /\$?[A-Z]+\$?[0-9]+/g;
function isFormula(value) {
    return typeof value === "string" && value.startsWith("=");
}
function getFormula(cell) {
    if (cell && cell.value && isFormula(cell.value)) {
        return cell.value;
    }
    return null;
}
/**
 * For given formula returns the cell references
 * @param formula
 */
function getReferences(formula) {
    var match = formula.match(FORMULA_REFERENCES);
    return match
        ? match.map(function (substr) {
            var _a = __read(hotFormulaParser.extractLabel(substr), 2), row = _a[0], column = _a[1];
            return { row: row.index, column: column.index };
        })
        : [];
}
/**
 * For given cell and spreadsheet data returns the cells affecting the cell value
 * @param cell cell to get bindings for
 * @param data spreadsheet data the cell relates to
 * @returns an array of coordinates in the given spreadsheet data of the cells that affect the given cell
 */
function getBindingsForCell(cell, data) {
    var formula = getFormula(cell);
    if (!formula) {
        return [];
    }
    var references = getReferences(formula);
    // Recursively get references to dependencies
    return flatMap__default['default'](references, function (coords) {
        var dependency = get$1(coords.row, coords.column, data);
        var dependencyBindings = dependency
            ? getBindingsForCell(dependency, data)
            : [];
        return __spread([coords], dependencyBindings);
    });
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".Spreadsheet {\n  position: relative;\n  overflow: visible;\n  background: white;\n  color: black;\n  display: inline-block;\n}\n\n.Spreadsheet__active-cell {\n  position: absolute;\n  border: 2px solid #4285f4;\n  box-sizing: border-box;\n}\n\n.Spreadsheet__active-cell--edit {\n  background: white;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);\n}\n\n.Spreadsheet__table {\n  border-collapse: collapse;\n  table-layout: fixed;\n}\n\n.Spreadsheet__cell,\n.Spreadsheet__active-cell {\n  cursor: cell;\n}\n\n.Spreadsheet__cell,\n.Spreadsheet__cell input {\n  outline: none;\n}\n\n.Spreadsheet__cell--readonly {\n  color: #999;\n}\n\n.Spreadsheet__cell,\n.Spreadsheet__header {\n  min-width: 6em;\n  min-height: 1.9em;\n  height: 1.9em;\n  max-height: 1.9em;\n  border: 1px solid rgb(231, 231, 231);\n  overflow: hidden;\n  word-break: keep-all;\n  white-space: nowrap;\n  text-align: left;\n  box-sizing: border-box;\n  user-select: none;\n}\n\n.Spreadsheet__header {\n  background: #f5f5f5;\n  color: #999;\n  text-align: center;\n  font: inherit;\n}\n\n.Spreadsheet__header,\n.Spreadsheet__data-viewer,\n.Spreadsheet__data-editor input {\n  padding: 4px;\n  box-sizing: border-box;\n}\n\n.Spreadsheet__data-editor,\n.Spreadsheet__data-editor input {\n  width: 98%;\n  height: 98%;\n}\n\n.Spreadsheet__data-editor input {\n  font: inherit;\n  background: none;\n  border: none;\n  outline: none;\n  margin: 0;\n}\n\n.Spreadsheet__data-viewer--boolean {\n  text-align: center;\n}\n\n.Spreadsheet__floating-rect {\n  position: absolute;\n  pointer-events: none;\n  box-sizing: border-box;\n}\n\n.Spreadsheet__floating-rect--hidden {\n  display: none;\n}\n\n.Spreadsheet__floating-rect--selected {\n  background: rgba(160, 195, 255, 0.2);\n  border: 2px #4285f4 solid;\n}\n.Spreadsheet__floating-rect--dragging {\n  border: none;\n}\n\n.Spreadsheet__floating-rect--copied {\n  border: 2px #4285f4 dashed;\n}\n";
styleInject(css_248z);

var Spreadsheet = /** @class */ (function (_super) {
    __extends(Spreadsheet, _super);
    function Spreadsheet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.formulaParser = _this.props.formulaParser || new hotFormulaParser.Parser();
        _this.clip = function (event) {
            var store = _this.props.store;
            var _a = store.getState(), data = _a.data, selected = _a.selected;
            var csv = getSelectedCSV(selected, data);
            writeTextToClipboard(event, csv);
        };
        _this.handleCopy = function (event) {
            if (_this.isFocused()) {
                event.preventDefault();
                event.stopPropagation();
                _this.clip(event);
                _this.props.copy();
            }
        };
        _this.handlePaste = function (event) { return __awaiter(_this, void 0, void 0, function () {
            var text;
            return __generator(this, function (_a) {
                if (this.props.mode === "view" && this.isFocused()) {
                    event.preventDefault();
                    event.stopPropagation();
                    if (event.clipboardData) {
                        text = readTextFromClipboard(event);
                        this.props.paste(text);
                    }
                }
                return [2 /*return*/];
            });
        }); };
        _this.handleCut = function (event) {
            if (_this.isFocused()) {
                event.preventDefault();
                event.stopPropagation();
                _this.clip(event);
                _this.props.cut();
            }
        };
        _this.handleKeyDown = function (event) {
            var _a = _this.props, store = _a.store, onKeyDown = _a.onKeyDown, onKeyDownAction = _a.onKeyDownAction;
            if (onKeyDown) {
                onKeyDown(event);
            }
            // Do not use event in case preventDefault() was called inside onKeyDown
            if (!event.defaultPrevented) {
                // Only disable default behavior if an handler exist
                if (getKeyDownHandler(store.getState(), event)) {
                    event.nativeEvent.preventDefault();
                }
                onKeyDownAction(event);
            }
        };
        _this.handleMouseUp = function () {
            _this.props.onDragEnd();
            document.removeEventListener("mouseup", _this.handleMouseUp);
        };
        _this.handleMouseMove = function (event) {
            if (!_this.props.store.getState().dragging && event.buttons === 1) {
                _this.props.onDragStart();
                document.addEventListener("mouseup", _this.handleMouseUp);
            }
        };
        _this.root = null;
        _this.handleRoot = function (root) {
            _this.root = root;
        };
        /**
         * The component inside the Cell prop is automatically enhanced with the enhance()
         * function inside Cell.js. This method is a small wrapper which memoizes the application
         * of enhance() to the user-provided Cell prop, in order to avoid creating new component
         * types on every re-render.
         */
        _this.getCellComponent = memoizeOne(enhance);
        return _this;
    }
    Spreadsheet.prototype.isFocused = function () {
        var activeElement = document.activeElement;
        return this.props.mode === "view" && this.root
            ? this.root === activeElement || this.root.contains(activeElement)
            : false;
    };
    Spreadsheet.prototype.componentWillUnmount = function () {
        document.removeEventListener("cut", this.handleCut);
        document.removeEventListener("copy", this.handleCopy);
        document.removeEventListener("paste", this.handlePaste);
    };
    Spreadsheet.prototype.componentDidMount = function () {
        var _this = this;
        var store = this.props.store;
        document.addEventListener("cut", this.handleCut);
        document.addEventListener("copy", this.handleCopy);
        document.addEventListener("paste", this.handlePaste);
        this.formulaParser.on("callCellValue", function (cellCoord, done) {
            var value;
            /** @todo More sound error, or at least document */
            try {
                var cell = get$1(cellCoord.row.index, cellCoord.column.index, store.getState().data);
                value = getComputedValue({
                    cell: cell,
                    formulaParser: _this.formulaParser,
                });
            }
            catch (error) {
                console.error(error);
            }
            finally {
                done(value);
            }
        });
        this.formulaParser.on("callRangeValue", function (startCellCoord, endCellCoord, done) {
            var startPoint = {
                row: startCellCoord.row.index,
                column: startCellCoord.column.index,
            };
            var endPoint = {
                row: endCellCoord.row.index,
                column: endCellCoord.column.index,
            };
            var values = toArray(slice(startPoint, endPoint, store.getState().data), function (cell) {
                return getComputedValue({
                    cell: cell,
                    formulaParser: _this.formulaParser,
                });
            });
            done(values);
        });
    };
    Spreadsheet.prototype.render = function () {
        var _this = this;
        var _a = this.props, columnLabels = _a.columnLabels, rowLabels = _a.rowLabels, rows = _a.rows, columns = _a.columns, onKeyPress = _a.onKeyPress, hideColumnIndicators = _a.hideColumnIndicators, hideRowIndicators = _a.hideRowIndicators, _b = _a.Table, Table$1 = _b === void 0 ? Table : _b, _c = _a.Row, Row$1 = _c === void 0 ? Row : _c, _d = _a.CornerIndicator, CornerIndicator$1 = _d === void 0 ? CornerIndicator : _d, _e = _a.DataEditor, DataEditor$1 = _e === void 0 ? DataEditor : _e, _f = _a.DataViewer, DataViewer$1 = _f === void 0 ? DataViewer : _f, _g = _a.getBindingsForCell, getBindingsForCell$1 = _g === void 0 ? getBindingsForCell : _g, _h = _a.RowIndicator, RowIndicator$1 = _h === void 0 ? RowIndicator : _h, _j = _a.ColumnIndicator, ColumnIndicator$1 = _j === void 0 ? ColumnIndicator : _j;
        // @ts-ignore
        var Cell$1 = this.getCellComponent(this.props.Cell || Cell);
        return (React.createElement("div", { ref: this.handleRoot, className: "Spreadsheet", onKeyPress: onKeyPress, onKeyDown: this.handleKeyDown, onMouseMove: this.handleMouseMove },
            React.createElement(Table$1, { columns: columns, hideColumnIndicators: hideColumnIndicators },
                React.createElement(Row$1, null,
                    !hideRowIndicators && !hideColumnIndicators && React.createElement(CornerIndicator$1, null),
                    !hideColumnIndicators &&
                        range(columns).map(function (columnNumber) {
                            return columnLabels ? (React.createElement(ColumnIndicator$1, { key: columnNumber, column: columnNumber, label: columnNumber in columnLabels
                                    ? columnLabels[columnNumber]
                                    : null })) : (React.createElement(ColumnIndicator$1, { key: columnNumber, column: columnNumber }));
                        })),
                range(rows).map(function (rowNumber) { return (React.createElement(Row$1, { key: rowNumber },
                    !hideRowIndicators &&
                        (rowLabels ? (React.createElement(RowIndicator$1, { key: rowNumber, row: rowNumber, label: rowNumber in rowLabels ? rowLabels[rowNumber] : null })) : (React.createElement(RowIndicator$1, { key: rowNumber, row: rowNumber }))),
                    range(columns).map(function (columnNumber) { return (React.createElement(Cell$1, { key: columnNumber, row: rowNumber, column: columnNumber, 
                        // @ts-ignore
                        DataViewer: DataViewer$1, formulaParser: _this.formulaParser })); }))); })),
            React.createElement(ActiveCell$1
            // @ts-ignore
            , { 
                // @ts-ignore
                DataEditor: DataEditor$1, getBindingsForCell: getBindingsForCell$1 }),
            React.createElement(Selected$1, null),
            React.createElement(Copied$1, null)));
    };
    return Spreadsheet;
}(React.PureComponent));
var mapStateToProps$4 = function (_a, _b) {
    var data = _a.data, mode = _a.mode;
    var columnLabels = _b.columnLabels;
    var _c = getSize(data), columns = _c.columns, rows = _c.rows;
    return {
        mode: mode,
        rows: rows,
        columns: columnLabels ? Math.max(columns, columnLabels.length) : columns,
    };
};
var Spreadsheet$1 = react.connect(mapStateToProps$4, {
    copy: copy,
    cut: cut,
    paste: paste,
    onKeyDownAction: keyDown,
    onKeyPress: keyPress,
    onDragStart: dragStart,
    onDragEnd: dragEnd,
})(Spreadsheet);

var INITIAL_STATE = {
    active: null,
    mode: "view",
    rowDimensions: {},
    columnDimensions: {},
    lastChanged: null,
    hasPasted: false,
    cut: false,
    dragging: false,
};
var SpreadsheetStateProvider = /** @class */ (function (_super) {
    __extends(SpreadsheetStateProvider, _super);
    function SpreadsheetStateProvider(props) {
        var _this = _super.call(this, props) || this;
        var state = __assign(__assign({}, INITIAL_STATE), { data: _this.props.data, selected: null, copied: from([]), bindings: from([]), lastCommit: null });
        _this.store =
            process.env.NODE_ENV === "production"
                ? createStore__default['default'](state)
                : devtools__default['default'](createStore__default['default'](state));
        _this.prevState = state;
        return _this;
    }
    SpreadsheetStateProvider.prototype.componentDidMount = function () {
        var _this = this;
        this.unsubscribe = this.store.subscribe(function (state) {
            var e_1, _a;
            var _b = _this, _c = _b.props, onChange = _c.onChange, onModeChange = _c.onModeChange, onSelect = _c.onSelect, onActivate = _c.onActivate, onCellCommit = _c.onCellCommit, prevState = _b.prevState;
            if (state.lastCommit && state.lastCommit !== prevState.lastCommit) {
                try {
                    for (var _d = __values(state.lastCommit), _e = _d.next(); !_e.done; _e = _d.next()) {
                        var change = _e.value;
                        onCellCommit(change.prevCell, change.nextCell, state.active);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_e && !_e.done && (_a = _d["return"])) _a.call(_d);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            if (state.data !== prevState.data && state.data !== _this.props.data) {
                onChange(state.data);
            }
            if (state.mode !== prevState.mode) {
                onModeChange(state.mode);
            }
            if (state.selected !== prevState.selected) {
                var points = state.selected
                    ? Array.from(iterate(state.selected))
                    : [];
                onSelect(points);
            }
            if (state.active !== prevState.active && state.active) {
                onActivate(state.active);
            }
            _this.prevState = state;
        });
    };
    SpreadsheetStateProvider.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.data !== this.prevState.data) {
            var previousState = this.store.getState();
            var nextState = setData(previousState, this.props.data);
            this.store.setState(__assign(__assign({}, previousState), nextState));
        }
    };
    SpreadsheetStateProvider.prototype.componentWillUnmount = function () {
        this.unsubscribe();
    };
    SpreadsheetStateProvider.prototype.render = function () {
        var _a = this.props, data = _a.data, rest = __rest(_a, ["data"]);
        return (React.createElement(react.Provider, { store: this.store },
            React.createElement(Spreadsheet$1, __assign({}, rest, { store: this.store }))));
    };
    SpreadsheetStateProvider.defaultProps = {
        onChange: function () { },
        onModeChange: function () { },
        onSelect: function () { },
        onActivate: function () { },
        onCellCommit: function () { },
    };
    return SpreadsheetStateProvider;
}(React.PureComponent));

exports.DataEditor = DataEditor;
exports.DataViewer = DataViewer;
exports.Spreadsheet = SpreadsheetStateProvider;
exports.createEmptyMatrix = createEmptyMatrix;
exports.default = SpreadsheetStateProvider;
exports.getComputedValue = getComputedValue;
//# sourceMappingURL=index.js.map
