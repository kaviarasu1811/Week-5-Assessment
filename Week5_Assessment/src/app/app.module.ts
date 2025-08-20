import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { App } from './app';

import { Qns1DisplayNameAgeComponent } from './qns1-display-name-age/qns1-display-name-age.component';
import { Qns2NameAgeInterpolationComponent } from './qns2-name-age-interpolation/qns2-name-age-interpolation.component';
import { Qns3AgeClassificationComponent } from './qns3-age-classification/qns3-age-classification.component';
import { Qns4EmployeeListComponent } from './qns4-employee-list/qns4-employee-list.component';
import { Qns6EmployeeAddComponent } from './qns6-employee-add/qns6-employee-add.component';
import { Qns7NoRecordsComponent } from './qns7-no-records/qns7-no-records.component';
import { Qns8ParentComponentComponent } from './qns8-parent-component/qns8-parent-component.component';
import { Qns8ChildComponentComponent } from './qns8-child-component/qns8-child-component.component';

@NgModule({
  declarations: [
    App,
    Qns1DisplayNameAgeComponent,
    Qns2NameAgeInterpolationComponent,
    Qns3AgeClassificationComponent,
    Qns4EmployeeListComponent,
    Qns6EmployeeAddComponent,
    Qns7NoRecordsComponent,
    Qns8ParentComponentComponent,
    Qns8ChildComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
