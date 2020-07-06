import React, {FunctionComponent} from "react";
import {ILocation} from "./history";

export interface IRouteProps {

  path: Array<string>|string;

  component?: React.ComponentType<any>;

  children?: ((props?:object) => React.ReactNode)|React.ReactNode;

  location?: ILocation;

}

export interface IRoute extends FunctionComponent<IRouteProps>{
}
