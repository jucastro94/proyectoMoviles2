/**
  * comprobar si esta almacenada la token en localstorage
  */
export const checkToken = (): boolean => {
    return localStorage.getItem('token') !== null;
}
