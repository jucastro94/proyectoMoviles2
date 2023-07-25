import { Dictionary } from "@models/dictionary";

/**
  * comprobar si esta almacenada la token en localstorage
  */
export const checkToken = (): boolean => {
  const possible = localStorage.getItem('token');
  const cond = possible  !== null && possible !== undefined;
  return cond;
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
 * usar solo si se tiene el token
 * @returns id de usuario
 */
export const getId = (): string => {
  return localStorage.getItem('id')!;
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

/**
 * direccion de la api
 */
export const API = 'https://appidos.eastus.cloudapp.azure.com';


/**
 * convetir un string dado por un usuario en uno valido para usar en db o js objects. haciendo lo siguiente:
 * 1. remover tildes
 * 2. reemplazar espacios por guiones
 * 3. remover espacios de principio y fin
 * 4. volver todo minusculas.
 * 5. retornar resultado.
 * @param string nombre de campo
 * @returns nombre de campo pero valido para usar como llave-valor
 */
export const turnToValidFieldName = (string: string): string => {
  const tildes: Dictionary<string> = {
    'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u', 'ñ': 'n',
    'Á': 'A', 'É': 'E', 'Í': 'I', 'Ó': 'O', 'Ú': 'U', 'Ñ': 'N'
  };

  const validCharsRegex = new RegExp("^[0-9@#$%^&+=*!]+(?: [0-9@#$%^&+=*!]+)?$");

  const transformedString = string
    .replace(/[áéíóúñÁÉÍÓÚÑ]/g, char => tildes[char])
    .replace(/\s/g, '-')
    .replace(validCharsRegex, '')
    .trim()
    .toLowerCase();

  return transformedString;
};
