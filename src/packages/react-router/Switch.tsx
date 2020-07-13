import React, {FunctionComponent, ReactElement, useContext, useMemo} from "react";
import matchPath from "./matchPath";
import RouterContext from "./RouterContext";

const Switch: FunctionComponent = function ({children}) {
  const {location} = useContext(RouterContext);
  return useMemo(() => {
    let selected: ReactElement | null = null;
    React.Children.forEach<ReactElement>(children as ReactElement, (child: ReactElement) => {
      if (!child?.props) return;
      const result = matchPath(location?.pathname || '/', child?.props);
      if (!selected && result) selected = child;
    });

    return selected;
  }, [children, location]);
};

export default Switch;
