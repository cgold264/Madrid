import { setLoginUser } from '../actions/userActions';
import {
    fetchUsers
} from './service';

export const allUsers = () => async (dispatch) => {
    try {
      const data = await fetchUsers();
      console.log("table service", data);
      dispatch(setLoginUser(data));
    } catch (error) {
      console.error('Error:', error);
    }
  };
