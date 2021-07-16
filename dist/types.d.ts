import { ComponentType } from "react";
import { Parser as FormulaParser } from "hot-formula-parser";
import { PointMap } from "./point-map";
import { PointSet } from "./point-set";
import { Matrix } from "./matrix";
import { PointRange } from "./point-range";
export declare type Point = {
    column: number;
    row: number;
};
export declare type CellBase<Value = any> = {
    readOnly?: boolean;
    className?: string;
    value: Value;
    DataEditor?: DataEditorComponent<CellBase<Value>>;
    DataViewer?: DataViewerComponent<CellBase<Value>>;
};
export declare type CellDescriptor<Cell> = {
    data: Cell | undefined;
} & Point;
export declare type Mode = "view" | "edit";
export declare type Dimensions = {
    width: number;
    height: number;
    top: number;
    left: number;
};
export declare type StoreState<Cell extends CellBase = CellBase<any>> = {
    data: Matrix<Cell>;
    selected: PointRange | null;
    copied: PointMap<Cell>;
    hasPasted: boolean;
    cut: boolean;
    active: Point | null;
    mode: Mode;
    rowDimensions: {
        [K in number]: {
            height: number;
            top: number;
        };
    };
    columnDimensions: {
        [K in number]: {
            width: number;
            left: number;
        };
    };
    dragging: boolean;
    lastChanged: Point | null;
    bindings: PointMap<PointSet>;
    lastCommit: null | CellChange<Cell>[];
};
export declare type getBindingsForCell<Cell> = (cell: Cell, data: Matrix<Cell>) => Point[];
declare type CellChange<Cell> = {
    prevCell: Cell | null;
    nextCell: Cell | null;
};
export declare type commit<Cell> = (changes: CellChange<Cell>[]) => void;
export declare type CellComponentProps<Cell extends CellBase> = {
    row: number;
    column: number;
    DataViewer: DataViewerComponent<Cell>;
    formulaParser: FormulaParser;
    selected: boolean;
    active: boolean;
    copied: boolean;
    dragging: boolean;
    mode: Mode;
    data: Cell | undefined;
    select: (cellPointer: Point) => void;
    activate: (cellPointer: Point) => void;
    setCellDimensions: (point: Point, dimensions: Dimensions) => void;
};
export declare type CellComponent<Cell extends CellBase = CellBase> = ComponentType<CellComponentProps<Cell>>;
declare type DataComponentProps<Cell extends CellBase> = {
    cell: Cell | undefined;
} & Point;
export declare type DataViewerProps<Cell extends CellBase> = DataComponentProps<Cell> & {
    formulaParser: FormulaParser;
};
export declare type DataViewerComponent<Cell extends CellBase = CellBase> = ComponentType<DataViewerProps<Cell>>;
export declare type DataEditorProps<Cell extends CellBase> = DataComponentProps<Cell> & {
    onChange: (cell: Cell) => void;
};
export declare type DataEditorComponent<Cell extends CellBase = CellBase> = ComponentType<DataEditorProps<Cell>>;
export {};
