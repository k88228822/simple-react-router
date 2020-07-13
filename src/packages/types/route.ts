import React from "react";
import {ILocation} from "./history";
import {Key} from "path-to-regexp";

export interface IRouteOptions {
  path: Array<string>|string;
  exact?: boolean;
  strict?: boolean;
  sensitive?: boolean;
}

export interface IRouteProps extends IRouteOptions{

  component?: React.ComponentType<any>;

  children?: ((props?:object) => React.ReactNode)|React.ReactNode;

  location?: ILocation;
}

export interface IPathRegCacheItem {
  regexp: RegExp;
  keys: Array<Key>;
}

export interface IPathRegCache {
  [key: string]: IPathRegCacheItem;
}

export interface IPathMathResult {
  path: string;
  url: string;
  isExact: boolean
}
