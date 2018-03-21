import { Action } from '@ngrx/store';
import { Actions, VIEW } from '../actions/view-survey.action';
import { Survey } from '../models/survey.model';

export const initialSurveyState: Survey = {} as Survey;  

export function viewSurveyDetailReducer(state: Survey = initialSurveyState, action: Actions): Survey {
    switch (action.type) {
        case VIEW: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}
