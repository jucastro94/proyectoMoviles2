import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from '../utilities/common';
import { Form } from '@models/form';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  private readonly formsEndpoint = API + '/structs';

  constructor(private readonly http: HttpClient) { }

  getAllForms() {
    return this.http.get<Form[]>(`${this.formsEndpoint}/getAll`);
  }

  getFormByName(name: string) {
    return this.http.get<Form>(`${this.formsEndpoint}/getOne/${name}`);
  }

  createForm(body: Form) {
    return this.http.post<Form>(`${this.formsEndpoint}/create`, body);
  }
}
