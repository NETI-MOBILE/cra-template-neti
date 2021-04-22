import { LocationDescriptor, History, Path } from 'history';

import history from '../history';

class RouteServiceC {
  push = (path: Path | LocationDescriptor<History.LocationState>, state?: any): void => {
    if (typeof path === 'string') {
      history.push(path as Path, state);
    }

    history.push(path as LocationDescriptor<History.LocationState>);
  };
}

const RouteService = new RouteServiceC();
export default RouteService;
