import * as React from "react";
import { ReactNode } from "react";
export declare type Props = {
    columns: number;
    hideColumnIndicators?: boolean | null;
    children: ReactNode;
};
declare const Table: ({ children, columns, hideColumnIndicators, }: Props) => React.ReactElement;
export default Table;
