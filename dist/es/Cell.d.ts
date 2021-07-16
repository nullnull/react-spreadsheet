import * as React from "react";
import * as Types from "./types";
export declare const Cell: <Data extends Types.CellBase<any>>({ row, column, setCellDimensions, select, activate, mode, dragging, formulaParser, selected, active, DataViewer, data, }: Types.CellComponentProps<Data>) => React.ReactElement;
export declare const enhance: (Child: ((props: Types.CellComponentProps<Types.CellBase<any>> & {
    active: boolean;
    selected: boolean;
    copied: boolean;
    mode: Types.Mode;
    data: Types.CellBase<any> | undefined;
    dragging: boolean;
    /** @todo refactor */
    _bindingChanged: {} | null;
}) => React.ReactNode) | React.ComponentClass<Types.CellComponentProps<Types.CellBase<any>> & {
    active: boolean;
    selected: boolean;
    copied: boolean;
    mode: Types.Mode;
    data: Types.CellBase<any> | undefined;
    dragging: boolean;
    /** @todo refactor */
    _bindingChanged: {} | null;
}, unknown> | React.FC<Types.CellComponentProps<Types.CellBase<any>> & {
    active: boolean;
    selected: boolean;
    copied: boolean;
    mode: Types.Mode;
    data: Types.CellBase<any> | undefined;
    dragging: boolean;
    /** @todo refactor */
    _bindingChanged: {} | null;
}>) => React.ComponentClass<Types.CellComponentProps<Types.CellBase<any>> | (Types.CellComponentProps<Types.CellBase<any>> & {
    active: boolean;
    selected: boolean;
    copied: boolean;
    mode: Types.Mode;
    data: Types.CellBase<any> | undefined;
    dragging: boolean;
    /** @todo refactor */
    _bindingChanged: {} | null;
}), unknown> | React.FC<Types.CellComponentProps<Types.CellBase<any>> | (Types.CellComponentProps<Types.CellBase<any>> & {
    active: boolean;
    selected: boolean;
    copied: boolean;
    mode: Types.Mode;
    data: Types.CellBase<any> | undefined;
    dragging: boolean;
    /** @todo refactor */
    _bindingChanged: {} | null;
})>;
