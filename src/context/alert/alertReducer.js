// vim: ft=javascriptreact
import { SET_ALERT, REMOVE_ALERT } from '../types';

export default (state, action) => {
  return action.type === SET_ALERT ? action.payload : null;
};
