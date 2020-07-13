import React, {useContext, useMemo} from 'react';
import { IRouteProps } from '../types/route';
import RouterContext from "./RouterContext";
import matchPath from "./matchPath";

export default function (props: IRouteProps) {
  const {component, location:defLocation, children} = props;
  const routerContext = useContext(RouterContext);
  const location = defLocation || routerContext.location;

  const match = useMemo(()=>{
    return matchPath(location?.pathname || '/', props);
  }, [location, props]);

  const result = useMemo(()=>{
    const newProps = Object.assign({}, routerContext, {location});
    if(typeof children === 'function') return children(newProps);
    if(children) return children;
    if(!component) return null;
    return React.createElement(component, newProps);
  }, [children, component, location, routerContext]);

  return match? result: null;
}
