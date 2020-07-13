import {pathToRegexp, Key} from 'path-to-regexp';
import {IPathMathResult, IPathRegCache, IPathRegCacheItem, IRouteOptions} from "../types/route";

const cache = {} as IPathRegCache;
const cacheLimit = 10000;
let cacheCount = 0;

const compilePath = (path:string, options: IRouteOptions):IPathRegCacheItem=>{
  const {exact = false, ...others} = options;
  const cacheKey = `${exact}${options.path}${options.strict}`;
  const keys: Key[] = [];

  if(cache[cacheKey]) return cache[cacheKey];

  const regexp = pathToRegexp(path, keys, Object.assign({end: exact}, others));

  if(cacheCount<cacheLimit){
    cache[cacheKey] = { regexp, keys};
    cacheCount++;
  }

  return {regexp, keys}
};

export default function (pathname:string, options:IRouteOptions): IPathMathResult | null{
  if(!pathname) return null;
  let { path, exact = false } = options;

  const reuslt = ([] as Array<string>).concat(path).reduce((matched:IPathMathResult | null, itemPath:string)=>{
    if(matched) return matched;

    const {regexp} = compilePath(itemPath, options);
    const [url]= regexp.exec(pathname) || [];
    const isExact = url === pathname;

    if(!url || (exact && !isExact)) return null;

    return {
      url,
      path: itemPath,
      isExact
    };

  }, null);
  return reuslt;
}
