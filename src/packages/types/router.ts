import {IHistory, ILocation} from "./history";
import {ReactNode, ComponentType} from "react";
import { IRoute } from "./route";

export interface IRouterContext {
  history: IHistory;
  location?: ILocation
}

export interface IRouterProps {
  history: IHistory;
  children?: ReactNode;
}
