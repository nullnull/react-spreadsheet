/**
 * Example data components for viewing and editing ranges
 */
import { DataViewerComponent, DataEditorComponent, CellBase } from "..";
declare type Cell = CellBase<number | undefined>;
export declare const RangeView: DataViewerComponent<Cell>;
export declare const RangeEdit: DataEditorComponent<Cell>;
export {};
