import * as React from "react";
import * as Types from "./types";
declare type Value = string | number;
declare type Cell = Types.CellBase<Value>;
declare const DataEditor: {
    ({ onChange, cell, }: Types.DataEditorProps<Cell>): React.ReactElement;
    defaultProps: {
        cell: {
            value: string;
        };
    };
};
export default DataEditor;
