export interface ResponseLogin {
  data: any;
  code: number;
  message: string;
}
export const setLocalStorageUserInfo = (response: ResponseLogin) => {
  localStorage.setItem('token', JSON.stringify(response.data.token))
  localStorage.setItem('refreshToken', JSON.stringify(response.data.refreshToken))
  localStorage.setItem('email', JSON.stringify(response.data.email))
}

export const getToken = () => {
  return localStorage.getItem("token");
}