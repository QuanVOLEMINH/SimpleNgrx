import { Action } from "@ngrx/store";

export const VIEW = 'VIEW';

export class ViewSurveyAction implements Action {
    readonly type = VIEW;
    constructor(public payload: any) { }
}


export type Actions = ViewSurveyAction;