import {Routes, RouterModule} from "@angular/router";
import {ExperiencesComponent} from "./experiences/experiences.component";
import {ContactComponent} from "./contact/contact.component";
import {EXPERIENCE_ROUTES} from "./experiences/experiences.routes";


const APP_ROUTES: Routes = [
  { path: 'experiences', component: ExperiencesComponent, children: EXPERIENCE_ROUTES },
  { path: 'contact', component: ContactComponent},
  { path: '**', redirectTo: '/experiences'}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
