/* eslint-disable @typescript-eslint/default-param-last */

import types from '../constants';

type ContainerState = {
  results: string[],
};

type ContainerActions = {
  type: string,
  payload?: any,
};

const initialState: ContainerState = {
  results: [],
};

export default function funding(state: ContainerState = initialState, action: ContainerActions) {
  switch (action.type) {
    case types.GET_CLASSES_LOADING:
      return { ...state, ...action.payload };
    case types.GET_CLASSES_SUCCESS:
      return { ...state, ...action.payload };
    default:
      return {
        ...state,
      };
  }
}
