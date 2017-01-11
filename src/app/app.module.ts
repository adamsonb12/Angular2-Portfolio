import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ExperiencesListComponent } from './experiences/experiences-list/experiences-list.component';
import { ExperiencesDetailComponent } from './experiences/experiences-detail/experiences-detail.component';
import { ExperiencesItemComponent } from './experiences/experiences-list/experiences-item.component';
import { DropdownDirective } from './header/dropdown.directive';
import { ContactComponent } from './contact/contact.component';
import { EmailComponent } from './contact/email/email.component';
import { ContactDetailsComponent } from './contact/contact-details/contact-details.component';
import {routing} from "./app.routing";
import { ExperienceStartComponent } from './experiences/experience-start.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ExperiencesComponent,
    ExperiencesListComponent,
    ExperiencesDetailComponent,
    ExperiencesItemComponent,
    DropdownDirective,
    ContactComponent,
    EmailComponent,
    ContactDetailsComponent,
    ExperienceStartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
