import * as Types from "./types";
import * as Matrix from "./matrix";
import { Parser as FormulaParser } from "hot-formula-parser";
import * as PointRange from "./point-range";
export declare const moveCursorToEnd: (el: HTMLInputElement) => void;
export declare function memoizeOne<Input, Output>(fn: (arg: Input) => Output): (arg: Input) => Output;
/**
 * Creates an array of numbers (positive and/or negative) progressing from start up to, but not including, end. A step of -1 is used if a negative start is specified without an end or step. If end is not specified, it's set to start with start then set to 0.
 * @param end
 * @param start
 * @param step
 */
export declare function range(end: number, start?: number, step?: number): number[];
export declare function updateData<Cell>(data: Matrix.Matrix<Cell>, cellDescriptor: Types.CellDescriptor<Cell>): Matrix.Matrix<Cell>;
export declare function isActive(active: Types.StoreState["active"], { row, column }: Types.Point): boolean;
export declare const getOffsetRect: (element: HTMLElement) => Types.Dimensions;
export declare const writeTextToClipboard: (event: ClipboardEvent, data: string) => void;
export declare const readTextFromClipboard: (event: ClipboardEvent) => string;
export declare function createEmptyMatrix<T>(rows: number, columns: number): Matrix.Matrix<T>;
export declare const getCellDimensions: (point: Types.Point, state: Types.StoreState) => Types.Dimensions | null;
/** Get the dimensions of a range of cells */
export declare function getRangeDimensions(state: Types.StoreState, range: PointRange.PointRange): Types.Dimensions | null;
export declare function getComputedValue<Cell extends Types.CellBase<Value>, Value>({ cell, formulaParser, }: {
    cell: Cell | undefined;
    formulaParser: FormulaParser;
}): Value | string | number | boolean | null;
export declare function normalizeSelected(selected: PointRange.PointRange | null, data: Matrix.Matrix<unknown>): PointRange.PointRange | null;
export declare function getSelectedCSV(selected: PointRange.PointRange | null, data: Matrix.Matrix<Types.CellBase>): string;
