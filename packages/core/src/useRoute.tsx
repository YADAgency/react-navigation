import * as React from 'react';
import { ParamListBase } from '@yadagency/react-navigation-routers';
import NavigationRouteContext from './NavigationRouteContext';
import { RouteProp } from './types';

/**
 * Hook to access the route prop of the parent screen anywhere.
 *
 * @returns Route prop of the parent screen.
 */
export default function useRoute<
  T extends RouteProp<ParamListBase, string>
>(): T {
  let route = React.useContext(NavigationRouteContext);

  if (route === undefined) {
    throw new Error(
      "We couldn't find a route object. Is your component inside a screen in a navigator?"
    );
  }

  if (!route.params) {
    route = Object.assign({}, route, { params: {} });
  }

  return route as T;
}
