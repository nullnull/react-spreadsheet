/// <reference types="react" />
import * as Matrix from "./matrix";
import * as Types from "./types";
declare enum Direction {
    Left = "Left",
    Right = "Right",
    Top = "Top",
    Down = "Down"
}
export declare const setData: <Cell extends Types.CellBase<any>>(state: Types.StoreState<Cell>, data: Matrix.Matrix<Cell>) => Partial<Types.StoreState<Cell>>;
export declare const select: (state: Types.StoreState, cellPointer: Types.Point) => Partial<Types.StoreState> | null;
export declare const activate: (state: Types.StoreState, cellPointer: Types.Point) => Partial<Types.StoreState> | null;
export declare function setCellData<Cell extends Types.CellBase>(state: Types.StoreState<Cell>, active: Types.Point, data: Cell, bindings: Types.Point[]): Partial<Types.StoreState<Cell>> | null;
export declare function setCellDimensions(state: Types.StoreState, point: Types.Point, dimensions: Types.Dimensions): Partial<Types.StoreState> | null;
export declare function copy<Cell extends Types.CellBase>(state: Types.StoreState<Cell>): Partial<Types.StoreState<Cell>>;
export declare function cut(state: Types.StoreState): Partial<Types.StoreState>;
export declare function paste<Cell extends Types.CellBase>(state: Types.StoreState<Cell>, text: string): Promise<Partial<Types.StoreState<Cell>> | null>;
export declare const edit: (state: Types.StoreState<Types.CellBase>) => Partial<Types.StoreState> | null;
export declare const view: () => Partial<Types.StoreState>;
export declare const clear: <Cell extends Types.CellBase<any>>(state: Types.StoreState<Cell>) => Partial<Types.StoreState<Cell>> | null;
export declare type KeyDownHandler = (state: Types.StoreState<Types.CellBase>, event: React.KeyboardEvent) => Partial<Types.StoreState> | null;
export declare const go: (rowDelta: number, columnDelta: number) => KeyDownHandler;
export declare const modifyEdge: (edge: Direction) => (state: Types.StoreState) => Partial<Types.StoreState> | null;
export declare const blur: () => Partial<Types.StoreState>;
export declare function keyPress(state: Types.StoreState<Types.CellBase>, event: React.KeyboardEvent): Partial<Types.StoreState> | null;
export declare function getKeyDownHandler(state: Types.StoreState, event: React.KeyboardEvent): KeyDownHandler;
export declare function keyDown(state: Types.StoreState, event: React.KeyboardEvent): Partial<Types.StoreState> | null;
export declare function dragStart(state: Types.StoreState): Partial<Types.StoreState>;
export declare function dragEnd(state: Types.StoreState): Partial<Types.StoreState>;
export declare function commit<Cell extends Types.CellBase>(state: Types.StoreState<Cell>, changes: Array<{
    prevCell: Cell | null;
    nextCell: Cell | null;
}>): Partial<Types.StoreState<Cell>>;
export {};
