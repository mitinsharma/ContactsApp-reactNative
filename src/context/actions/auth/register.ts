import { REGISTER_LOADING, REGISTER_SUCCESS, REGISTER_FAIL, CLEAR_AUTH_STATE } from './../../../constants/actionTypes/index';
import axiosInstance from "../../../helpers/axiosInterceptor"
import { resolvePath } from 'react-native-reanimated/lib/types/lib/reanimated2/animation/styleAnimation';

export const clearAuthState = () => (dispatch) => {
  dispatch({
    type: CLEAR_AUTH_STATE
  });
}

export default ({
  firstName: first_name,
  lastName: last_name,
  email,
  username,
  password
}) => (dispatch) => {
  dispatch({
    type: REGISTER_LOADING,
  });
  axiosInstance.post('/auth/register',{
    first_name,
    last_name,
    email,
    username,
    password
  }).then((res) => {
    console.log('---- res --- ', res.data.message);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
  }).catch((err) => {
    dispatch({
      type: REGISTER_FAIL,
      payload: err.response ? err.response.data : { error: 'Something went wrong, try again'}
    });
  });
}