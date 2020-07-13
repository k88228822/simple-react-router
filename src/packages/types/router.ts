import {IHistory, ILocation} from "./history";
import {ReactNode} from "react";

export interface IRouterContext {
  history: IHistory;
  location?: ILocation
}

export interface IRouterProps {
  history: IHistory;
  children?: ReactNode;
}
