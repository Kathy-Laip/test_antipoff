import { legacy_createStore as createStore} from 'redux';

const CHANGE_VALUE = 'CHANGE_VALUE'

type State = {
  obj: {
    value: any;
    };
};

type Action = {
  type: 'CHANGE_VALUE';
  payload: any;
};

const initialState: State = {
  obj: {
    value: {},
  },
};

export function actionChange(value: any) {
    return { 
        type: 'CHANGE_VALUE',
        valueNew: value
    };
}

const reducer = (state = initialState, action: any)  => {
    switch (action.type) {
      case 'CHANGE_VALUE':
        return {
          ...state,
          obj: {
            value: action.valueNew,
          },
        };
      default:
        return state;
    }
};

const store = createStore(reducer)

export default store

