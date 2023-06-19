/**
  * comprobar si esta almacenada la token en localstorage
  */
export const checkToken = (): boolean => {
  return localStorage.getItem('token') !== null;
}

/**
 * **usar solo despues de haber usado {@link checkToken} para comprobar que el token
 * existe.
 * @returns el token del localstorage
 */
export const getToken = (): string => {
  return localStorage.getItem('token')!
}

/**
 * helper para castear el target del evento en un input y capturar el valor del 
 * event onChange, pensado para usarse en input con o sin atributo de mat-input
 * con el evento (input)
 * @param event evento the OnChange de un materialInput
 * @returns en string el valor resultado del onChange event
 * 
 * @example
 * <input (input)="value = onInputChange($event)"> //o usar un metodo del componente
 */
export const onInputChange = (event: Event): string => {
  const inputValue = (event.target as HTMLInputElement).value;
  return inputValue;
}
