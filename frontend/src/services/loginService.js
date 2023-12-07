import { setLoginUser } from '../actions/userActions';
import {
    fetchUsers,
    addNewUser,
    validateUserLogin
} from './service';

export const allUsers = () => async (dispatch) => {
    try {
      const data = await fetchUsers();
      dispatch(setLoginUser(data));
    } catch (error) {
      console.error('Error:', error);
    }
  };

export const validateLogin = (payload) => async (dispatch) => {
  try {
    const response = await validateUserLogin(payload);
    if(response){
      dispatch(setLoginUser(payload));
    }
    console.log("setting response", response);
    return response;
  } catch (error) {
    console.error('Error:', error);
  }
}

export async function addUser(payload) {
  try {
    await addNewUser(payload);
    console.log('add Restaurant service');
  } catch (error) {
    console.error('Error:', error);
  }
}
