import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MaterialModule } from './material/material.module';
import { Routes, RouterModule, Router } from '@angular/router';
import { SurveysResultsComponent } from './core/surveys-results/surveys-results.component';
import { StoreModule } from '@ngrx/store';
import { viewSurveyDetailReducer } from './core/reducer/survey.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    MaterialModule,
    RouterModule,
    StoreModule.forRoot({survey:viewSurveyDetailReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
