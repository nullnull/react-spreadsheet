import * as Types from "./types";
import * as Matrix from "./matrix";
export declare function isFormula(value: unknown): value is string;
export declare function getFormula<Cell extends Types.CellBase>(cell: Cell): string | null;
/**
 * For given formula returns the cell references
 * @param formula
 */
export declare function getReferences(formula: string): Types.Point[];
/**
 * For given cell and spreadsheet data returns the cells affecting the cell value
 * @param cell cell to get bindings for
 * @param data spreadsheet data the cell relates to
 * @returns an array of coordinates in the given spreadsheet data of the cells that affect the given cell
 */
export declare function getBindingsForCell<Value, Cell extends Types.CellBase & {
    value: Value;
}>(cell: Cell, data: Matrix.Matrix<Cell>): Types.Point[];
