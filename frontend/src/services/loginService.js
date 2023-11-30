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

export async function validateLogin(payload) {
  console.log(payload)
  try {
    const data = await validateUserLogin(payload);
    console.log(data);
    return data;
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
