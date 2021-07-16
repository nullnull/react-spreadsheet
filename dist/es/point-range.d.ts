/**
 * Interface for ranges between two points
 */
import { Point } from "./types";
/** Range between two points */
export declare type PointRange = {
    /** The top-left point */
    start: Point;
    /** The bottom-right point */
    end: Point;
};
/** Creates a normalized range between two given points */
export declare function create(source: Point, target: Point): PointRange;
/** Iterates through all the existing points in given range */
export declare function iterate(range: PointRange): Iterable<Point>;
/** Returns the size (rows x columns) of the given range */
export declare function size(range: PointRange): number;
/** Returns whether given point exists in given range */
export declare function has(range: PointRange, point: Point): boolean;
/** Limits given masked range with given mask */
export declare function mask(masked: PointRange, mask: PointRange): PointRange;
