import React, {useContext, useMemo} from 'react';
import { IRouteProps } from '../types/route';
import RouterContext from "./RouterContext";
import {formatPathName} from "../history";

function formatArrayPath(paths: Array<string>|string) {
  return Array.isArray(paths)? paths.map(item=> formatPathName(item)): [formatPathName(paths)]
}

export default function ({path, component, location:defLocation, children}: IRouteProps) {
  const routerContext = useContext(RouterContext);
  const location = defLocation || routerContext.location;

  const match = useMemo(()=>{
    return formatArrayPath(path).includes(routerContext.location?.pathname || '')
  }, [path, routerContext.location]);

  const result = useMemo(()=>{
    const newProps = Object.assign({}, routerContext, {location});
    if(typeof children === 'function') return children(newProps);
    if(children) return children;
    if(!component) return null;
    return React.createElement(component, newProps);
  }, [children, component, location, routerContext]);

  return match? result: null;
}
