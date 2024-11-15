import Cookies from 'js-cookie';

export const getTokenFromCookies = () => {
  return Cookies.get('accessToken');
};