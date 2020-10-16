import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { MyResumeComponent } from './my-resume/my-resume.component';
import { ResumeProfileComponent } from './my-resume/resume-profile/resume-profile.component';
import { ResumeWorkComponent } from './my-resume/resume-work/resume-work.component';
import { ResumeEducationComponent } from './my-resume/resume-education/resume-education.component';
import { ResumeFooterComponent } from './my-resume/resume-footer/resume-footer.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
            { path: '', component: ProductListComponent },
            { path: 'resume', component: MyResumeComponent },

      { path: '', component: ProductListComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    MyResumeComponent,
    ResumeProfileComponent,
    ResumeWorkComponent,
    ResumeEducationComponent,
    ResumeFooterComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/