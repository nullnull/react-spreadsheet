import * as React from "react";
import * as PointSet from "./point-set";
import * as Types from "./types";
export declare type StateProps = Types.Dimensions & {
    hidden: boolean;
    dragging: boolean;
};
export declare type Props = StateProps & {
    variant: "copied" | "selected";
};
declare const FloatingRect: React.FC<Props>;
export declare const mapStateToProps: (state: Types.StoreState, cells: PointSet.PointSet) => Omit<StateProps, "dragging">;
export default FloatingRect;
