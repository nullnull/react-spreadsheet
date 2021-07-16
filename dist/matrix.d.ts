/**
 * Immutable interface for Matrices
 *
 * @todo use Types.Point for all point references
 */
import * as Types from "./types";
export declare type Matrix<T> = Array<Array<T | undefined>>;
/** Gets the value at row and column of matrix. */
export declare function get<T>(row: number, column: number, matrix: Matrix<T>): T | undefined;
/** Creates a slice of matrix from startPoint up to, but not including, endPoint. */
export declare function slice<T>(startPoint: Types.Point, endPoint: Types.Point, matrix: Matrix<T>): Matrix<T>;
/** Sets the value at row and column of matrix. If a row doesn't exist, it's created. */
export declare function set<T>(row: number, column: number, value: T, matrix: Matrix<T>): Matrix<T>;
/** Like Matrix.set() but mutates the matrix */
export declare function mutableSet<T>(row: number, column: number, value: T, matrix: Matrix<T>): void;
/** Removes the coordinate of matrix */
export declare function unset<T>(row: number, column: number, matrix: Matrix<T>): Matrix<T>;
/** Creates an array of values by running each element in collection thru iteratee. */
export declare function map<T, T2>(func: (arg0: T | undefined, arg1: Types.Point) => T2, matrix: Matrix<T>): Matrix<T2>;
/**
 * Converts all elements in row into a string separated by horizontalSeparator and each row string
 * to string separated by verticalSeparator
 */
export declare function join(matrix: Matrix<unknown>, horizontalSeparator?: string, verticalSeparator?: string): string;
/**
 * Parses a CSV separated by a horizontalSeparator and verticalSeparator into a
 * Matrix using a transform function
 */
export declare function split<T>(csv: string, transform: (value: string) => T, horizontalSeparator?: string, verticalSeparator?: string | RegExp): Matrix<T>;
/** Returns whether the point exists in the matrix or not. */
export declare function has(row: number, column: number, matrix: Matrix<any>): boolean;
declare type Size = {
    columns: number;
    rows: number;
};
/** Gets the size of matrix by returning its number of rows and columns */
export declare function getSize(matrix: Matrix<any>): Size;
/**
 * Pads matrix with empty rows to match given total rows
 * @param matrix matrix to pad
 * @param totalRows number of rows the matrix should have
 * @returns the updated matrix
 */
export declare function padRows<T>(matrix: Matrix<T>, totalRows: number): Matrix<T>;
export declare function toArray<T>(matrix: Matrix<T>): T[];
export declare function toArray<T1, T2>(matrix: Matrix<T1>, transform: (cell: T1 | undefined, coords: Types.Point) => T2): T2[];
export {};
