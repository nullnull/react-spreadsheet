/**
 * Immutable Set like interface of points
 */
import { Point } from "./types";
import * as PointMap from "./point-map";
export declare type PointSet = PointMap.PointMap<boolean>;
export declare type Descriptor<T> = {
    data: T;
} & Point;
/** Returns a boolean asserting whether an point is present with the given value in the Set object or not */
export declare const has: (set: PointSet, point: Point) => boolean;
/** Returns the number of points in a PointSet object */
export declare const size: (set: PointSet) => number;
/** Applies a function against an accumulator and each point in the set (from left to right) to reduce it to a single value */
export declare function reduce<T>(func: (t: T, point: Point) => T, set: PointSet, initialValue: T): T;
/** Creates a new set with the results of calling a provided function on every point in the calling set */
export declare function map(func: (point: Point) => Point, set: PointSet): PointSet;
/** Creates a new set with all points that pass the test implemented by the provided function */
export declare function filter(func: (point: Point) => boolean, set: PointSet): PointSet;
/** Returns the point on the minimal row in the minimal column in the set */
export declare function min(set: PointSet): Point;
/** Returns the point on the maximal row in the maximal column in the set */
export declare function max(set: PointSet): Point;
/** Creates a new PointSet instance from an array-like or iterable object */
export declare function from(points: Point[]): PointSet;
declare type OnEdge = {
    left: boolean;
    right: boolean;
    top: boolean;
    bottom: boolean;
};
export declare function onEdge(set: PointSet, point: Point): OnEdge;
export declare function getEdgeValue(set: PointSet, field: keyof Point, delta: number): number;
export {};
