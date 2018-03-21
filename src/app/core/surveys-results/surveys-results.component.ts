import { Component, OnInit } from '@angular/core';
import { SurveysService } from '../../services/surveys.service';
import { Store, select } from '@ngrx/store';
import * as fromSurvey from '../reducer/survey.reducer';
import { Observable } from 'rxjs/Observable';
import * as surveyAction from '../actions/view-survey.action';
import { Survey } from '../models/survey.model';

@Component({
  selector: 'app-surveys-results',
  templateUrl: './surveys-results.component.html',
  styleUrls: ['./surveys-results.component.css']
})
export class SurveysResultsComponent implements OnInit {
  surveys: any[];
  ts$: Observable<any>;

  constructor(private surverService: SurveysService, private store: Store<Survey>) {
    this.store.select((state: any) => state.survey).subscribe(s => this.ts$ = s);

  }

  ngOnInit() {
    this.surverService.getSurveys().then(
      (data: any) => {
        this.surveys = data.results;
      }
    )
  }

  viewSurveyDetail(survey) {
    console.log(survey);
    this.store.dispatch(new surveyAction.ViewSurveyAction(survey));
  }

}
