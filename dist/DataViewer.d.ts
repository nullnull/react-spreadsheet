import * as React from "react";
import * as Types from "./types";
declare const DataViewer: <Cell extends Types.CellBase<any>>({ cell, formulaParser, }: Types.DataViewerProps<Cell>) => React.ReactNode;
export default DataViewer;
