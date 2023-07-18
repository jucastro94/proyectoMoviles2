import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from '../utilities/common';
import { Form } from '@models/form';
import { Answer } from '@models/answer';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  private readonly formsEndpoint = API + '/structs';

  private readonly entriesEndpoint = API + '/entries';

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

  submitEntry(answer: Answer) {
    return this.http.post<void>(`${this.entriesEndpoint}/create`, answer)
  }

  getEntriesByForm(formName: string) {
    return this.http.get<Answer[]>(`${this.entriesEndpoint}/getAll/${formName}`);
  }
}
