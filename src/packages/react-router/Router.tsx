import React, {useEffect, useState} from 'react';
import RouterContext from './RouterContext';
import {IRouterProps} from "../types/router";
import {ILocation} from "../types/history";

export default function ({history, children}: IRouterProps){
  const [location, setLocation] = useState<ILocation>(history.location);

  useEffect(()=>{
    const unListen = history.listen(({location, action})=>{
      setLocation(location);
    });
    return ()=> unListen();
  }, [history]);

  return(
    <RouterContext.Provider
      value={{history, location}}
      children={children}
    />
  )
}
