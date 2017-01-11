import { Component, OnInit } from '@angular/core';
import {Experience} from "./experience";
import {ExperienceService} from "./experience.service";

@Component({
  selector: 'bp-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css'],
  providers: [ExperienceService]
})
export class ExperiencesComponent implements OnInit {

  selectedExperience: Experience;

  constructor() { }

  ngOnInit() {
  }

}
