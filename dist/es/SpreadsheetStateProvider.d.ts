import * as React from "react";
import { Store } from "unistore";
import * as Types from "./types";
import * as Matrix from "./matrix";
import { Props as SpreadsheetProps } from "./Spreadsheet";
declare type Unsubscribe = () => void;
export declare type Props<CellType extends Types.CellBase> = Omit<SpreadsheetProps<CellType>, "store"> & {
    onChange: (data: Matrix.Matrix<CellType>) => void;
    onModeChange: (mode: Types.Mode) => void;
    onSelect: (selected: Types.Point[]) => void;
    onActivate: (active: Types.Point) => void;
    onCellCommit: (prevCell: null | CellType, nextCell: null | CellType, coords: null | Types.Point) => void;
    data: Matrix.Matrix<CellType>;
};
export default class SpreadsheetStateProvider<CellType extends Types.CellBase> extends React.PureComponent<Props<CellType>> {
    store: Store<Types.StoreState<CellType>>;
    unsubscribe: Unsubscribe;
    prevState: Types.StoreState<CellType>;
    static defaultProps: {
        onChange: () => void;
        onModeChange: () => void;
        onSelect: () => void;
        onActivate: () => void;
        onCellCommit: () => void;
    };
    constructor(props: Props<CellType>);
    componentDidMount(): void;
    componentDidUpdate(prevProps: Props<CellType>): void;
    componentWillUnmount(): void;
    render(): React.ReactElement;
}
export {};
