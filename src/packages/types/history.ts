export type State = object | null;

export interface ILocation {

  hash: string;

  key: string;

  pathname: string;

  search: string;

  state: State;

}


export enum EAction {

  Push = 'PUSH',

  Pop = 'POP',

  Replace = 'REPLACE'

}


export interface IHistory {

  readonly action: EAction;

  readonly location: ILocation;

  go: (num: number) => void;

  goBack: ()=>void;

  goForward: ()=> void;

  push: (pathname: string, state?: State)=>void;

  replace: (pathname: string, state?: State)=>void;

  // 注册订阅函数
  listen: (listener: Function)=>Function;

  // 注册路由拦截器
  block: (blocker: ()=>boolean)=>void;
}


export interface IEventParams {
  location: ILocation;
  action: EAction;
}

