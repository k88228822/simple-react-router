import React from "react";
import {IRouterContext} from "../types/router";
import {IHistory, ILocation} from "../types/history";

const RouterContext = React.createContext<IRouterContext>({
  history: {} as IHistory,
  location: {} as ILocation
});

export default RouterContext;
