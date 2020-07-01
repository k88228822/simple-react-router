import {EAction, IEventParams, IHistory, ILocation, State} from "../types/history";

function formatPathName(pathname: string) {
  return pathname ?
    pathname.startsWith('/') ? pathname : `/${pathname}`
    : '';
}

function parseCurrentLocation(): ILocation {
  const {pathname = '', hash = '', search = ''} = window.location;
  const {state} = window.history;
  return {pathname, hash, search, state, key: state?.key || ''}
}

function createEvents() {
  let handlers: Array<Function> = [];
  return {
    get length() {
      return handlers.length;
    },
    add: (handle: Function) => {
      handlers.push(handle);
      return function () {
        handlers = handlers.filter(item => item !== handle);
      }
    },
    call: (args: IEventParams) => {
      handlers.forEach(handle => handle && handle(args))
    }
  }
}

export function createBrowserHistory(): IHistory {
  const globalHistory = window.history;

  let action = EAction.Pop;

  let location = parseCurrentLocation();

  const listeners = createEvents();

  const blocks = createEvents();

  window.addEventListener('popstate', () => {
    console.log('start: popstate');
  });

  window.addEventListener('hashchange', () => {
    console.log('start: hashchange');
  });

  window.addEventListener('beforeunload', () => {
    console.log('start: beforeunload');
  });

  function go(num: number) {
    globalHistory.go(num);
  }

  function goBack() {
    globalHistory.back();
  }

  function goForward() {
    globalHistory.forward();
  }

  function push(pathname: string, state?: State) {
    globalHistory.pushState(state, 'name', formatPathName(pathname));
  }

  function replace(pathname: string, state?: State) {
    globalHistory.replaceState(state, 'name', formatPathName(pathname))
  }

  function listen(listener: Function): () => void {
    return listeners.add(listener);
  }

  function block(blocker: () => boolean): () => void {
    return blocks.add(blocker);
  }

  return {
    go,
    goBack,
    goForward,
    push,
    replace,
    listen,
    block,
    action,
    location
  }
}
