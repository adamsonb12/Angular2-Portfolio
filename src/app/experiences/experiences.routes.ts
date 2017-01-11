import {Routes} from "@angular/router";
import {ExperienceStartComponent} from "./experience-start.component";
import {ExperiencesDetailComponent} from "./experiences-detail/experiences-detail.component";

export const EXPERIENCE_ROUTES: Routes = [
  { path: '', component: ExperienceStartComponent },
  { path: ':id', component: ExperiencesDetailComponent }
];
