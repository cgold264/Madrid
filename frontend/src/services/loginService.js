import { setLoginUser } from '../actions/userActions';
import {
    fetchUsers
} from './service';

export const allUsers = () => async (dispatch) => {
    try {
      const data = await fetchUsers();
      dispatch(setLoginUser(data));
    } catch (error) {
      console.error('Error:', error);
    }
  };

export const validateLogin = (userName, Password) => {
  console.log(userName, Password)
}
