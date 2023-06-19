import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxViewerComponent } from '@components/checkbox-viewer/checkbox-viewer.component';
import { FieldViewerComponent } from '@components/field-viewer/field-viewer.component';
import { RadioViewerComponent } from '@components/radio-viewer/radio-viewer.component';
import { SelectorViewerComponent } from '@components/selector-viewer/selector-viewer.component';
import { TextViewerComponent } from '@components/text-viewer/text-viewer.component';
import { CheckboxEditorComponent } from '../generator/components/checkbox-editor/checkbox-editor.component';
import { FieldEditorComponent } from '../generator/components/field-editor/field-editor.component';
import { RadioEditorComponent } from '../generator/components/radio-editor/radio-editor.component';
import { SelectorEditorComponent } from '../generator/components/selector-editor/selector-editor.component';
import { TextEditorComponent } from '../generator/components/text-editor/text-editor.component';
import { FormComponent } from '@components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared.module';
import { CastPipe } from '../pipes/cast.pipe';

/**
 * only stuff related to form generation and form renderization
 */
@NgModule({
  declarations: [
    //generation
    CheckboxEditorComponent,
    TextEditorComponent,
    FieldEditorComponent,
    RadioEditorComponent,
    SelectorEditorComponent,

    //viewing
    TextViewerComponent,
    RadioViewerComponent,
    CheckboxViewerComponent,
    SelectorViewerComponent,
    FieldViewerComponent,
    FormComponent,

    CastPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [
    CheckboxEditorComponent,
    TextEditorComponent,
    FieldEditorComponent,
    RadioEditorComponent,
    SelectorEditorComponent,
    TextViewerComponent,
    RadioViewerComponent,
    CheckboxViewerComponent,
    SelectorViewerComponent,
    FieldViewerComponent,
    FormComponent,

    FormsModule,
    ReactiveFormsModule,
  ],
})
export class FormBuilderModule { }
