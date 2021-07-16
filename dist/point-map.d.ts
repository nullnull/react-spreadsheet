/**
 * Immutable unordered Map like interface of point to value pairs.
 */
import * as Types from "./types";
import { Matrix } from "./matrix";
export declare type PointMap<T> = {
    [K in number]: {
        [K in number]: T;
    };
};
/** Sets the value for point in map */
export declare function set<T>(point: Types.Point, value: T, map: PointMap<T>): PointMap<T>;
export declare function unset<T>({ row, column }: Types.Point, map: PointMap<T>): PointMap<T>;
/** Gets the value for point in map */
export declare function get<T>(point: Types.Point, map: PointMap<T>): undefined | T;
/** Checks if map has point assigned to value */
export declare function has<T>(point: Types.Point, map: PointMap<T>): boolean;
/** Get all the values of a certain row */
export declare function getRow<T>(row: number, map: PointMap<T>): T[];
/** Get all the values of a certain column */
export declare function getColumn<T>(column: number, map: PointMap<T>): T[];
/** Creates a new PointMap instance from an array-like or iterable object. */
export declare function from<T>(pairs: [Types.Point, T][]): PointMap<T>;
/** Creates a new PointMap instance from a Matrix. */
export declare function fromMatrix<T>(matrix: Matrix<T>): PointMap<T>;
/** Returns the number of elements in a PointMap object. */
export declare function size(map: PointMap<unknown>): number;
/** Applies a function against an accumulator and each value and point in the map (from left to right) to reduce it to a single value */
export declare function reduce<A, T>(func: (a: A, value: T, point: Types.Point) => A, map: PointMap<T>, initialValue: A): A;
/** Creates a new map with the results of calling a provided function on every value in the calling map */
export declare function map<T1, T2>(func: (t1: T1) => T2, map: PointMap<T1>): PointMap<T2>;
/** Creates a new map of all values predicate returns truthy for. The predicate is invoked with two arguments: (value, key) */
export declare function filter<T>(predicate: (t: T, arg1: Types.Point) => boolean, map: PointMap<T>): PointMap<T>;
/** Returns whether map has any points set to value */
export declare function isEmpty(map: PointMap<any>): boolean;
