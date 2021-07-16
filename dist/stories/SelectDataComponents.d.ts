import { CellBase, DataEditorComponent, DataViewerComponent } from "..";
declare type Value = string | undefined;
declare type Cell = CellBase<Value> & {
    value: Value;
};
export declare const SelectView: DataViewerComponent<Cell>;
export declare const SelectEdit: DataEditorComponent<Cell>;
export {};
