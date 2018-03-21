import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SurveysResultsComponent } from './surveys-results/surveys-results.component';
import { SurveysService } from '../services/surveys.service';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';



export const COMPONENTS = [
    SurveysResultsComponent
];

@NgModule({
    imports: [CommonModule, HttpClientModule, MaterialModule],
    declarations: COMPONENTS,
    exports: COMPONENTS,
    providers: [SurveysService]
})
export class CoreModule {
}
