import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneratorComponent } from './generator.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MatDividerModule } from '@angular/material/divider';
import { FormComponent } from '@components/form/form.component';
import { CheckboxEditorComponent } from './components/checkbox-editor/checkbox-editor.component';
import { TextEditorComponent } from './components/text-editor/text-editor.component';
import { FieldEditorComponent } from './components/field-editor/field-editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RadioEditorComponent } from './components/radio-editor/radio-editor.component';
import { SelectorEditorComponent } from './components/selector-editor/selector-editor.component';
import { TextViewerComponent } from '@components/text-viewer/text-viewer.component';
import { RadioViewerComponent } from '@components/radio-viewer/radio-viewer.component';
import { CheckboxViewerComponent } from '@components/checkbox-viewer/checkbox-viewer.component';
import { SelectorViewerComponent } from '@components/selector-viewer/selector-viewer.component';
import { FieldViewerComponent } from '../components/field-viewer/field-viewer.component';

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
    RadioEditorComponent,
    SelectorEditorComponent,
    TextViewerComponent,
    RadioViewerComponent,
    CheckboxViewerComponent,
    SelectorViewerComponent,
    FieldViewerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class GeneratorModule { }
