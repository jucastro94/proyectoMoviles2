import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneratorComponent } from './generator.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { FormComponent } from '@components/form/form.component';
import { CheckboxEditorComponent } from './components/checkbox-editor/checkbox-editor.component';
import { TextEditorComponent } from './components/text-editor/text-editor.component';
import { FieldEditorComponent } from './components/field-editor/field-editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: GeneratorComponent,
  }
];

@NgModule({
  declarations: [
    GeneratorComponent,
    FormComponent,
    CheckboxEditorComponent,
    TextEditorComponent,
    FieldEditorComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class GeneratorModule { }
